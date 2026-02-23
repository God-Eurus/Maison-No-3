"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-[999] mix-blend-difference"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-transparent text-white cursor-pointer"
          >
            {/* SVG Circular Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
              {/* Background Track */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-20"
              />
              {/* Progress Indicator */}
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                style={{ pathLength: scrollYProgress }}
                className="text-white"
              />
            </svg>

            {/* Arrow Icon */}
            <span className="text-xs font-serif italic tracking-widest uppercase group-hover:-translate-y-1 transition-transform duration-300">
              Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}