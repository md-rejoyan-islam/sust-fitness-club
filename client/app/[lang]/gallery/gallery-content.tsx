"use client";

import { LightboxModal, useLightbox } from "@/components/ui/lightbox-modal";
import {
  AnimatedFadeIn,
  AnimatedPageCards,
  AnimatedPageHero,
  AnimatedPageSection,
} from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import { Camera, Images, Play, Video } from "lucide-react";
import { useState } from "react";

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

interface GalleryContentProps {
  lang: Locale;
}

export function GalleryContent({ lang }: GalleryContentProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories =
    lang === "bn"
      ? [
          { id: "all", label: "সব" },
          { id: "marathon", label: "ম্যারাথন" },
          { id: "session", label: "সেশন" },
          { id: "events", label: "ইভেন্ট" },
        ]
      : [
          { id: "all", label: "All" },
          { id: "marathon", label: "Marathon" },
          { id: "session", label: "Session" },
          { id: "events", label: "Events" },
        ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      span: "col-span-2 row-span-2",
      alt: lang === "bn" ? "ম্যারাথন ইভেন্ট" : "Marathon Event",
      category: "marathon",
    },
    {
      src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "ফিটনেস সেশন" : "Fitness Session",
      category: "session",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "গ্রুপ ওয়ার্কআউট" : "Group Workout",
      category: "session",
    },
    {
      src: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "রানিং ইভেন্ট" : "Running Event",
      category: "marathon",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      span: "col-span-2",
      alt: lang === "bn" ? "মর্নিং সেশন" : "Morning Session",
      category: "session",
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "স্ট্রেচিং" : "Stretching",
      category: "session",
    },
    {
      src: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "ক্যাম্পাস ইভেন্ট" : "Campus Event",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      span: "",
      alt: lang === "bn" ? "টিম ফটো" : "Team Photo",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop",
      span: "col-span-2",
      alt: lang === "bn" ? "হাফ ম্যারাথন" : "Half Marathon",
      category: "marathon",
    },
  ];

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Use reusable lightbox hook
  const { isOpen, currentIndex, open, close, goToPrev, goToNext } = useLightbox(
    filteredImages.length
  );

  const featuredVideos =
    lang === "bn"
      ? [
          {
            title: "SUST হাফ ম্যারাথন হাইলাইটস",
            duration: "৫:৩০ মিনিট",
          },
          {
            title: "শুক্রবার ফিটনেস সেশন",
            duration: "৩:১৫ মিনিট",
          },
          {
            title: "ক্লাব পরিচিতি",
            duration: "২:৪৫ মিনিট",
          },
        ]
      : [
          {
            title: "SUST Half Marathon Highlights",
            duration: "5:30 min",
          },
          {
            title: "Friday Fitness Session",
            duration: "3:15 min",
          },
          {
            title: "Club Introduction",
            duration: "2:45 min",
          },
        ];

  return (
    <div className="overflow-hidden">
      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={close}
        onPrev={goToPrev}
        onNext={goToNext}
      />

      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32 pb-10 px-4 bg-white dark:bg-[#0d1117]">
        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />

        <AnimatedPageHero>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
              <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn" ? "ছবি ও ভিডিও" : "Photos & Videos"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                {lang === "bn" ? "গ্যালারি" : "Gallery"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {lang === "bn"
                ? "আমাদের ম্যারাথন, ফিটনেস সেশন এবং বিভিন্ন ইভেন্টের স্মৃতিময় মুহূর্তগুলো দেখুন।"
                : "Explore memorable moments from our marathons, fitness sessions and various events."}
            </p>

            {/* Stats badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                <Images className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  {lang === "bn" ? "মোট মিডিয়া" : "Total Media"}
                </span>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  {lang === "bn" ? "৫০+ ছবি ও ভিডিও" : "50+ Photos & Videos"}
                </span>
              </div>
            </div>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Filter Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "ক্যাটাগরি" : "Categories"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "ফটো গ্যালারি" : "Photo Gallery"}
              </h2>
            </div>
          </AnimatedPageSection>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
                className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  activeCategory === category.id
                    ? "bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30"
                    : "bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2d3f50] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid auto-rows-[200px] grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                onClick={() => open(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all ${
                  activeCategory === "all" ? item.span : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="px-4 py-2 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white rounded-xl text-sm font-medium shadow-lg">
                    {item.alt}
                  </span>
                </div>
                {/* Camera icon overlay - visible on mobile, hover on desktop */}
                <div className="absolute top-3 right-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#2ecc7055] dark:bg-[#5ce1e6] flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white dark:text-[#0d1117]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No images message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {lang === "bn"
                  ? "এই ক্যাটাগরিতে কোনো ছবি নেই"
                  : "No images in this category"}
              </p>
            </div>
          )}

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#2d3f50] text-gray-700 dark:text-gray-300 font-medium hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-all">
              <Images className="w-5 h-5" />
              {lang === "bn" ? "আরও দেখুন" : "Load More"}
            </button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Featured Videos Section */}
      <section className="relative py-4 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "ভিডিও" : "Videos"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "ফিচার্ড ভিডিও" : "Featured Videos"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "আমাদের ইভেন্ট ও সেশনের ভিডিও দেখুন"
                  : "Watch videos of our events and sessions"}
              </p>
            </div>
          </AnimatedPageSection>

          <AnimatedPageCards className="grid md:grid-cols-3 gap-6">
            {featuredVideos.map((video, index) => (
              <div key={index} className="relative pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <Video className="w-4 h-4" />
                    <span className="font-semibold text-sm">
                      {video.duration}
                    </span>
                  </div>

                  {/* Inner card with video content */}
                  <div className="rounded-xl overflow-hidden bg-white dark:bg-[#161b22]">
                    {/* Video Thumbnail */}
                    <div className="relative h-48 bg-gray-100 dark:bg-[#2d3f50] group cursor-pointer overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index === 0
                            ? "1552674605-db6ffd4facb5"
                            : index === 1
                            ? "1571019613454-1cb2f99b2d8b"
                            : "1517836357463-d25dfeac3438"
                        }?w=600&h=400&fit=crop`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#2ecc71]/50 dark:shadow-[#5ce1e6]/50">
                          <Play className="w-8 h-8 text-white dark:text-[#0d1117] ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-center">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-slate-100/50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Call to Action */}
      <section className="relative py-4 pb-16 px-4 bg-slate-100/50 dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedFadeIn>
            <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#161b22]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white dark:text-[#0d1117]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {lang === "bn"
                      ? "আপনার ছবি শেয়ার করুন"
                      : "Share Your Photos"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {lang === "bn"
                      ? "আপনি যদি আমাদের ইভেন্টে অংশগ্রহণ করে থাকেন এবং ছবি তুলে থাকেন, তাহলে আমাদের ফেসবুক পেজে শেয়ার করুন। আমরা সেগুলো আমাদের গ্যালারিতে যুক্ত করব!"
                      : "If you have participated in our events and taken photos, share them on our Facebook page. We will add them to our gallery!"}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>
    </div>
  );
}
