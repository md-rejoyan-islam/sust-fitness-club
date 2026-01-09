'use client';

import { AnimateOnScroll, StaggerGrid } from './animate-on-scroll';
import { ReactNode } from 'react';

// Hero section animation - fades up with longer duration
export function AnimatedPageHero({ children }: { children: ReactNode }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={800} threshold={0}>
      {children}
    </AnimateOnScroll>
  );
}

// Section header animation
export function AnimatedPageSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={600} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Cards grid with staggered animation - each card animates one by one
interface AnimatedPageCardsProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function AnimatedPageCards({
  children,
  className,
  staggerDelay = 150
}: AnimatedPageCardsProps) {
  return (
    <StaggerGrid
      className={className}
      staggerDelay={staggerDelay}
      animation="fade-up"
      duration={600}
    >
      {children}
    </StaggerGrid>
  );
}

// Fade in animation for general content
export function AnimatedFadeIn({
  children,
  className,
  delay = 0,
  duration = 500
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <AnimateOnScroll animation="fade-in" delay={delay} duration={duration} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Scale in animation
export function AnimatedScaleIn({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimateOnScroll animation="scale-in" delay={delay} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Slide from left
export function AnimatedSlideLeft({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimateOnScroll animation="fade-right" delay={delay} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Slide from right
export function AnimatedSlideRight({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimateOnScroll animation="fade-left" delay={delay} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Staggered grid animation - cards animate one by one
interface AnimatedStaggerGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function AnimatedStaggerGrid({
  children,
  className,
  staggerDelay = 100
}: AnimatedStaggerGridProps) {
  return (
    <StaggerGrid
      className={className}
      staggerDelay={staggerDelay}
      animation="fade-up"
      duration={500}
    >
      {children}
    </StaggerGrid>
  );
}