'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Quote, Building, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

interface Advisor {
  id: string;
  name: string;
  nameBn: string;
  designation: string;
  designationBn: string;
  department: string;
  departmentBn: string;
  image: string;
  email: string;
  phone: string;
  message: string;
  messageBn: string;
  isCurrent: boolean;
  isChief?: boolean;
}

// Sample data - replace with actual data
const advisors: Advisor[] = [
  {
    id: '1',
    name: 'Dr. Mohammad Rahman',
    nameBn: 'ড. মোহাম্মদ রহমান',
    designation: 'Professor',
    designationBn: 'অধ্যাপক',
    department: 'Department of Physical Education',
    departmentBn: 'শারীরিক শিক্ষা বিভাগ',
    image: '/placeholder-user.jpg',
    email: 'mrahman@sust.edu',
    phone: '+880 1712-000001',
    isCurrent: true,
    isChief: true,
    message: "Physical fitness is the foundation of dynamic and creative intellectual activity. SUST Fitness Club plays a vital role in promoting health awareness among our students. I'm honored to guide this wonderful initiative.",
    messageBn: "শারীরিক সুস্থতা গতিশীল এবং সৃজনশীল বুদ্ধিবৃত্তিক কার্যকলাপের ভিত্তি। সাস্ট ফিটনেস ক্লাব আমাদের শিক্ষার্থীদের মধ্যে স্বাস্থ্য সচেতনতা প্রচারে গুরুত্বপূর্ণ ভূমিকা পালন করে। এই চমৎকার উদ্যোগকে পরিচালনা করতে পেরে আমি সম্মানিত।",
  },
  {
    id: '2',
    name: 'Dr. Fatema Begum',
    nameBn: 'ড. ফাতেমা বেগম',
    designation: 'Associate Professor',
    designationBn: 'সহযোগী অধ্যাপক',
    department: 'Department of Chemistry',
    departmentBn: 'রসায়ন বিভাগ',
    image: '/placeholder-user.jpg',
    email: 'fbegum@sust.edu',
    phone: '+880 1712-000002',
    isCurrent: true,
    message: "A healthy mind resides in a healthy body. I encourage all students to make fitness a part of their daily routine. The discipline learned through physical training extends to all aspects of life.",
    messageBn: "একটি সুস্থ শরীরে সুস্থ মন থাকে। আমি সকল শিক্ষার্থীদের ফিটনেসকে তাদের দৈনন্দিন রুটিনের অংশ করতে উৎসাহিত করি। শারীরিক প্রশিক্ষণের মাধ্যমে শেখা শৃঙ্খলা জীবনের সকল ক্ষেত্রে প্রসারিত হয়।",
  },
  {
    id: '3',
    name: 'Dr. Kamal Uddin',
    nameBn: 'ড. কামাল উদ্দিন',
    designation: 'Professor',
    designationBn: 'অধ্যাপক',
    department: 'Department of Computer Science & Engineering',
    departmentBn: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ',
    image: '/placeholder-user.jpg',
    email: 'kuddin@sust.edu',
    phone: '+880 1712-000003',
    isCurrent: true,
    message: "In today's technology-driven world, it's easy to become sedentary. SUST Fitness Club reminds us of the importance of physical activity. Keep moving, stay healthy!",
    messageBn: "আজকের প্রযুক্তি-চালিত বিশ্বে, নিষ্ক্রিয় হয়ে যাওয়া সহজ। সাস্ট ফিটনেস ক্লাব আমাদের শারীরিক কার্যকলাপের গুরুত্ব মনে করিয়ে দেয়। চলমান থাকুন, সুস্থ থাকুন!",
  },
  {
    id: '4',
    name: 'Dr. Nasreen Akter',
    nameBn: 'ড. নাসরীন আক্তার',
    designation: 'Professor (Retired)',
    designationBn: 'অধ্যাপক (অবসরপ্রাপ্ত)',
    department: 'Department of Physics',
    departmentBn: 'পদার্থবিজ্ঞান বিভাগ',
    image: '/placeholder-user.jpg',
    email: 'nakter@sust.edu',
    phone: '+880 1712-000004',
    isCurrent: false,
    message: "I had the privilege of being one of the first advisors of SUST Fitness Club. Watching it grow from a small group to a thriving community has been incredibly rewarding.",
    messageBn: "সাস্ট ফিটনেস ক্লাবের প্রথম উপদেষ্টাদের একজন হওয়ার সৌভাগ্য আমার হয়েছিল। একটি ছোট দল থেকে একটি সমৃদ্ধ সম্প্রদায়ে এটি বেড়ে উঠতে দেখা অবিশ্বাস্যভাবে ফলপ্রসূ হয়েছে।",
  },
  {
    id: '5',
    name: 'Dr. Abdul Hamid',
    nameBn: 'ড. আবদুল হামিদ',
    designation: 'Professor (Retired)',
    designationBn: 'অধ্যাপক (অবসরপ্রাপ্ত)',
    department: 'Department of Mathematics',
    departmentBn: 'গণিত বিভাগ',
    image: '/placeholder-user.jpg',
    email: 'ahamid@sust.edu',
    phone: '+880 1712-000005',
    isCurrent: false,
    message: "The enthusiasm and dedication of our student fitness enthusiasts always inspired me. The club's growth is a testament to the hard work of many generations of students.",
    messageBn: "আমাদের ছাত্র ফিটনেস উৎসাহীদের উৎসাহ এবং নিষ্ঠা সবসময় আমাকে অনুপ্রাণিত করেছে। ক্লাবের বৃদ্ধি অনেক প্রজন্মের শিক্ষার্থীদের কঠোর পরিশ্রমের প্রমাণ।",
  },
];

