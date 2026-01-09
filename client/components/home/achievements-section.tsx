import { Medal, Trophy } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { AnimatedCardsGrid, AnimatedSectionHeader } from './animated-sections';

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
    <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSectionHeader>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
              <Trophy className="w-4 h-4 inline mr-2" />
              {lang === 'bn' ? 'অর্জন' : 'Achievements'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'আমাদের অর্জন' : 'Our Achievements'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'গর্বের সাথে অর্জিত সাফল্য' : 'Proudly achieved success'}
            </p>
          </div>
        </AnimatedSectionHeader>

        <AnimatedCardsGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative pt-4"
            >
              {/* Year badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] text-sm font-bold rounded-full shadow-lg z-10">
                {achievement.year}
              </div>
              <div className="p-6 pt-8 text-center rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all hover:-translate-y-1 group h-full">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-linear-to-br from-[#2ecc71]/10 to-[#27ae60]/5 dark:from-[#5ce1e6]/20 dark:to-[#5ce1e6]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Medal className="w-7 h-7 text-[#2ecc71] dark:text-[#5ce1e6]" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#0d1117] text-gray-600 dark:text-gray-400 rounded-full mb-3">
                  {achievement.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedCardsGrid>
      </div>
    </section>
  );
}
