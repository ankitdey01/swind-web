"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function PointerHighlight({
  children,
  rectangleClassName,
  containerClassName,
  pointerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  containerClassName?: string;
  pointerClassName?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setShowPointer(true), 350);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <span
      ref={ref}
      className={`relative inline-flex items-center justify-center px-3 ${containerClassName ?? ""}`}
    >
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`absolute inset-x-0 bottom-0 h-1/2 origin-left bg-black/5 dark:bg-white/5 ${rectangleClassName ?? ""}`}
      />

      <motion.span
        initial={{ opacity: 0, y: -10, rotate: -12 }}
        animate={
          showPointer
            ? { opacity: 1, y: 0, rotate: -6 }
            : { opacity: 0, y: -10, rotate: -12 }
        }
        transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute -top-4 right-0 z-10"
        aria-hidden="true"
      >
        <Pointer className={`h-5 w-5 md:h-7 md:w-7 ${pointerClassName ?? ""}`} />
      </motion.span>

      <span className="relative">{children}</span>
    </span>
  );
}

export default PointerHighlight;

function Pointer({ className }: { className?: string }) {
  return (
    <svg
      className={`text-black dark:text-white ${className ?? ""}`}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  );
}