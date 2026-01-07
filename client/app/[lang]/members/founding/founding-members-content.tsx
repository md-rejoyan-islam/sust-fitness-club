'use client';

import Image from 'next/image';
import { Quote, GraduationCap, Building, Phone, Mail } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

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

// Sample data - replace with actual data
const foundingMembers: FoundingMember[] = [
  {
    id: '1',
    name: 'Shahidul Islam',
    nameBn: 'শহীদুল ইসলাম',
    department: 'Computer Science & Engineering',
    departmentBn: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
    session: '2014-15',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345678',
    email: 'shahidul@example.com',
    isChief: true,
    comment: "When we started SUST Fitness Club, our dream was simple - to create a space where students could prioritize their health alongside academics. Seeing how far we've come fills my heart with immense pride. This club is not just about physical fitness; it's about building character, discipline, and a supportive community.",
    commentBn: "যখন আমরা সাস্ট ফিটনেস ক্লাব শুরু করেছিলাম, আমাদের স্বপ্ন ছিল সহজ - এমন একটি জায়গা তৈরি করা যেখানে শিক্ষার্থীরা পড়াশোনার পাশাপাশি তাদের স্বাস্থ্যকে অগ্রাধিকার দিতে পারে। আমরা কতদূর এসেছি তা দেখে আমার হৃদয় গর্বে ভরে যায়। এই ক্লাব শুধু শারীরিক ফিটনেসের জন্য নয়; এটি চরিত্র, শৃঙ্খলা এবং একটি সহায়ক সম্প্রদায় গঠনের জন্য।",
  },
  {
    id: '2',
    name: 'Marium Begum',
    nameBn: 'মরিয়ম বেগম',
    department: 'Physics',
    departmentBn: 'পদার্থবিজ্ঞান',
    session: '2015-16',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345679',
    email: 'marium@example.com',
    comment: "Being part of founding this club taught me that great things start with small, determined steps. We wanted to prove that university life can be balanced with fitness, and today, hundreds of students benefit from this vision.",
    commentBn: "এই ক্লাব প্রতিষ্ঠার অংশ হওয়া আমাকে শিখিয়েছে যে মহান জিনিসগুলি ছোট, দৃঢ় পদক্ষেপ দিয়ে শুরু হয়। আমরা প্রমাণ করতে চেয়েছিলাম যে বিশ্ববিদ্যালয়ের জীবন ফিটনেসের সাথে ভারসাম্যপূর্ণ হতে পারে, এবং আজ শত শত শিক্ষার্থী এই দৃষ্টিভঙ্গি থেকে উপকৃত হচ্ছে।",
  },
  {
    id: '3',
    name: 'Abdul Karim',
    nameBn: 'আবদুল করিম',
    department: 'Chemistry',
    departmentBn: 'রসায়ন',
    session: '2014-15',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345680',
    email: 'abdul@example.com',
    comment: "We believed that a healthy body nurtures a healthy mind. Watching new generations of students embrace fitness culture at SUST is the greatest reward for our initial efforts.",
    commentBn: "আমরা বিশ্বাস করতাম যে একটি সুস্থ শরীর একটি সুস্থ মনকে পালন করে। সাস্টে নতুন প্রজন্মের শিক্ষার্থীদের ফিটনেস সংস্কৃতিকে গ্রহণ করতে দেখা আমাদের প্রাথমিক প্রচেষ্টার জন্য সবচেয়ে বড় পুরস্কার।",
  },
  {
    id: '4',
    name: 'Rashida Khatun',
    nameBn: 'রশিদা খাতুন',
    department: 'Electrical & Electronic Engineering',
    departmentBn: 'ইলেক্ট্রিক্যাল অ্যান্ড ইলেক্ট্রনিক ইঞ্জিনিয়ারিং',
    session: '2015-16',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345681',
    email: 'rashida@example.com',
    comment: "The journey of establishing SUST Fitness Club was challenging but incredibly fulfilling. Every drop of sweat we invested has blossomed into a thriving community of fitness enthusiasts.",
    commentBn: "সাস্ট ফিটনেস ক্লাব প্রতিষ্ঠার যাত্রা চ্যালেঞ্জিং ছিল কিন্তু অবিশ্বাস্যভাবে পরিপূর্ণ। আমরা যে প্রতিটি ঘাম বিনিয়োগ করেছি তা ফিটনেস উৎসাহীদের একটি সমৃদ্ধ সম্প্রদায়ে প্রস্ফুটিত হয়েছে।",
  },
  {
    id: '5',
    name: 'Habibur Rahman',
    nameBn: 'হাবিবুর রহমান',
    department: 'Mathematics',
    departmentBn: 'গণিত',
    session: '2014-15',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345682',
    email: 'habibur@example.com',
    comment: "Fitness is not just about muscles; it's about mental strength, perseverance, and teamwork. These values formed the foundation of our club, and I'm proud they continue to guide it.",
    commentBn: "ফিটনেস শুধু পেশী সম্পর্কে নয়; এটি মানসিক শক্তি, অধ্যবসায় এবং দলগত কাজ সম্পর্কে। এই মূল্যবোধগুলি আমাদের ক্লাবের ভিত্তি তৈরি করেছে, এবং আমি গর্বিত যে এগুলি এটিকে পরিচালনা করে চলেছে।",
  },
  {
    id: '6',
    name: 'Salma Akter',
    nameBn: 'সালমা আক্তার',
    department: 'Statistics',
    departmentBn: 'পরিসংখ্যান',
    session: '2015-16',
    image: '/placeholder-user.jpg',
    phone: '+880 1712-345683',
    email: 'salma@example.com',
    comment: "We wanted to create an inclusive space where everyone, regardless of their fitness level, could feel welcome. That spirit of inclusivity remains the heart of SUST Fitness Club.",
    commentBn: "আমরা একটি অন্তর্ভুক্তিমূলক স্থান তৈরি করতে চেয়েছিলাম যেখানে প্রত্যেকে, তাদের ফিটনেস স্তর নির্বিশেষে, স্বাগত অনুভব করতে পারে। অন্তর্ভুক্তির সেই মনোভাব সাস্ট ফিটনেস ক্লাবের হৃদয় হয়ে আছে।",
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

export function FoundingMembersContent({ lang, dictionary }: FoundingMembersContentProps) {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/5 via-transparent to-[#1e3a5f]/5 dark:from-[#2ecc71]/3 dark:via-transparent dark:to-[#5ce1e6]/3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-40 left-20 w-80 h-80 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/10 dark:bg-[#5ce1e6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dictionary.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Founding Members Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foundingMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative card p-6 dark:bg-[#1a2332]/80 dark:border-[#2d3f50] hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-0"
                style={{
                  backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              <div
                className="absolute inset-0 opacity-0 dark:opacity-[0.015]"
                style={{
                  backgroundImage: `linear-gradient(#5ce1e6 1px, transparent 1px), linear-gradient(90deg, #5ce1e6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="flex flex-col items-center text-center">
                {/* Image with dotted border and white ring */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Dotted border ring */}
                  <div className="absolute -inset-px rounded-full border-2 border-dotted border-[#2ecc71]/50 dark:border-[#5ce1e6]/50" />
                  {/* Image container with white ring */}
                  <div className="absolute inset-0 rounded-full bg-white dark:bg-[#1a2332] p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-gray-100 dark:bg-[#2d3f50] overflow-hidden flex items-center justify-center">
                      <Image
                        src={member.image && member.image !== '/placeholder-user.jpg' ? member.image : '/user.png'}
                        alt={lang === 'bn' ? member.nameBn : member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {lang === 'bn' ? member.nameBn : member.name}
                </h3>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <Building className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <span>{lang === 'bn' ? member.departmentBn : member.department}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <span>{dictionary.session}: {member.session}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <span>{member.email}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pt-4 border-t border-gray-100 dark:border-[#2d3f50]">
                  <Quote className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 text-[#2ecc71]/30 dark:text-[#5ce1e6]/30 bg-white dark:bg-[#1a2332]" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                    "{lang === 'bn' ? member.commentBn : member.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
