"use client";
import { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100, // Distance between items in normal flow
  itemScale = 0.03, // Scale difference between stacked cards
  itemStackDistance = 30, // Visual distance between STACKED cards
  stackPosition = '20%', // Where the stack locks on screen
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const wrapperRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  // Cache layout measurements to prevent thrashing
  const measurementsRef = useRef({
    cards: [],
    containerHeight: 0,
    endElementTop: 0,
    stackPositionPx: 0,
    scaleEndPositionPx: 0
  });
  
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);

  // Helper: Convert % to px
  const parsePercentage = useCallback((value, height) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * height;
    }
    return parseFloat(value);
  }, []);

  // 1. Measure positions once (or on resize), not on scroll
  const measureLayout = useCallback(() => {
    if (!scrollerRef.current && !useWindowScroll) return;
    
    const container = useWindowScroll ? window : scrollerRef.current;
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current.clientHeight;
    
    // Find elements
    const cardElements = Array.from(
      (useWindowScroll ? document : scrollerRef.current).querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cardElements;

    const endElement = (useWindowScroll ? document : scrollerRef.current).querySelector('.scroll-stack-end');
    
    // Calculate Absolute Offsets
    // We add current scrollY to get the absolute document position
    const currentScroll = useWindowScroll ? window.scrollY : scrollerRef.current.scrollTop;
    
    const cardMeasurements = cardElements.map(card => {
      const rect = card.getBoundingClientRect();
      // Absolute top position relative to document/container top
      const top = rect.top + currentScroll - (useWindowScroll ? 0 : scrollerRef.current.getBoundingClientRect().top);
      return { el: card, top };
    });

    let endElementTop = 0;
    if (endElement) {
      const rect = endElement.getBoundingClientRect();
      endElementTop = rect.top + currentScroll - (useWindowScroll ? 0 : scrollerRef.current.getBoundingClientRect().top);
    }

    measurementsRef.current = {
      cards: cardMeasurements,
      containerHeight,
      endElementTop,
      stackPositionPx: parsePercentage(stackPosition, containerHeight),
      scaleEndPositionPx: parsePercentage(scaleEndPosition, containerHeight)
    };
    
    // Force an update after measurement
    updateCardTransforms(currentScroll);
  }, [parsePercentage, stackPosition, scaleEndPosition, useWindowScroll]);


  // 2. The Animation Loop - Pure Math, No DOM Reads
  const updateCardTransforms = useCallback((scrollTop) => {
    const { 
      cards, 
      containerHeight, 
      endElementTop, 
      stackPositionPx, 
      scaleEndPositionPx 
    } = measurementsRef.current;

    if (!cards.length) return;

    cards.forEach((cardObj, i) => {
      const { el: card, top: cardTop } = cardObj;

      // Logic calculations using Cached values
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart; // Same as triggerStart for simplicity
      const pinEnd = endElementTop - containerHeight / 2;

      // Calculate Progress
      let scaleProgress = 0;
      if (scrollTop > triggerStart && scrollTop < triggerEnd) {
         scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollTop >= triggerEnd) {
         scaleProgress = 1;
      }

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Blur Calculation
      let blur = 0;
      if (blurAmount) {
        // Simple logic: If we are deep in the stack, blur us.
        // We estimate "depth" based on how many items are currently pinned
        const cardsPinned = Math.floor((scrollTop - cards[0].top + stackPositionPx) / itemStackDistance);
        if (i < cardsPinned) {
           blur = Math.min(10, (cardsPinned - i) * blurAmount);
        }
      }

      // Pinning Logic
      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Apply styles directly
      // REMOVED ROUNDING to prevent jitter
      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : 'none';

      // Direct mutation is fastest
      card.style.transform = transform;
      card.style.filter = filter;

      // Completion callback logic
      if (i === cards.length - 1) {
        if (isPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isPinned && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [baseScale, itemScale, itemStackDistance, rotationAmount, blurAmount, onStackComplete]);


  // 3. Initialize Lenis and Observers
  useLayoutEffect(() => {
    // Initial measurement
    measureLayout();

    // Resize Observer to handle window changes
    const resizeObserver = new ResizeObserver(() => {
      measureLayout();
    });

    if (useWindowScroll) {
      resizeObserver.observe(document.body);
    } else if (scrollerRef.current) {
      resizeObserver.observe(scrollerRef.current);
    }

    // Initialize Lenis
    const lenis = new Lenis({
      wrapper: useWindowScroll ? window : scrollerRef.current,
      content: useWindowScroll ? document.body : wrapperRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      smoothWheel: true,
      syncTouch: false, // Set false for less jitter on mobile unless specifically needed
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // SCROLL HANDLER: Pass Lenis scroll value directly to updater
    const onScroll = (e) => {
      updateCardTransforms(e.scroll); 
    };

    lenis.on('scroll', onScroll);

    // Animation Loop
    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    // Initial positioning check
    updateCardTransforms(useWindowScroll ? window.scrollY : scrollerRef.current.scrollTop);

    return () => {
      resizeObserver.disconnect();
      if (lenisRef.current) lenisRef.current.destroy();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [useWindowScroll, measureLayout, updateCardTransforms]);

  // Apply margins for spacing
  useEffect(() => {
     const cards = document.querySelectorAll('.scroll-stack-card');
     cards.forEach((card, i) => {
         if (i < cards.length - 1) {
             card.style.marginBottom = `${itemDistance}px`;
         }
         // Set Hardware Acceleration hints
         card.style.willChange = 'transform';
         card.style.transformOrigin = 'top center';
     })
  }, [itemDistance]);

  return (
    <div 
      className={`scroll-stack-scroller ${className}`.trim()} 
      ref={scrollerRef}
      style={!useWindowScroll ? { height: '100vh', overflow: 'hidden' } : {}} // Ensure container clips if not window scroll
    >
      <div className="scroll-stack-inner" ref={wrapperRef}>
        {children}
        <div className="scroll-stack-end" style={{ height: '50vh' }} /> {/* Spacer */}
      </div>
    </div>
  );
};

export default ScrollStack;