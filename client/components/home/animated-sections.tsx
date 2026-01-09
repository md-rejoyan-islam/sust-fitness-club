'use client';

import { AnimateOnScroll, StaggerGrid } from '@/components/ui/animate-on-scroll';
import { ReactNode } from 'react';

// Wrapper for section headers
export function AnimatedSectionHeader({ children }: { children: ReactNode }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={600}>
      {children}
    </AnimateOnScroll>
  );
}

// Wrapper for hero content
export function AnimatedHero({ children }: { children: ReactNode }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={800} threshold={0}>
      {children}
    </AnimateOnScroll>
  );
}

// Wrapper for staggered cards grid - each card animates one by one
interface AnimatedCardsGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function AnimatedCardsGrid({
  children,
  className,
  staggerDelay = 150
}: AnimatedCardsGridProps) {
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

// Wrapper for single animated section
export function AnimatedSection({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimateOnScroll animation="fade-up" delay={delay} className={className}>
      {children}
    </AnimateOnScroll>
  );
}

// Wrapper for fade in animation
export function FadeIn({
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

// Wrapper for scale in animation
export function ScaleIn({
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