// src/components/AnimatedSection.tsx
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AnimatedSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress as the component enters and centers in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"], // Start when bottom of view, end when center of view
  });

  // Create the 3D transformations
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]); // Rotate from 20deg to 0deg
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);    // Scale from 80% to 100%
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);  // Fade in

  return (
    // The ref is on the outer div, which provides the perspective
    <div ref={ref} className={className} style={{ perspective: "1000px" }}>
      {/* The motion.div applies the animations */}
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};