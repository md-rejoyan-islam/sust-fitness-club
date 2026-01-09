"use client";

import { LightboxModal, useLightbox } from "@/components/ui/lightbox-modal";
import type { Locale } from "@/lib/i18n/config";
import { Expand, Images } from "lucide-react";
import Link from "next/link";
import { AnimatedCardsGrid, AnimatedSection } from "./animated-sections";

interface HomeGalleryProps {
  lang: Locale;
}

export function HomeGallery({ lang }: HomeGalleryProps) {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "জিম সেশন ১" : "Gym Session 1",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "জিম সেশন ২" : "Gym Session 2",
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "ওয়ার্কআউট" : "Workout",
    },
    {
      src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "রানিং" : "Running",
    },
    {
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "ফিটনেস" : "Fitness",
    },
    {
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
      alt: lang === "bn" ? "ট্রেনিং" : "Training",
    },
  ];

  const { isOpen, currentIndex, open, close, goToPrev, goToNext } = useLightbox(
    galleryImages.length
  );

  return (
    <>
      {/* Lightbox Modal */}
      <LightboxModal
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={close}
        onPrev={goToPrev}
        onNext={goToNext}
      />

      <AnimatedCardsGrid className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            onClick={() => open(index)}
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
              <span className="px-4 py-2 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white rounded-xl text-sm font-medium shadow-lg">
                {image.alt}
              </span>
            </div>
            {/* Expand icon overlay - visible on mobile, hover on desktop */}
            <div className="absolute top-3 right-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[#2ecc7057] dark:bg-[#5ce1e6] flex items-center justify-center">
                <Expand className="w-4 h-4 text-white dark:text-[#0d1117]" />
              </div>
            </div>
          </div>
        ))}
      </AnimatedCardsGrid>

      <AnimatedSection delay={300} className="mt-8 text-center">
        <Link href={`/${lang}/gallery`}>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-dashed border-[#2ecc71]/50! dark:border-[#5ce1e6]/50 bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 font-semibold hover:bg-[#2ecc71]/10 dark:hover:bg-[#5ce1e6]/10 hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-all">
            <Images className="w-5 h-5" />
            {lang === "bn" ? "সব ছবি দেখুন" : "View All Photos"}
          </button>
        </Link>
      </AnimatedSection>
    </>
  );
}
