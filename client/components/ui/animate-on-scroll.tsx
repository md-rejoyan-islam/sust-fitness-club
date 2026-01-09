'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in' | 'blur-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number; // 0-1, how much of element should be visible
  once?: boolean; // animate only once
  staggerChildren?: number; // stagger delay between children in ms
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'scale-in': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  'blur-in': {
    initial: 'opacity-0 blur-sm',
    animate: 'opacity-100 blur-0',
  },
};

export function AnimateOnScroll({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 500,
  threshold = 0,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: '100px 0px 0px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);

      // Check if element is already in viewport on mount
      const rect = currentRef.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setIsVisible(true);
      }
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

// Staggered animation container for multiple items
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // delay between each child in ms
  animation?: AnimationType;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-up',
  duration = 500,
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const { initial, animate } = animationClasses[animation];

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn('transition-all', isVisible ? animate : initial)}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${isVisible ? index * staggerDelay : 0}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

// Staggered animation for grid items - each card animates one by one
interface StaggerGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: AnimationType;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

// Animation styles for inline usage
const animationStyles: Record<AnimationType, { initial: React.CSSProperties; animate: React.CSSProperties }> = {
  'fade-up': {
    initial: { opacity: 0, transform: 'translateY(30px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-down': {
    initial: { opacity: 0, transform: 'translateY(-30px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-left': {
    initial: { opacity: 0, transform: 'translateX(30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-right': {
    initial: { opacity: 0, transform: 'translateX(-30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-in': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  'scale-in': {
    initial: { opacity: 0, transform: 'scale(0.95)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  'blur-in': {
    initial: { opacity: 0, filter: 'blur(4px)' },
    animate: { opacity: 1, filter: 'blur(0)' },
  },
};

// Individual grid item that animates when visible
function AnimatedGridItem({
  children,
  animation,
  duration,
  once,
}: {
  children: React.ReactNode;
  animation: AnimationType;
  duration: number;
  once: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: '50px 0px 0px 0px' }
    );

    observer.observe(currentRef);

    // Check if already in viewport on mount
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    return () => {
      observer.disconnect();
    };
  }, [once, isVisible]);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        ...(isVisible ? styles.animate : styles.initial),
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerGrid({
  children,
  className,
  animation = 'fade-up',
  duration = 600,
  once = true,
}: StaggerGridProps) {
  // Flatten children array to handle mapped children properly
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedGridItem
          key={index}
          animation={animation}
          duration={duration}
          once={once}
        >
          {child}
        </AnimatedGridItem>
      ))}
    </div>
  );
}