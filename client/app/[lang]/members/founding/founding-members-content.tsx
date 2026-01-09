"use client";

import Image from "next/image";
import { Quote, GraduationCap, Building, Phone, Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import {
  AnimatedPageCards,
  AnimatedPageHero,
} from "@/components/ui/page-animations";

interface FoundingMember {
  id: string;
  name: string;
  nameBn: string;
  department: string;
  departmentBn: string;
  session: string;
  image: string;
  phone: string;
  email: string;
  comment: string;
  commentBn: string;
  isChief?: boolean;
}

const foundingMembers: FoundingMember[] = [
  {
    id: "1",
    name: "Romjan Ali Rubel",
    nameBn: "রমজান আলী রুবেল",
    department: "Bangla",
    departmentBn: "বাংলা",
    session: "2017-18",
    image: "",
    phone: "",
    email: "",
    isChief: false,
    comment:
      "When we started SUST Fitness Club, our dream was simple - to create a space where students could prioritize their health alongside academics. Seeing how far we've come fills my heart with immense pride. This club is not just about physical fitness; it's about building character, discipline, and a supportive community.",
    commentBn:
      "যখন আমরা সাস্ট ফিটনেস ক্লাব শুরু করেছিলাম, আমাদের স্বপ্ন ছিল সহজ - এমন একটি জায়গা তৈরি করা যেখানে শিক্ষার্থীরা পড়াশোনার পাশাপাশি তাদের স্বাস্থ্যকে অগ্রাধিকার দিতে পারে। আমরা কতদূর এসেছি তা দেখে আমার হৃদয় গর্বে ভরে যায়। এই ক্লাব শুধু শারীরিক ফিটনেসের জন্য নয়; এটি চরিত্র, শৃঙ্খলা এবং একটি সহায়ক সম্প্রদায় গঠনের জন্য।",
  },
  {
    id: "2",
    name: "Md Nurul Hoque",
    nameBn: "মো. নুরুল হক",
    department: "Sociology",
    departmentBn: "সমাজবিজ্ঞান",
    session: "2006-07",
    image: "",
    phone: "",
    email: "",
    comment:
      "Being part of founding this club taught me that great things start with small, determined steps. We wanted to prove that university life can be balanced with fitness, and today, hundreds of students benefit from this vision.",
    commentBn:
      "এই ক্লাব প্রতিষ্ঠার অংশ হওয়া আমাকে শিখিয়েছে যে মহান জিনিসগুলি ছোট, দৃঢ় পদক্ষেপ দিয়ে শুরু হয়। আমরা প্রমাণ করতে চেয়েছিলাম যে বিশ্ববিদ্যালয়ের জীবন ফিটনেসের সাথে ভারসাম্যপূর্ণ হতে পারে, এবং আজ শত শত শিক্ষার্থী এই দৃষ্টিভঙ্গি থেকে উপকৃত হচ্ছে।",
  },
  {
    id: "3",
    name: "Niloy Kanti Das",
    nameBn: "নীলয় কান্তি দাস",
    department: "Bangla",
    departmentBn: "বাংলা",
    session: "2017-18",
    image: "",
    phone: "",
    email: "",
    comment:
      "We believed that a healthy body nurtures a healthy mind. Watching new generations of students embrace fitness culture at SUST is the greatest reward for our initial efforts.",
    commentBn:
      "আমরা বিশ্বাস করতাম যে একটি সুস্থ শরীর একটি সুস্থ মনকে পালন করে। সাস্টে নতুন প্রজন্মের শিক্ষার্থীদের ফিটনেস সংস্কৃতিকে গ্রহণ করতে দেখা আমাদের প্রাথমিক প্রচেষ্টার জন্য সবচেয়ে বড় পুরস্কার।",
  },
  {
    id: "4",
    name: "Soikat Hasan",
    nameBn: "সৈকত হাসান",
    department: "Anthropology",
    departmentBn: "নৃবিজ্ঞান",
    session: "2017-18",
    image: "",
    phone: "",
    email: "",
    comment:
      "The journey of establishing SUST Fitness Club was challenging but incredibly fulfilling. Every drop of sweat we invested has blossomed into a thriving community of fitness enthusiasts.",
    commentBn:
      "সাস্ট ফিটনেস ক্লাব প্রতিষ্ঠার যাত্রা চ্যালেঞ্জিং ছিল কিন্তু অবিশ্বাস্যভাবে পরিপূর্ণ। আমরা যে প্রতিটি ঘাম বিনিয়োগ করেছি তা ফিটনেস উৎসাহীদের একটি সমৃদ্ধ সম্প্রদায়ে প্রস্ফুটিত হয়েছে।",
  },
  {
    id: "5",
    name: "Asad Miah",
    nameBn: "আসাদ মিয়া",
    department: "Bangla",
    departmentBn: "বাংলা",
    session: "2017-18",
    image: "",
    phone: "",
    email: "",
    comment:
      "Fitness is not just about muscles; it's about mental strength, perseverance, and teamwork. These values formed the foundation of our club, and I'm proud they continue to guide it.",
    commentBn:
      "ফিটনেস শুধু পেশী সম্পর্কে নয়; এটি মানসিক শক্তি, অধ্যবসায় এবং দলগত কাজ সম্পর্কে। এই মূল্যবোধগুলি আমাদের ক্লাবের ভিত্তি তৈরি করেছে, এবং আমি গর্বিত যে এগুলি এটিকে পরিচালনা করে চলেছে।",
  },
  {
    id: "6",
    name: "Md Rashedul Islam",
    nameBn: "মো. রাশেদুল ইসলাম",
    department: "Bangla",
    departmentBn: "বাংলা",
    session: "2017-18",
    image: "",
    phone: "",
    email: "",
    comment:
      "We wanted to create an inclusive space where everyone, regardless of their fitness level, could feel welcome. That spirit of inclusivity remains the heart of SUST Fitness Club.",
    commentBn:
      "আমরা একটি অন্তর্ভুক্তিমূলক স্থান তৈরি করতে চেয়েছিলাম যেখানে প্রত্যেকে, তাদের ফিটনেস স্তর নির্বিশেষে, স্বাগত অনুভব করতে পারে। অন্তর্ভুক্তির সেই মনোভাব সাস্ট ফিটনেস ক্লাবের হৃদয় হয়ে আছে।",
  },
  {
    id: "7",
    name: "Nur Mohammad Ridoy",
    nameBn: "নূর মোহাম্মদ রিদয়",
    department: "Business Administration",
    departmentBn: "ব্যবসায় প্রশাসন",
    session: "2018-19",
    image: "",
    phone: "",
    email: "",
    comment:
      "Starting this club was about creating a legacy of health and wellness at SUST. I'm grateful to see the next generation of students carrying this torch forward with such dedication.",
    commentBn:
      "এই ক্লাব শুরু করা ছিল সাস্টে স্বাস্থ্য এবং সুস্থতার একটি উত্তরাধিকার তৈরি করা। পরবর্তী প্রজন্মের শিক্ষার্থীরা এত নিষ্ঠার সাথে এই মশাল বহন করে যাচ্ছে দেখে আমি কৃতজ্ঞ।",
  },
  {
    id: "8",
    name: "Md Raihan Mia",
    nameBn: "মো. রায়হান মিয়া",
    department: "Anthropology",
    departmentBn: "নৃবিজ্ঞান",
    session: "2016-17",
    image: "",
    phone: "",
    email: "",
    comment:
      "Our vision was to make fitness accessible and enjoyable for every student. The bonds we formed through fitness have lasted a lifetime, and that's the true success of SUST Fitness Club.",
    commentBn:
      "আমাদের লক্ষ্য ছিল প্রতিটি শিক্ষার্থীর জন্য ফিটনেসকে সহজলভ্য এবং উপভোগ্য করে তোলা। ফিটনেসের মাধ্যমে আমরা যে বন্ধন তৈরি করেছি তা আজীবন স্থায়ী হয়েছে, এবং এটাই সাস্ট ফিটনেস ক্লাবের প্রকৃত সফলতা।",
  },
];

interface FoundingMembersContentProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    description: string;
    founderNote: string;
    session: string;
    department: string;
  };
}

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export function FoundingMembersContent({
  lang,
  dictionary,
}: FoundingMembersContentProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32 px-4 bg-white dark:bg-[#0d1117]">
        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,black_30%,transparent_90%)]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />

        <AnimatedPageHero>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-linear-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
              <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn" ? "প্রতিষ্ঠাতাগণ" : "Founders"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-linear-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                {dictionary.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {dictionary.subtitle}
            </p>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Founding Members Section */}
      <section className="relative pb-16 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Founding Members Grid */}
          <AnimatedPageCards className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {foundingMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image with dotted border and white ring */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                    {/* Dotted border ring */}
                    <div className="absolute -inset-px rounded-full border-2 border-dotted border-[#2ecc71]/50 dark:border-[#5ce1e6]/50" />
                    {/* Image container with white ring */}
                    <div className="absolute inset-0 rounded-full bg-white dark:bg-[#161b22] p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-gray-100 dark:bg-[#2d3f50] overflow-hidden flex items-center justify-center">
                        <Image
                          src={
                            member.image &&
                            member.image !== "/placeholder-user.jpg"
                              ? member.image
                              : "/user.png"
                          }
                          alt={lang === "bn" ? member.nameBn : member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Chief Founder Badge */}
                  {member.isChief && (
                    <div className="mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25">
                        {lang === "bn" ? "প্রধান প্রতিষ্ঠাতা" : "Chief Founder"}
                      </span>
                    </div>
                  )}

                  {/* Name & Info */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {lang === "bn" ? member.nameBn : member.name}
                  </h3>
                  <div className="space-y-1 mb-4 text-sm">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                      <Building className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                      <span>
                        {lang === "bn" ? member.departmentBn : member.department}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                      <GraduationCap className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                      <span>
                        {dictionary.session}:{" "}
                        {lang === "bn"
                          ? member.session
                              .replace(/0/g, "০")
                              .replace(/1/g, "১")
                              .replace(/2/g, "২")
                              .replace(/3/g, "৩")
                              .replace(/4/g, "৪")
                              .replace(/5/g, "৫")
                              .replace(/6/g, "৬")
                              .replace(/7/g, "৭")
                              .replace(/8/g, "৮")
                              .replace(/9/g, "৯")
                          : member.session}
                      </span>
                    </div>
                    {member.phone && (
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <Phone className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <Mail className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="relative pt-4 border-t border-dashed border-gray-200 dark:border-slate-600">
                    <Quote className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 text-[#2ecc71]/30 dark:text-[#5ce1e6]/30 bg-white dark:bg-[#161b22]" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                      &ldquo;{lang === "bn" ? member.commentBn : member.comment}
                      &rdquo;
                    </p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-linear-to-t from-[#2ecc71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />
    </div>
  );
}