interface AdvisorsContentProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    description: string;
    currentAdvisors: string;
    formerAdvisors: string;
    department: string;
    designation: string;
    message: string;
  };
}

export function AdvisorsContent({ lang, dictionary }: AdvisorsContentProps) {
  const [activeTab, setActiveTab] = useState<'current' | 'former'>('current');

  const currentAdvisors = advisors.filter(a => a.isCurrent);
  const formerAdvisors = advisors.filter(a => !a.isCurrent);
  const displayedAdvisors = activeTab === 'current' ? currentAdvisors : formerAdvisors;

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
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#1e3a5f]/10 dark:bg-[#5ce1e6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dictionary.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">
            {dictionary.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-[#1a2332] rounded-2xl">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'current'
                  ? 'bg-white dark:bg-[#2d3f50] text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {dictionary.currentAdvisors} ({currentAdvisors.length})
            </button>
            <button
              onClick={() => setActiveTab('former')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'former'
                  ? 'bg-white dark:bg-[#2d3f50] text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {dictionary.formerAdvisors} ({formerAdvisors.length})
            </button>
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedAdvisors.map((advisor, index) => (
            <div
              key={advisor.id}
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
                        src={advisor.image && advisor.image !== '/placeholder-user.jpg' ? advisor.image : '/user.png'}
                        alt={lang === 'bn' ? advisor.nameBn : advisor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {lang === 'bn' ? advisor.nameBn : advisor.name}
                </h3>
                <p className="text-[#2ecc71] dark:text-[#5ce1e6] font-medium text-sm mb-2">
                  {lang === 'bn' ? advisor.designationBn : advisor.designation}
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <Building className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                  <span>{lang === 'bn' ? advisor.departmentBn : advisor.department}</span>
                </div>

                {/* Quote */}
                <div className="relative pt-4 border-t border-gray-100 dark:border-[#2d3f50] mb-4">
                  <Quote className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 text-[#2ecc71]/30 dark:text-[#5ce1e6]/30 bg-white dark:bg-[#1a2332]" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic line-clamp-4">
                    "{lang === 'bn' ? advisor.messageBn : advisor.message}"
                  </p>
                </div>

                {/* Contact */}
                <div className="flex justify-center gap-2">
                  <a
                    href={`mailto:${advisor.email}`}
                    className="w-9 h-9 rounded-lg bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 flex items-center justify-center hover:bg-[#2ecc71] dark:hover:bg-[#5ce1e6] text-[#2ecc71] dark:text-[#5ce1e6] hover:text-white dark:hover:text-[#1a2332] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${advisor.phone}`}
                    className="w-9 h-9 rounded-lg bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 flex items-center justify-center hover:bg-[#2ecc71] dark:hover:bg-[#5ce1e6] text-[#2ecc71] dark:text-[#5ce1e6] hover:text-white dark:hover:text-[#1a2332] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
