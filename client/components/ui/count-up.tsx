"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Convert number to Bengali numerals
const toBengaliNumber = (num: number, decimals: number = 0): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const formatted = num.toFixed(decimals);
  return formatted
    .split("")
    .map((char) => {
      if (char >= "0" && char <= "9") {
        return bengaliDigits[parseInt(char)];
      }
      return char === "." ? "." : char;
    })
    .join("");
};

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // duration in milliseconds
  decimals?: number; // decimal places for floating numbers
  suffix?: string; // e.g., "+" or "%"
  prefix?: string; // e.g., "$"
  lang?: "en" | "bn";
  className?: string;
  once?: boolean; // animate only once
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
  lang = "en",
  className = "",
  once = true,
}: CountUpProps) {
  // Ensure start value is never negative (minimum 0)
  const safeStart = Math.max(0, start);
  const [count, setCount] = useState(safeStart);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const startValue = safeStart;
    const endValue = end;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (endValue - startValue) * easeOut;
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, [safeStart, end, duration]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(end);
      setHasAnimated(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          animate();
          if (once) {
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px 0px 0px" }
    );

    observer.observe(currentRef);

    // Check if already in viewport on mount
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0 && !hasAnimated) {
      animate();
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, once, hasAnimated, end]);

  const displayNumber =
    lang === "bn"
      ? toBengaliNumber(count, decimals)
      : count.toFixed(decimals).replace(/\.0+$/, "");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayNumber}
      {suffix}
    </span>
  );
}
