import {
  AnimatedPageCards,
  AnimatedPageHero,
  AnimatedPageSection,
} from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Award, Mail, Star, Users } from "lucide-react";
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
    title: dict.trainers.title,
    description: dict.trainers.subtitle,
  };
}

export default async function TrainersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const trainers =
    lang === "bn"
      ? [
          {
            name: "রাফি আহমেদ",
            role: "প্রধান প্রশিক্ষক",
            specialty: "ওয়েট ট্রেনিং",
            image:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "সাদিয়া রহমান",
            role: "যোগ প্রশিক্ষক",
            specialty: "যোগব্যায়াম",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "তানভীর হাসান",
            role: "শক্তি প্রশিক্ষক",
            specialty: "স্ট্রেংথ ট্রেনিং",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "নুসরাত জাহান",
            role: "পুষ্টি বিশেষজ্ঞ",
            specialty: "পুষ্টি পরামর্শ",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "সাইফুল ইসলাম",
            role: "ক্রসফিট কোচ",
            specialty: "ক্রসফিট",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "রাকিব হাসান",
            role: "ফিটনেস ট্রেইনার",
            specialty: "কার্ডিও",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          },
        ]
      : [
          {
            name: "Rafi Ahmed",
            role: "Head Trainer",
            specialty: "Weight Training",
            image:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "Sadia Rahman",
            role: "Yoga Instructor",
            specialty: "Yoga",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "Tanvir Hasan",
            role: "Strength Coach",
            specialty: "Strength Training",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "Nusrat Jahan",
            role: "Nutrition Expert",
            specialty: "Nutrition",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "Saiful Islam",
            role: "CrossFit Coach",
            specialty: "CrossFit",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
          },
          {
            name: "Rakib Hasan",
            role: "Fitness Trainer",
            specialty: "Cardio",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          },
        ];

  const features =
    lang === "bn"
      ? [
          {
            title: "সার্টিফাইড",
            description: "সকল প্রশিক্ষক সার্টিফাইড ও প্রশিক্ষিত",
            Icon: Award,
          },
          { title: "অভিজ্ঞ", description: "বছরের পর বছর অভিজ্ঞতা", Icon: Star },
          {
            title: "সহায়ক",
            description: "সবসময় সাহায্যের জন্য প্রস্তুত",
            Icon: Users,
          },
        ]
      : [
          {
            title: "Certified",
            description: "All trainers are certified and trained",
            Icon: Award,
          },
          {
            title: "Experienced",
            description: "Years of experience",
            Icon: Star,
          },
          {
            title: "Supportive",
            description: "Always ready to help",
            Icon: Users,
          },
        ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <AnimatedPageHero>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">{dict.trainers.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.trainers.subtitle}
            </p>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Trainers Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedPageCards className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="card p-6 hover:shadow-xl transition-all relative overflow-hidden group dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 shrink-0">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-[#2ecc71]/30 dark:ring-[#5ce1e6]/30" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {trainer.name}
                    </h3>
                    <p className="text-sm text-[#27ae60] dark:text-[#5ce1e6]">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-[#2d3f50] px-3 py-1.5 rounded-lg">
                    {trainer.specialty}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Hover overlay with contact button */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/80 dark:bg-[#0d1117]/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] rounded-xl font-medium hover:shadow-lg transition-shadow">
                    <Mail className="h-4 w-4" />
                    {lang === "bn" ? "যোগাযোগ" : "Contact"}
                  </button>
                </div>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedPageSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn"
                  ? "কেন আমাদের প্রশিক্ষকরা সেরা"
                  : "Why Our Trainers Are The Best"}
              </h2>
            </div>
          </AnimatedPageSection>

          <AnimatedPageCards className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="text-center card p-8 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 mb-4 mx-auto">
                  <item.Icon className="w-8 h-8 text-[#27ae60] dark:text-[#5ce1e6]" />
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="relative z-10 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>
    </div>
  );
}
