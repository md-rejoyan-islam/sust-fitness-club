'use client';

import { Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2">
            <div className="card p-8 relative h-full overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50]">
              <div className="relative z-10 flex gap-1">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <Quote className="font-serif size-12 text-gray-200 dark:text-[#2d3f50]" />
              </div>
              <div className="relative z-10 flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-[#5ce1e6]/30 dark:to-[#5ce1e6]/50 flex items-center justify-center text-white dark:text-[#5ce1e6] font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-[#2ecc71]/40 dark:border-[#5ce1e6]/40 text-[#2ecc71] dark:text-[#5ce1e6] hover:bg-[#2ecc71] dark:hover:bg-[#5ce1e6] hover:text-white dark:hover:text-[#1a2332] shadow-none" />
      <CarouselNext className="-right-4 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-[#2ecc71]/40 dark:border-[#5ce1e6]/40 text-[#2ecc71] dark:text-[#5ce1e6] hover:bg-[#2ecc71] dark:hover:bg-[#5ce1e6] hover:text-white dark:hover:text-[#1a2332] shadow-none" />
    </Carousel>
  );
}
