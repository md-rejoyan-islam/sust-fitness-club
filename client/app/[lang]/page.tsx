import { AchievementsSection } from "@/components/home/achievements-section";
import {
  AnimatedCardsGrid,
  AnimatedHero,
  AnimatedSection,
  AnimatedSectionHeader,
} from "@/components/home/animated-sections";
import { CTASection } from "@/components/home/cta-section";
import { HomeGallery } from "@/components/home/home-gallery";
import { StatsCounter } from "@/components/home/stats-counter";
import { TestimonialsSlider } from "@/components/home/testimonials-slider";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  Activity,
  ArrowRight,
  Award,
  Check,
  Clock,
  Dumbbell,
  GraduationCap,
  Heart,
  Star,
  Target,
  Trophy,
  Users,
  Utensils,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const featureIcons = [Target, Dumbbell, Heart, Zap];
  const programIcons = [Dumbbell, Activity, Heart, Trophy];
  const benefitIcons = [Star, GraduationCap, Utensils, Trophy, Award, Users];

  const schedule =
    lang === "bn"
      ? [
          {
            name: "সকালের সেশন",
            time: "সকাল ৬:০০ - ৯:০০",
            programs: ["ওয়েট ট্রেনিং", "কার্ডিও", "যোগব্যায়াম"],
          },
          {
            name: "দুপুরের সেশন",
            time: "দুপুর ১২:০০ - ৩:০০",
            programs: ["স্ট্রেংথ ট্রেনিং", "ক্রসফিট"],
          },
          {
            name: "সন্ধ্যার সেশন",
            time: "বিকাল ৫:০০ - ১০:০০",
            programs: ["ওয়েট ট্রেনিং", "কার্ডিও", "জুম্বা"],
          },
        ]
      : [
          {
            name: "Morning Session",
            time: "6:00 AM - 9:00 AM",
            programs: ["Weight Training", "Cardio", "Yoga"],
          },
          {
            name: "Afternoon Session",
            time: "12:00 PM - 3:00 PM",
            programs: ["Strength Training", "CrossFit"],
          },
          {
            name: "Evening Session",
            time: "5:00 PM - 10:00 PM",
            programs: ["Weight Training", "Cardio", "Zumba"],
          },
        ];

  const benefits =
    lang === "bn"
      ? [
          {
            title: "বিনামূল্যে সদস্যতা",
            description: "সাস্ট শিক্ষার্থীদের জন্য সম্পূর্ণ ফ্রি",
          },
          {
            title: "প্রশিক্ষিত প্রশিক্ষক",
            description: "অভিজ্ঞ ট্রেইনারদের তত্ত্বাবধান",
          },
          { title: "পুষ্টি পরামর্শ", description: "সঠিক খাদ্যাভ্যাস গাইডেন্স" },
          {
            title: "প্রতিযোগিতা",
            description: "আন্তঃবিভাগীয় ফিটনেস প্রতিযোগিতা",
          },
          { title: "সার্টিফিকেট", description: "প্রশিক্ষণ সমাপনী সার্টিফিকেট" },
          {
            title: "কমিউনিটি",
            description: "সমমনা ফিটনেস উৎসাহীদের সাথে যুক্ত হন",
          },
        ]
      : [
          {
            title: "Free Membership",
            description: "Completely free for SUST students",
          },
          {
            title: "Expert Trainers",
            description: "Supervision by experienced trainers",
          },
          {
            title: "Nutrition Guidance",
            description: "Proper diet planning advice",
          },
          {
            title: "Competitions",
            description: "Inter-department fitness competitions",
          },
          {
            title: "Certification",
            description: "Training completion certificates",
          },
          {
            title: "Community",
            description: "Connect with like-minded fitness enthusiasts",
          },
        ];

  const testimonials =
    lang === "bn"
      ? [
          {
            name: "আহমেদ হাসান",
            role: "সিএসই শিক্ষার্থী",
            text: "সাস্ট ফিটনেস ক্লাব আমার জীবন বদলে দিয়েছে। ৬ মাসে ১৫ কেজি ওজন কমিয়েছি!",
          },
          {
            name: "ফাতিমা আক্তার",
            role: "ইইই শিক্ষার্থী",
            text: "এখানকার ট্রেইনাররা অসাধারণ। প্রতিদিন নতুন কিছু শিখছি।",
          },
          {
            name: "রাশেদ করিম",
            role: "বিবিএ শিক্ষার্থী",
            text: "ফ্রি মেম্বারশিপ হলেও সার্ভিস একদম প্রিমিয়াম মানের।",
          },
          {
            name: "নুসরাত জাহান",
            role: "ফার্মেসি শিক্ষার্থী",
            text: "যোগব্যায়াম ক্লাস আমার স্ট্রেস কমাতে অনেক সাহায্য করেছে।",
          },
        ]
      : [
          {
            name: "Ahmed Hasan",
            role: "CSE Student",
            text: "SUST Fitness Club changed my life. Lost 15kg in 6 months!",
          },
          {
            name: "Fatima Akter",
            role: "EEE Student",
            text: "The trainers here are amazing. Learning something new every day.",
          },
          {
            name: "Rashed Karim",
            role: "BBA Student",
            text: "Even though membership is free, the service is premium quality.",
          },
          {
            name: "Nusrat Jahan",
            role: "Pharmacy Student",
            text: "The yoga classes have helped me reduce stress significantly.",
          },
        ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 py-20 px-4 bg-white dark:bg-[#0d1117]">
        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-[#2ecc71]/5 to-[#1e3a5f]/5 dark:from-[#5ce1e6]/5 dark:to-[#2ecc71]/5 rounded-full blur-3xl" />

        <AnimatedHero>
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <div className="space-y-8">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
                <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                  {lang === "bn"
                    ? "সাস্ট এর অফিসিয়াল ফিটনেস ক্লাব"
                    : "Official Fitness Club of SUST"}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-gradient bg-linear-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                  {dict.hero.title.split(" ").slice(0, 2).join(" ")}
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  {dict.hero.title.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {dict.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href={`/${lang}/register`}>
                  <button className="flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] font-semibold shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30 hover:shadow-xl hover:shadow-[#2ecc71]/40 dark:hover:shadow-[#5ce1e6]/40 transition-all duration-300 hover:-translate-y-0.5">
                    {dict.hero.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href={`/${lang}/about`}>
                  <button className="text-lg px-8 py-4 rounded-xl border-2 border-dashed border-[#2ecc71]/50! dark:border-[#5ce1e6]/50! bg-gray-100 dark:bg-[#161b22] text-gray-700 dark:text-gray-300 font-semibold hover:bg-[#2ecc71]/10 dark:hover:bg-[#5ce1e6]/10 hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-all duration-300">
                    {dict.hero.learnMore}
                  </button>
                </Link>
              </div>

              {/* Stats Row - with count up animation */}
              <StatsCounter lang={lang} stats={dict.stats} />
            </div>
          </div>
        </AnimatedHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Programs Section - Premium */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "আমাদের প্রোগ্রাম" : "Our Programs"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {dict.programs.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {dict.programs.subtitle}
              </p>
            </div>
          </AnimatedSectionHeader>

          <AnimatedCardsGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.programs.items.map((program, index) => {
              const Icon = programIcons[index];
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all hover:-translate-y-2 group"
                >
                  {/* FREE Badge */}
                  <div className="absolute -top-3 right-4 bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {lang === "bn" ? "ফ্রি" : "FREE"}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#2ecc71]/10 to-[#27ae60]/5 dark:from-[#5ce1e6]/20 dark:to-[#5ce1e6]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#2ecc71] dark:text-[#5ce1e6]">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                </div>
              );
            })}
          </AnimatedCardsGrid>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Schedule Section - Premium */}
      <section className="relative py-4 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সময়সূচি" : "Schedule"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "প্রশিক্ষণের সময়সূচি" : "Training Schedule"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "আপনার সুবিধামতো সময় বেছে নিন"
                  : "Choose a time that suits you"}
              </p>
            </div>
          </AnimatedSectionHeader>

          <AnimatedCardsGrid className="grid md:grid-cols-3 gap-6">
            {schedule.map((session, index) => (
              <div key={index} className="relative pt-4 h-full">
                {/* Floating label */}
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] text-sm font-semibold rounded-full shadow-lg z-10">
                  {session.time}
                </div>
                <div className="p-6 pt-8 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-gray-50/30 dark:bg-[#161b22] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2ecc71]/10 to-[#27ae60]/5 dark:from-[#5ce1e6]/20 dark:to-[#5ce1e6]/5 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {session.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {session.programs.map((program, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <Check className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                        <span>{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedCardsGrid>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Features Section - Premium */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "বৈশিষ্ট্য" : "Features"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {dict.features.title}
              </h2>
            </div>
          </AnimatedSectionHeader>

          <AnimatedCardsGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2ecc71]/10 to-[#27ae60]/5 dark:from-[#5ce1e6]/20 dark:to-[#5ce1e6]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </AnimatedCardsGrid>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Membership Benefits Section - Premium */}
      <section className="relative py-4 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সুবিধাসমূহ" : "Benefits"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "সদস্য সুবিধাসমূহ" : "Member Benefits"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "যা পাচ্ছেন আমাদের সাথে"
                  : "What you get with us"}
              </p>
            </div>
          </AnimatedSectionHeader>

          <AnimatedCardsGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] || Star;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-slate-50/40 dark:bg-[#161b22] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all hover:-translate-y-1 flex items-start gap-4 group "
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2ecc71]/10 to-[#27ae60]/5 dark:from-[#5ce1e6]/20 dark:to-[#5ce1e6]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </AnimatedCardsGrid>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Gallery Section - Premium */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "ছবি" : "Photos"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "গ্যালারি" : "Gallery"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "আমাদের কার্যক্রমের কিছু মুহূর্ত"
                  : "Some moments from our activities"}
              </p>
            </div>
          </AnimatedSectionHeader>

          <HomeGallery lang={lang} />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Testimonials Section - Premium */}
      <section className="relative py-4 px-6 sm:px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSectionHeader>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "মতামত" : "Testimonials"}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "সদস্যদের মতামত" : "What Members Say"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "আমাদের সদস্যদের অভিজ্ঞতা"
                  : "Experience of our members"}
              </p>
            </div>
          </AnimatedSectionHeader>

          <AnimatedSection className="md:px-8 sm:px-12">
            <TestimonialsSlider testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Achievements Section */}
      <AchievementsSection lang={lang} />

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* CTA Section */}
      <CTASection lang={lang} dictionary={dict.cta} />
    </div>
  );
}
