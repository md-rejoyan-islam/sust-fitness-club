import { AchievementsSection } from "@/components/home/achievements-section";
import { CTASection } from "@/components/home/cta-section";
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

  const galleryImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
  ];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-gradient">
                {dict.hero.title.split(" ").slice(0, 2).join(" ")}
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                {dict.hero.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              {dict.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href={`/${lang}/contact`}>
                <button className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
                  {dict.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href={`/${lang}/about`}>
                <button className="btn-secondary text-lg px-8 py-4">
                  {dict.hero.learnMore}
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-[#71e8de10] backdrop-blur-sm border border-gray-200/50 dark:border-[#2d3f50]">
                <div className="text-3xl sm:text-4xl font-bold text-[#2ecc71]">
                  200+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {dict.stats.members}
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-[#71e8de10] backdrop-blur-sm border border-gray-200/50 dark:border-[#2d3f50]">
                <div className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] dark:text-[#5ce1e6]">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {dict.stats.trainers}
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-[#71e8de10] backdrop-blur-sm border border-gray-200/50 dark:border-[#2d3f50]">
                <div className="text-3xl sm:text-4xl font-bold text-[#2ecc71]">
                  6+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {dict.stats.programs}
                </div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-[#71e8de10] backdrop-blur-sm border border-gray-200/50 dark:border-[#2d3f50]">
                <div className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] dark:text-[#5ce1e6]">
                  1+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {dict.stats.years}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 programs-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {dict.programs.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.programs.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.programs.items.map((program, index) => {
              const Icon = programIcons[index];
              return (
                <div
                  key={index}
                  className="card p-6 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden bg-[#2ecc71]/5 dark:bg-[#71e8de10] border-[#2ecc71]/20 dark:border-[#2d3f50] hover:-translate-y-2"
                >
                  {/* FREE Badge */}
                  <div className="absolute top-4 right-4 bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full z-10">
                    {lang === "bn" ? "ফ্রি" : "FREE"}
                  </div>
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Clock className="w-4 h-4" />
                    {program.duration}
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
              {lang === "bn" ? "প্রশিক্ষণের সময়সূচি" : "Training Schedule"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "আপনার সুবিধামতো সময় বেছে নিন"
                : "Choose a time that suits you"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {schedule.map((session, index) => (
              <div
                key={index}
                className="card p-6 hover:shadow-xl transition-all border-t-4 border-[#2ecc71] dark:border-t-[#5ce1e6] relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {session.name}
                    </h3>
                    <p className="text-sm text-[#2ecc71] dark:text-[#5ce1e6] font-medium">
                      {session.time}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 space-y-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {dict.features.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.features.items.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={index}
                  className="card p-6 hover:shadow-xl transition-shadow relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
                >
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-neutral-900/50 border-y border-gray-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn" ? "সদস্য সুবিধাসমূহ" : "Member Benefits"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "যা পাচ্ছেন আমাদের সাথে"
                : "What you get with us"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] || Star;
              return (
                <div
                  key={index}
                  className="card p-6 hover:shadow-xl transition-all flex items-start gap-4 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
                >
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                  </div>
                  <div className="relative z-10">
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
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#2ecc71]/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn" ? "গ্যালারি" : "Gallery"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "আমাদের কার্যক্রমের কিছু মুহূর্ত"
                : "Some moments from our activities"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.03] transition-transform"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 px-6 sm:px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "bn" ? "সদস্যদের মতামত" : "What Members Say"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === "bn"
                ? "আমাদের সদস্যদের অভিজ্ঞতা"
                : "Experience of our members"}
            </p>
          </div>

          <div className="px-8 sm:px-12">
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection lang={lang} />

      {/* CTA Section */}
      <CTASection lang={lang} dictionary={dict.cta} />
    </div>
  );
}
