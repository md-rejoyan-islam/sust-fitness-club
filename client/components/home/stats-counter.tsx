"use client";

import { CountUp } from "@/components/ui/count-up";
import type { Locale } from "@/lib/i18n/config";

interface StatsCounterProps {
  lang: Locale;
  stats: {
    members: string;
    trainers: string;
    programs: string;
    years: string;
  };
}

export function StatsCounter({ lang, stats }: StatsCounterProps) {
  const statsData = [
    { value: 200, suffix: "+", label: stats.members },
    { value: 5, suffix: "+", label: stats.trainers },
    { value: 6, suffix: "+", label: stats.programs },
    { value: 1, suffix: "+", label: stats.years },
  ];

  return (
    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="text-center p-5 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white/50 dark:bg-[#161b22]/50 backdrop-blur-sm hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-colors"
        >
          <div className="text-3xl sm:text-4xl font-bold text-[#2ecc71] dark:text-[#5ce1e6]">
            <CountUp
              end={stat.value}
              suffix={stat.suffix}
              lang={lang}
              duration={2000}
            />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
