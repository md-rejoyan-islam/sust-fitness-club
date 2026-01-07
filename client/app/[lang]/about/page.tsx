import { Target, Heart, Users, Calendar, Trophy, Dumbbell, Handshake, Award } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return {
    title: lang === 'bn' ? 'আমাদের সম্পর্কে | সাস্ট ফিটনেস ক্লাব' : 'About Us | SUST Fitness Club',
    description: lang === 'bn'
      ? 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের একটি ছাত্র-পরিচালিত ফিটনেস এবং স্বাস্থ্য সচেতনতামূলক ক্লাব।'
      : 'A student-led fitness and health awareness club at Shahjalal University of Science & Technology.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  const purposes = lang === 'bn' ? [
    {
      title: 'স্বাস্থ্য সচেতনতা',
      description: 'বিশ্ববিদ্যালয় ক্যাম্পাসে স্বাস্থ্য ও ফিটনেস সচেতনতা তৈরি করা।',
      Icon: Heart,
    },
    {
      title: 'আগ্রহ বৃদ্ধি',
      description: 'শারীরিক ও মানসিকভাবে সুস্থতার প্রতি ছাত্র-ছাত্রীদের আগ্রহ বাড়ানো।',
      Icon: Target,
    },
    {
      title: 'সক্রিয় জীবনধারা',
      description: 'সক্রিয় জীবনধারা প্রচার করা এবং প্রতিযোগিতামূলক/সামাজিক ফিটনেস ইভেন্ট আয়োজন করা।',
      Icon: Dumbbell,
    },
  ] : [
    {
      title: 'Health Awareness',
      description: 'Creating health and fitness awareness on university campus.',
      Icon: Heart,
    },
    {
      title: 'Encourage Interest',
      description: 'Increasing students\' interest in physical and mental well-being.',
      Icon: Target,
    },
    {
      title: 'Active Lifestyle',
      description: 'Promoting active lifestyle and organizing competitive/social fitness events.',
      Icon: Dumbbell,
    },
  ];

  const activities = lang === 'bn' ? [
    {
      title: 'হাফ ম্যারাথন ও রানিং ইভেন্ট',
      description: 'SUST Half Marathon আয়োজন করা হয়, যেখানে বিভিন্ন দূরত্ব (21.1 km, 7.5 km, 1.5 km) রান অন্তর্ভুক্ত থাকে।',
      Icon: Trophy,
    },
    {
      title: 'ফিটনেস সেশন',
      description: 'সময়-সময়ে ফ্রি ফিটনেস সেশন/ওয়ার্কআউট ক্লাস কলেজের শিক্ষার্থী ও স্টাফদের জন্য আয়োজন করা হয়।',
      Icon: Dumbbell,
    },
    {
      title: 'কমিউনিটি ইভেন্ট',
      description: 'বিভিন্ন সেশন, কমিটি ঘোষণা, এবং সদস্যদের অংশগ্রহণ শেয়ার করা হয়—যার মাধ্যমে ক্লাবের সক্রিয়তা ও সম্প্রদায় বৃদ্ধি পায়।',
      Icon: Users,
    },
  ] : [
    {
      title: 'Half Marathon & Running Events',
      description: 'SUST Half Marathon is organized with various distances (21.1 km, 7.5 km, 1.5 km) included.',
      Icon: Trophy,
    },
    {
      title: 'Fitness Sessions',
      description: 'Free fitness sessions/workout classes are organized for college students and staff from time to time.',
      Icon: Dumbbell,
    },
    {
      title: 'Community Events',
      description: 'Various sessions, committee announcements, and member participation are shared—through which the club\'s activity and community grows.',
      Icon: Users,
    },
  ];

  const studentHelp = lang === 'bn' ? [
    {
      title: 'শারীরিক স্বাস্থ্য',
      description: 'নিয়মিত ব্যায়াম ও ফিটনেস প্র্যাকটিসের সুযোগ সৃষ্টি করে। ক্যাম্পাসে হাঁটা-দৌড়ানো ইভেন্ট ও গ্রুপ সেশন আয়োজন করে শারীরিক সক্ষমতা বাড়ায়।',
      Icon: Heart,
    },
    {
      title: 'কমিউনিটি বিল্ডিং',
      description: 'বিভিন্ন ইভেন্ট-এ অংশগ্রহণ ও ক্লাব বসে সক্রিয় অংশগ্রহণের মাধ্যমে ছাত্রদের teamwork, leadership ও social skill উন্নত হয়।',
      Icon: Handshake,
    },
    {
      title: 'এক্সপোজার ও রিকগনিশন',
      description: 'হাফ ম্যারাথনের মতো বড় ইভেন্টগুলোতে অংশগ্রহণ করে শিক্ষার্থীরা নিজেকে অন্যদের সাথে তুলনা করতে পারে এবং recognition পায়।',
      Icon: Award,
    },
  ] : [
    {
      title: 'Physical Health',
      description: 'Creates opportunities for regular exercise and fitness practice. Organizes walking-running events and group sessions on campus to enhance physical fitness.',
      Icon: Heart,
    },
    {
      title: 'Community Building',
      description: 'Through participation in various events and active club involvement, students improve their teamwork, leadership and social skills.',
      Icon: Handshake,
    },
    {
      title: 'Exposure & Recognition',
      description: 'By participating in major events like half marathons, students can compare themselves with others and gain recognition.',
      Icon: Award,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 about-hero-section flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{lang === 'bn' ? 'সাস্ট ফিটনেস ক্লাব' : 'SUST Fitness Club'}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {lang === 'bn'
              ? 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (সাস্ট), সিলেট-এর একটি ছাত্র-পরিচালিত ফিটনেস এবং স্বাস্থ্য সচেতনতামূলক ক্লাব যা শিক্ষার্থী এবং কমিউনিটির মধ্যে শারীরিক সুস্থতা এবং সক্রিয় জীবনধারা প্রচারে নিবেদিত।'
              : 'A student-led fitness and health awareness club at Shahjalal University of Science & Technology (SUST), Sylhet focused on promoting physical well-being and active lifestyles among students and community.'}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 border border-[#2ecc71]/20 dark:border-[#5ce1e6]/20">
            <Calendar className="w-5 h-5 text-[#27ae60] dark:text-[#5ce1e6]" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {lang === 'bn' ? 'প্রতিষ্ঠিত: জানুয়ারি ২০২৫' : 'Founded: January 2025'}
            </span>
          </div>
        </div>
      </section>

      {/* Purpose Section - আমরা কি চাই? */}
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'ক্লাবের উদ্দেশ্য' : 'Club Purpose'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'আমরা কি চাই?' : 'What do we want?'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="text-center card p-8 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 mb-4 mx-auto">
                  <purpose.Icon className="w-8 h-8 text-[#27ae60] dark:text-[#5ce1e6]" />
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {purpose.title}
                </h3>
                <p className="relative z-10 text-gray-600 dark:text-gray-400">
                  {purpose.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - আমাদের লক্ষ্য */}
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50]">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === 'bn' ? 'আমাদের ভিশন' : 'Our Vision'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {lang === 'bn' ? 'আমাদের লক্ষ্য কি?' : 'What is our goal?'}
              </p>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'একটি সুস্থ ও সচেতন যুব সমাজ গঠন, যেখানে শিক্ষার্থীরা ব্যস্ত পড়াশোনার পাশাপাশি নিয়মিত স্বাস্থ্য সচেতন প্র্যাকটিসে যুক্ত থাকবে।'
                    : 'Building a healthy and conscious youth society where students will be engaged in regular health-conscious practices alongside their busy studies.'}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'স্থানীয় কমিউনিটিও সুস্থ জীবনধারায় সমানভাবে অংশ নিক।'
                    : 'Local community equally participates in healthy lifestyle.'}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'শিক্ষার্থীদের মধ্যে নিয়মিত ব্যায়াম ও শারীরিক কার্যকলাপের অভ্যাস গড়ে তোলা।'
                    : 'Developing regular exercise and physical activity habits among students.'}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'মানসিক চাপ কমাতে এবং মানসিক স্বাস্থ্য উন্নত করতে ফিটনেস কার্যক্রমের প্রচার।'
                    : 'Promoting fitness activities to reduce stress and improve mental health.'}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'ক্যাম্পাসে একটি সক্রিয় ও স্বাস্থ্যকর সংস্কৃতি প্রতিষ্ঠা করা।'
                    : 'Establishing an active and healthy culture on campus.'}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] mt-2 flex-shrink-0"></span>
                  {lang === 'bn'
                    ? 'দলগত কার্যকলাপের মাধ্যমে শিক্ষার্থীদের মধ্যে সহযোগিতা ও বন্ধুত্ব বৃদ্ধি করা।'
                    : 'Enhancing cooperation and friendship among students through team activities.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - আমরা কি কি করে থাকি? */}
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'আমাদের কার্যক্রম' : 'Our Activities'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'আমরা কি কি করে থাকি?' : 'What do we do?'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="card p-8 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-6">
                  <activity.Icon className="w-7 h-7 text-[#27ae60] dark:text-[#5ce1e6]" />
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {activity.title}
                </h3>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Students - শিক্ষার্থীদের সাহায্য */}
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'শিক্ষার্থীদের সাহায্য' : 'How We Help Students'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'আমরা কিভাবে শিক্ষার্থীদের সাহায্য করি?' : 'How do we help students?'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studentHelp.map((help, index) => (
              <div
                key={index}
                className="text-center card p-8 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 mb-4 mx-auto">
                  <help.Icon className="w-8 h-8 text-[#27ae60] dark:text-[#5ce1e6]" />
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {help.title}
                </h3>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {help.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
