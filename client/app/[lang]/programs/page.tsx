import {
  Award,
  Calendar,
  Clock,
  Flag,
  Heart,
  MapPin,
  Medal,
  Shirt,
  Timer,
  Trophy,
  Users,
} from "lucide-react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import type { Metadata } from "next";

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

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const marathonEvents =
    lang === "bn"
      ? [
          {
            title: "হাফ ম্যারাথন (21.1 km)",
            description:
              "SUST Half Marathon-এ 21.1 কিলোমিটার দৌড়ের মাধ্যমে নিজের সীমা পরীক্ষা করুন।",
            Icon: Trophy,
          },
          {
            title: "লেংগুয়েজ লিগ্যাসি রান (7.5 km)",
            description:
              "আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে বিশেষ 7.5 কিলোমিটার রান।",
            Icon: Flag,
          },
          {
            title: "জুনিয়র রান (1.5 km)",
            description:
              "নতুনদের জন্য 1.5 কিলোমিটার রান - ফিটনেস যাত্রা শুরু করুন।",
            Icon: Users,
          },
        ]
      : [
          {
            title: "Half Marathon (21.1 km)",
            description:
              "Test your limits with the 21.1 km run at SUST Half Marathon.",
            Icon: Trophy,
          },
          {
            title: "Language Legacy Run (7.5 km)",
            description:
              "Special 7.5 km run on the occasion of International Mother Language Day.",
            Icon: Flag,
          },
          {
            title: "Junior Run (1.5 km)",
            description:
              "1.5 km run for beginners - start your fitness journey.",
            Icon: Users,
          },
        ];

  const fitnessSession =
    lang === "bn"
      ? {
          day: "প্রতি শুক্রবার",
          time: "সকাল ৫:৪৫",
          location: "বাস্কেটবল গ্রাউন্ড, সাস্ট",
          description:
            "প্রতি শুক্রবার সকালে বিনামূল্যে ফিটনেস সেশন। সবার জন্য উন্মুক্ত - শিক্ষার্থী, শিক্ষক ও স্টাফ সকলে অংশ নিতে পারবেন।",
        }
      : {
          day: "Every Friday",
          time: "5:45 AM",
          location: "Basketball Ground, SUST",
          description:
            "Free fitness session every Friday morning. Open to all - students, teachers and staff can participate.",
        };

  const externalEvents =
    lang === "bn"
      ? [
          {
            title: "ভাটিয়ারী আন্তর্জাতিক ম্যারাথন",
            description:
              "ক্লাবের সদস্যরা বিভিন্ন বাহ্যিক ম্যারাথন ইভেন্টে অংশগ্রহণ করে এবং সাস্টের প্রতিনিধিত্ব করে।",
            Icon: MapPin,
          },
          {
            title: "আঞ্চলিক রানিং ইভেন্ট",
            description:
              "সিলেট ও আশেপাশের বিভিন্ন রানিং ইভেন্টে সক্রিয় অংশগ্রহণ।",
            Icon: Flag,
          },
        ]
      : [
          {
            title: "Bhatiary International Marathon",
            description:
              "Club members participate in various external marathon events and represent SUST.",
            Icon: MapPin,
          },
          {
            title: "Regional Running Events",
            description:
              "Active participation in various running events in Sylhet and surrounding areas.",
            Icon: Flag,
          },
        ];

  const rewards =
    lang === "bn"
      ? [
          {
            title: "মেডেল",
            description: "সকল বিজয়ী ও অংশগ্রহণকারীদের জন্য বিশেষ মেডেল।",
            Icon: Medal,
          },
          {
            title: "টি-শার্ট",
            description: "SUST Fitness Club ব্র্যান্ডেড বিশেষ টি-শার্ট।",
            Icon: Shirt,
          },
          {
            title: "ই-সার্টিফিকেট",
            description: "প্রত্যেক অংশগ্রহণকারীর জন্য ডিজিটাল সার্টিফিকেট।",
            Icon: Award,
          },
        ]
      : [
          {
            title: "Medals",
            description: "Special medals for all winners and participants.",
            Icon: Medal,
          },
          {
            title: "T-Shirts",
            description: "SUST Fitness Club branded special t-shirts.",
            Icon: Shirt,
          },
          {
            title: "E-Certificates",
            description: "Digital certificates for every participant.",
            Icon: Award,
          },
        ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32 pb-10 px-4 bg-white dark:bg-[#0d1117]">
        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
            <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
              {lang === "bn" ? "ইভেন্ট ও কার্যক্রম" : "Events & Programs"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
              {dict.programs.title}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {lang === "bn"
              ? "SUST Fitness Club বিভিন্ন ম্যারাথন, ফিটনেস সেশন এবং কমিউনিটি ইভেন্ট আয়োজন করে থাকে যা শিক্ষার্থী ও স্থানীয় কমিউনিটির জন্য উন্মুক্ত।"
              : "SUST Fitness Club organizes various marathons, fitness sessions and community events that are open to students and local community."}
          </p>

          {/* Upcoming event badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
              <Trophy className="w-5 h-5 text-white dark:text-[#0d1117]" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                {lang === "bn" ? "মূল ইভেন্ট" : "Main Event"}
              </span>
              <span className="block text-sm font-bold text-gray-900 dark:text-white">
                {lang === "bn" ? "SUST হাফ ম্যারাথন" : "SUST Half Marathon"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* SUST Half Marathon Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
              {lang === "bn" ? "প্রধান ইভেন্ট" : "Main Event"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn" ? "SUST হাফ ম্যারাথন" : "SUST Half Marathon"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "বিভিন্ন দূরত্বে রানিং ইভেন্ট - সবার জন্য"
                : "Running events at various distances - for everyone"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {marathonEvents.map((event, index) => (
              <div key={index} className="relative pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{event.title}</span>
                  </div>

                  {/* Inner card with description */}
                  <div className="text-center h-full p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 mb-4">
                      <event.Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <p className="text-gray-600 text-lg dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Friday Fitness Session Section */}
      <section className="relative py-4 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="py-8 px-4 sm:p-8 md:p-12 rounded-3xl bg-gray-50 dark:bg-[#161b22] border border-gray-100 dark:border-[#2d3f50]">
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সাপ্তাহিক সেশন" : "Weekly Session"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn"
                  ? "শুক্রবার ফিটনেস সেশন"
                  : "Friday Fitness Session"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {fitnessSession.description}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "দিন" : "Day"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {fitnessSession.day}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "সময়" : "Time"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {fitnessSession.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "স্থান" : "Location"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {fitnessSession.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* FREE badge */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] font-bold text-sm">
                  <Heart className="w-4 h-4" />
                  {lang === "bn" ? "সম্পূর্ণ বিনামূল্যে" : "Completely FREE"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#161b22]" />

      {/* External Marathon Participation Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#161b22]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
              {lang === "bn" ? "বহিরাগত ইভেন্ট" : "External Events"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn"
                ? "বাহ্যিক ম্যারাথন অংশগ্রহণ"
                : "External Marathon Participation"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "ক্লাবের সদস্যরা বিভিন্ন বাহ্যিক ইভেন্টে অংশ নেয়"
                : "Club members participate in various external events"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {externalEvents.map((event, index) => (
              <div key={index} className="relative pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{event.title}</span>
                  </div>

                  {/* Inner card with description */}
                  <div className="text-center p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 mb-4">
                      <event.Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <p className="text-gray-600 text-lg dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-slate-100/50 dark:from-[#161b22] dark:to-[#0d1117]" />

      {/* Rewards & Certificates Section */}
      <section className="relative py-4 pb-16 px-4 bg-slate-100/50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
              {lang === "bn" ? "পুরস্কার" : "Rewards"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn"
                ? "পুরস্কার ও সার্টিফিকেট"
                : "Rewards & Certificates"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "অংশগ্রহণকারীদের জন্য বিশেষ পুরস্কার"
                : "Special rewards for participants"}
            </p>
          </div>

          {/* Rewards cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {rewards.map((reward, index) => (
              <div key={index} className="relative pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{reward.title}</span>
                  </div>

                  {/* Inner card with icon and description */}
                  <div className="text-center p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 mb-4">
                      <reward.Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <p className="text-gray-600 text-lg dark:text-gray-400">
                      {reward.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment box */}
          <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#161b22]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                <Timer className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {lang === "bn" ? "আজই যোগ দিন" : "Join Today"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {lang === "bn"
                    ? "SUST Fitness Club-এর সব ইভেন্ট সকল শিক্ষার্থী, শিক্ষক এবং স্টাফদের জন্য উন্মুক্ত। আমাদের সাথে যুক্ত হন এবং একটি স্বাস্থ্যকর জীবনধারা শুরু করুন। কোন অভিজ্ঞতা প্রয়োজন নেই - শুধু আপনার উৎসাহ নিয়ে আসুন!"
                    : "All SUST Fitness Club events are open to all students, teachers and staff. Join us and start a healthy lifestyle. No experience required - just bring your enthusiasm!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}