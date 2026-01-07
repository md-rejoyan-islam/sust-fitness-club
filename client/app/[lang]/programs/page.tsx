import { Dumbbell, Heart, Zap, Target, Clock, Users, Calendar, Activity, Trophy } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.programs.title,
    description: dict.programs.subtitle,
  };
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const programIcons = [Dumbbell, Activity, Heart, Trophy];

  const schedules = lang === 'bn' ? [
    {
      day: 'শনিবার - বুধবার',
      time: 'সকাল ৬:০০ - রাত ১০:০০',
    },
    {
      day: 'বৃহস্পতিবার',
      time: 'সকাল ৬:০০ - দুপুর ১:০০',
    },
    {
      day: 'শুক্রবার',
      time: 'বিকাল ৪:০০ - রাত ১০:০০',
    },
  ] : [
    {
      day: 'Saturday - Wednesday',
      time: '6:00 AM - 10:00 PM',
    },
    {
      day: 'Thursday',
      time: '6:00 AM - 1:00 PM',
    },
    {
      day: 'Friday',
      time: '4:00 PM - 10:00 PM',
    },
  ];

  const benefits = lang === 'bn' ? [
    { title: 'শক্তি বৃদ্ধি', description: 'পেশী গঠন ও শক্তি বাড়ান' },
    { title: 'ওজন নিয়ন্ত্রণ', description: 'স্বাস্থ্যকর ওজন বজায় রাখুন' },
    { title: 'মানসিক স্বাস্থ্য', description: 'স্ট্রেস কমান ও মন ভালো রাখুন' },
    { title: 'এনার্জি বুস্ট', description: 'সারাদিন এনার্জেটিক থাকুন' },
  ] : [
    { title: 'Build Strength', description: 'Build muscle and increase strength' },
    { title: 'Weight Management', description: 'Maintain a healthy weight' },
    { title: 'Mental Health', description: 'Reduce stress and improve mood' },
    { title: 'Energy Boost', description: 'Stay energetic all day' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{dict.programs.title}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.programs.subtitle}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 programs-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {dict.programs.items.map((program, index) => {
              const Icon = programIcons[index];
              return (
                <div
                  key={index}
                  className="card p-6 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden bg-[#2ecc71]/5 dark:bg-[#71e8de10] border-[#2ecc71]/20 dark:border-[#2d3f50] hover:-translate-y-2"
                >
                  {/* FREE Badge */}
                  <div className="absolute top-4 right-4 bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full z-10">
                    {lang === 'bn' ? 'ফ্রি' : 'FREE'}
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-[#27ae60] dark:text-[#5ce1e6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div className="relative z-10 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-[#2d3f50] px-3 py-1.5 rounded-lg">
                          <Clock className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-[#2d3f50] px-3 py-1.5 rounded-lg">
                          <Users className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                          {lang === 'bn' ? 'সব লেভেল' : 'All Levels'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'জিম সময়সূচী' : 'Gym Schedule'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === 'bn'
                ? 'আমাদের জিম সপ্তাহের প্রতিদিন খোলা থাকে'
                : 'Our gym is open every day of the week'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-xl transition-all relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
              >
                <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-[#27ae60] dark:text-[#5ce1e6]" />
                </div>
                <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {schedule.day}
                </h3>
                <p className="relative z-10 text-[#2ecc71] dark:text-[#5ce1e6] font-medium">
                  {schedule.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'প্রোগ্রামের সুবিধা' : 'Program Benefits'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const benefitIcons = [Dumbbell, Target, Heart, Zap];
              const Icon = benefitIcons[index];
              return (
                <div
                  key={index}
                  className="card p-6 hover:shadow-xl transition-all relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
                >
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
