'use client';

import { Medal } from 'lucide-react';
import { BackgroundLines } from '@/components/ui/background-lines';
import type { Locale } from '@/lib/i18n/config';

interface AchievementsSectionProps {
  lang: Locale;
}

export function AchievementsSection({ lang }: AchievementsSectionProps) {
  const achievements =
    lang === 'bn'
      ? [
          {
            year: '২০২৩',
            category: 'জাতীয়',
            title: 'সেরা ফিটনেস ক্লাব',
            description: 'বাংলাদেশ বিশ্ববিদ্যালয় ক্রীড়া উৎসব',
          },
          {
            year: '২০২২',
            category: 'আঞ্চলিক',
            title: 'চ্যাম্পিয়ন',
            description: 'সিলেট বিভাগীয় বডিবিল্ডিং',
          },
          {
            year: '২০২৩',
            category: 'ক্যাম্পাস',
            title: 'সেরা ক্লাব',
            description: 'সাস্ট ক্লাব অব দ্য ইয়ার',
          },
          {
            year: '২০২১',
            category: 'জাতীয়',
            title: 'রানার-আপ',
            description: 'জাতীয় পাওয়ারলিফটিং',
          },
        ]
      : [
          {
            year: '2023',
            category: 'National',
            title: 'Best Fitness Club',
            description: 'Bangladesh University Sports Festival',
          },
          {
            year: '2022',
            category: 'Regional',
            title: 'Champion',
            description: 'Sylhet Division Bodybuilding',
          },
          {
            year: '2023',
            category: 'Campus',
            title: 'Best Club',
            description: 'SUST Club of the Year',
          },
          {
            year: '2021',
            category: 'National',
            title: 'Runner-up',
            description: 'National Powerlifting',
          },
        ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30 relative overflow-hidden">
      {/* Background Lines */}
      <BackgroundLines className="opacity-30 dark:opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === 'bn' ? 'আমাদের অর্জন' : 'Our Achievements'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {lang === 'bn' ? 'গর্বের সাথে অর্জিত সাফল্য' : 'Proudly achieved success'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:shadow-xl transition-all relative overflow-hidden group dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                {achievement.year}
              </div>
              <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Medal className="w-8 h-8 text-[#2ecc71] dark:text-[#5ce1e6]" />
              </div>
              <span className="relative z-10 inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#2d3f50] text-gray-600 dark:text-gray-400 rounded-full mb-3">
                {achievement.category}
              </span>
              <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
