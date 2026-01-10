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
      src: "/gallery/IMG-20260108-WA0056.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ১" : "Fitness Club Activity 1",
    },
    {
      src: "/gallery/IMG_20260109_185048_222.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ২" : "Fitness Club Activity 2",
    },
    {
      src: "/gallery/IMG_20260109_185048_815.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ৩" : "Fitness Club Activity 3",
    },
    {
      src: "/gallery/IMG_20260109_180157_908.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ৪" : "Fitness Club Activity 4",
    },
    {
      src: "/gallery/IMG_20260109_185028_745.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ৫" : "Fitness Club Activity 5",
    },
    {
      src: "/gallery/IMG_20260109_185028_866.jpg",
      alt:
        lang === "bn" ? "ফিটনেস ক্লাব কার্যক্রম ৬" : "Fitness Club Activity 6",
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
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
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
