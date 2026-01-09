import {
  AnimatedFadeIn,
  AnimatedPageCards,
  AnimatedPageHero,
  AnimatedPageSection,
} from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import {
  Award,
  Calendar,
  Dumbbell,
  Handshake,
  Heart,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return {
    title:
      lang === "bn"
        ? "আমাদের সম্পর্কে | সাস্ট ফিটনেস ক্লাব"
        : "About Us | SUST Fitness Club",
    description:
      lang === "bn"
        ? "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের একটি ছাত্র-পরিচালিত ফিটনেস এবং স্বাস্থ্য সচেতনতামূলক ক্লাব।"
        : "A student-led fitness and health awareness club at Shahjalal University of Science & Technology.",
  };
}

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  const purposes =
    lang === "bn"
      ? [
          {
            title: "স্বাস্থ্য সচেতনতা",
            description:
              "বিশ্ববিদ্যালয় ক্যাম্পাসে স্বাস্থ্য ও ফিটনেস সচেতনতা তৈরি করা।",
            Icon: Heart,
          },
          {
            title: "আগ্রহ বৃদ্ধি",
            description:
              "শারীরিক ও মানসিকভাবে সুস্থতার প্রতি ছাত্র-ছাত্রীদের আগ্রহ বাড়ানো।",
            Icon: Target,
          },
          {
            title: "সক্রিয় জীবনধারা",
            description:
              "সক্রিয় জীবনধারা প্রচার করা এবং প্রতিযোগিতামূলক/সামাজিক ফিটনেস ইভেন্ট আয়োজন করা।",
            Icon: Dumbbell,
          },
        ]
      : [
          {
            title: "Health Awareness",
            description:
              "Creating health and fitness awareness on university campus.",
            Icon: Heart,
          },
          {
            title: "Encourage Interest",
            description:
              "Increasing students' interest in physical and mental well-being.",
            Icon: Target,
          },
          {
            title: "Active Lifestyle",
            description:
              "Promoting active lifestyle and organizing competitive/social fitness events.",
            Icon: Dumbbell,
          },
        ];

  const activities =
    lang === "bn"
      ? [
          {
            title: "হাফ ম্যারাথন ও রানিং ইভেন্ট",
            description:
              "SUST Half Marathon আয়োজন করা হয়, যেখানে বিভিন্ন দূরত্ব (21.1 km, 7.5 km, 1.5 km) রান অন্তর্ভুক্ত থাকে।",
            Icon: Trophy,
          },
          {
            title: "ফিটনেস সেশন",
            description:
              "সময়-সময়ে ফ্রি ফিটনেস সেশন/ওয়ার্কআউট ক্লাস কলেজের শিক্ষার্থী ও স্টাফদের জন্য আয়োজন করা হয়।",
            Icon: Dumbbell,
          },
          {
            title: "কমিউনিটি ইভেন্ট",
            description:
              "বিভিন্ন সেশন, কমিটি ঘোষণা, এবং সদস্যদের অংশগ্রহণ শেয়ার করা হয়—যার মাধ্যমে ক্লাবের সক্রিয়তা ও সম্প্রদায় বৃদ্ধি পায়।",
            Icon: Users,
          },
        ]
      : [
          {
            title: "Half Marathon & Running Events",
            description:
              "SUST Half Marathon is organized with various distances (21.1 km, 7.5 km, 1.5 km) included.",
            Icon: Trophy,
          },
          {
            title: "Fitness Sessions",
            description:
              "Free fitness sessions/workout classes are organized for college students and staff from time to time.",
            Icon: Dumbbell,
          },
          {
            title: "Community Events",
            description:
              "Various sessions, committee announcements, and member participation are shared—through which the club's activity and community grows.",
            Icon: Users,
          },
        ];

  const studentHelp =
    lang === "bn"
      ? [
          {
            title: "শারীরিক স্বাস্থ্য",
            description:
              "নিয়মিত ব্যায়াম ও ফিটনেস প্র্যাকটিসের সুযোগ সৃষ্টি করে। ক্যাম্পাসে হাঁটা-দৌড়ানো ইভেন্ট ও গ্রুপ সেশন আয়োজন করে শারীরিক সক্ষমতা বাড়ায়।",
            Icon: Heart,
          },
          {
            title: "কমিউনিটি বিল্ডিং",
            description:
              "বিভিন্ন ইভেন্ট-এ অংশগ্রহণ ও ক্লাব বসে সক্রিয় অংশগ্রহণের মাধ্যমে ছাত্রদের teamwork, leadership ও social skill উন্নত হয়।",
            Icon: Handshake,
          },
          {
            title: "এক্সপোজার ও রিকগনিশন",
            description:
              "হাফ ম্যারাথনের মতো বড় ইভেন্টগুলোতে অংশগ্রহণ করে শিক্ষার্থীরা নিজেকে অন্যদের সাথে তুলনা করতে পারে এবং recognition পায়।",
            Icon: Award,
          },
        ]
      : [
          {
            title: "Physical Health",
            description:
              "Creates opportunities for regular exercise and fitness practice. Organizes walking-running events and group sessions on campus to enhance physical fitness.",
            Icon: Heart,
          },
          {
            title: "Community Building",
            description:
              "Through participation in various events and active club involvement, students improve their teamwork, leadership and social skills.",
            Icon: Handshake,
          },
          {
            title: "Exposure & Recognition",
            description:
              "By participating in major events like half marathons, students can compare themselves with others and gain recognition.",
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

        <AnimatedPageHero>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
              <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn"
                  ? "অফিসিয়াল ফিটনেস ক্লাব"
                  : "Official Fitness Club"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                {lang === "bn" ? "সাস্ট ফিটনেস ক্লাব" : "SUST Fitness Club"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {lang === "bn"
                ? "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (সাস্ট), সিলেট-এর একটি ছাত্র-পরিচালিত ফিটনেস এবং স্বাস্থ্য সচেতনতামূলক ক্লাব যা শিক্ষার্থী এবং কমিউনিটির মধ্যে শারীরিক সুস্থতা এবং সক্রিয় জীবনধারা প্রচারে নিবেদিত।"
                : "A student-led fitness and health awareness club at Shahjalal University of Science & Technology (SUST), Sylhet focused on promoting physical well-being and active lifestyles among students and community."}
            </p>

            {/* Founded badge with premium styling */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                <Calendar className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  {lang === "bn" ? "প্রতিষ্ঠিত" : "Founded"}
                </span>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  {lang === "bn" ? "জানুয়ারি ২০২৫" : "January 2025"}
                </span>
              </div>
            </div>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Purpose Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "আমাদের লক্ষ্য" : "Our Goals"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "ক্লাবের উদ্দেশ্য" : "Club Purpose"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {lang === "bn" ? "আমরা কি চাই?" : "What do we want?"}
              </p>
            </div>
          </AnimatedPageSection>

          <AnimatedPageCards className="grid md:grid-cols-3 gap-6">
            {purposes.map((purpose, index) => (
              <div key={index} className="relative pt-3 h-full">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{purpose.title}</span>
                  </div>

                  {/* Inner card with description */}
                  <div className="text-center h-full p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <p className="text-gray-600 text-lg dark:text-gray-400">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Vision Section */}
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
          <AnimatedPageSection>
            <div className="py-8 px-4 sm:p-8 md:p-12 rounded-3xl bg-gray-50 dark:bg-[#161b22] border border-gray-100 dark:border-[#2d3f50]">
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "দৃষ্টিভঙ্গি" : "Vision"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "আমাদের ভিশন" : "Our Vision"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {lang === "bn" ? "আমাদের লক্ষ্য কি?" : "What is our goal?"}
              </p>

              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  lang === "bn"
                    ? "একটি সুস্থ ও সচেতন যুব সমাজ গঠন, যেখানে শিক্ষার্থীরা ব্যস্ত পড়াশোনার পাশাপাশি নিয়মিত স্বাস্থ্য সচেতন প্র্যাকটিসে যুক্ত থাকবে।"
                    : "Building a healthy and conscious youth society where students will be engaged in regular health-conscious practices alongside their busy studies.",
                  lang === "bn"
                    ? "স্থানীয় কমিউনিটিও সুস্থ জীবনধারায় সমানভাবে অংশ নিক।"
                    : "Local community equally participates in healthy lifestyle.",
                  lang === "bn"
                    ? "শিক্ষার্থীদের মধ্যে নিয়মিত ব্যায়াম ও শারীরিক কার্যকলাপের অভ্যাস গড়ে তোলা।"
                    : "Developing regular exercise and physical activity habits among students.",
                  lang === "bn"
                    ? "মানসিক চাপ কমাতে এবং মানসিক স্বাস্থ্য উন্নত করতে ফিটনেস কার্যক্রমের প্রচার।"
                    : "Promoting fitness activities to reduce stress and improve mental health.",
                  lang === "bn"
                    ? "ক্যাম্পাসে একটি সক্রিয় ও স্বাস্থ্যকর সংস্কৃতি প্রতিষ্ঠা করা।"
                    : "Establishing an active and healthy culture on campus.",
                  lang === "bn"
                    ? "দলগত কার্যকলাপের মাধ্যমে শিক্ষার্থীদের মধ্যে সহযোগিতা ও বন্ধুত্ব বৃদ্ধি করা।"
                    : "Enhancing cooperation and friendship among students through team activities.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-[#161b22] transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center mt-0.5">
                      <span className="text-white dark:text-[#0d1117] text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </AnimatedPageSection>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#161b22]" />

      {/* Activities Section */}
      <section className="relative  py-4 px-4 bg-gray-50 dark:bg-[#161b22]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "কার্যক্রম" : "Activities"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "আমাদের কার্যক্রম" : "Our Activities"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {lang === "bn" ? "আমরা কি কি করে থাকি?" : "What do we do?"}
              </p>
            </div>
          </AnimatedPageSection>

          <AnimatedPageCards className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="relative  pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{activity.title}</span>
                  </div>

                  {/* Inner card with description */}
                  <div className="text-center p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <p className="text-gray-600 text-lg dark:text-gray-400">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-slate-100/50 dark:from-[#161b22] dark:to-[#0d1117]" />

      {/* How We Help Students */}
      <section className="relative py-4 pb-16 px-4 bg-slate-100/50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সহায়তা" : "Support"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "শিক্ষার্থীদের সাহায্য" : "How We Help Students"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "আমরা কিভাবে শিক্ষার্থীদের সাহায্য করি?"
                  : "How do we help students?"}
              </p>
            </div>
          </AnimatedPageSection>

          {/* Outer dashed container with section title */}
          <div className="relative dark:border-slate-600 mb-8">
            {/* Inner cards with dashed border design */}
            <AnimatedPageCards className="grid md:grid-cols-3 gap-6 mt-2">
              {studentHelp.map((help, index) => (
                <div key={index} className="relative pt-3">
                  {/* Dashed border outer container for each card */}
                  <div className="relative p-4 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                    {/* Title label - shows the actual title */}
                    <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                      <span className=" font-semibold ">{help.title}</span>
                    </div>

                    {/* Inner card with solid border - only icon and description */}
                    <div className="text-center p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                      <p className="text-gray-600 text-lg dark:text-gray-400 ">
                        {help.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedPageCards>
          </div>

          {/* Content box with normal border */}
          <AnimatedFadeIn delay={200}>
            <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#161b22]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white dark:text-[#0d1117]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {lang === "bn" ? "আমাদের প্রতিশ্রুতি" : "Our Commitment"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {lang === "bn"
                      ? "সাস্ট ফিটনেস ক্লাব প্রতিটি শিক্ষার্থীর শারীরিক ও মানসিক সুস্থতার জন্য প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে একটি সুস্থ শরীর এবং মন শিক্ষার্থীদের একাডেমিক সাফল্য এবং সামগ্রিক জীবনমানের জন্য অপরিহার্য।"
                      : "SUST Fitness Club is committed to the physical and mental well-being of every student. We believe that a healthy body and mind are essential for students' academic success and overall quality of life."}
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
