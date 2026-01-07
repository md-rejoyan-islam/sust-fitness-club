'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Users, Search, Filter, GraduationCap, Calendar, Droplets } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

interface Member {
  id: string;
  name: string;
  nameBn: string;
  email: string;
  phone: string;
  department: string;
  departmentBn: string;
  session: string;
  bloodGroup: string;
  memberSince: string;
  image: string;
}

// Sample data - replace with actual data
const members: Member[] = [
  {
    id: '1',
    name: 'Md. Aminul Islam',
    nameBn: 'মোঃ আমিনুল ইসলাম',
    email: 'aminul@student.sust.edu',
    phone: '+880 1712-111111',
    department: 'Computer Science & Engineering',
    departmentBn: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
    session: '2021-22',
    bloodGroup: 'A+',
    memberSince: '2022',
    image: '/placeholder-user.jpg',
  },
  {
    id: '2',
    name: 'Nusrat Jahan',
    nameBn: 'নুসরাত জাহান',
    email: 'nusrat@student.sust.edu',
    phone: '+880 1712-222222',
    department: 'Electrical & Electronic Engineering',
    departmentBn: 'ইলেক্ট্রিক্যাল অ্যান্ড ইলেক্ট্রনিক ইঞ্জিনিয়ারিং',
    session: '2020-21',
    bloodGroup: 'B+',
    memberSince: '2021',
    image: '/placeholder-user.jpg',
  },
  {
    id: '3',
    name: 'Rakibul Hasan',
    nameBn: 'রাকিবুল হাসান',
    email: 'rakib@student.sust.edu',
    phone: '+880 1712-333333',
    department: 'Physics',
    departmentBn: 'পদার্থবিজ্ঞান',
    session: '2021-22',
    bloodGroup: 'O+',
    memberSince: '2022',
    image: '/placeholder-user.jpg',
  },
  {
    id: '4',
    name: 'Fatima Akter',
    nameBn: 'ফাতিমা আক্তার',
    email: 'fatima@student.sust.edu',
    phone: '+880 1712-444444',
    department: 'Chemistry',
    departmentBn: 'রসায়ন',
    session: '2020-21',
    bloodGroup: 'AB+',
    memberSince: '2021',
    image: '/placeholder-user.jpg',
  },
  {
    id: '5',
    name: 'Shahin Ahmed',
    nameBn: 'শাহীন আহমেদ',
    email: 'shahin@student.sust.edu',
    phone: '+880 1712-555555',
    department: 'Mathematics',
    departmentBn: 'গণিত',
    session: '2022-23',
    bloodGroup: 'A-',
    memberSince: '2023',
    image: '/placeholder-user.jpg',
  },
  {
    id: '6',
    name: 'Mithila Rahman',
    nameBn: 'মিথিলা রহমান',
    email: 'mithila@student.sust.edu',
    phone: '+880 1712-666666',
    department: 'Statistics',
    departmentBn: 'পরিসংখ্যান',
    session: '2021-22',
    bloodGroup: 'B-',
    memberSince: '2022',
    image: '/placeholder-user.jpg',
  },
  {
    id: '7',
    name: 'Tanvir Khan',
    nameBn: 'তানভীর খান',
    email: 'tanvir@student.sust.edu',
    phone: '+880 1712-777777',
    department: 'Civil Engineering',
    departmentBn: 'সিভিল ইঞ্জিনিয়ারিং',
    session: '2020-21',
    bloodGroup: 'O-',
    memberSince: '2021',
    image: '/placeholder-user.jpg',
  },
  {
    id: '8',
    name: 'Sabrina Sultana',
    nameBn: 'সাবরিনা সুলতানা',
    email: 'sabrina@student.sust.edu',
    phone: '+880 1712-888888',
    department: 'Architecture',
    departmentBn: 'স্থাপত্য',
    session: '2022-23',
    bloodGroup: 'AB-',
    memberSince: '2023',
    image: '/placeholder-user.jpg',
  },
  {
    id: '9',
    name: 'Imran Hossain',
    nameBn: 'ইমরান হোসাইন',
    email: 'imran@student.sust.edu',
    phone: '+880 1712-999999',
    department: 'Mechanical Engineering',
    departmentBn: 'মেকানিক্যাল ইঞ্জিনিয়ারিং',
    session: '2021-22',
    bloodGroup: 'A+',
    memberSince: '2022',
    image: '/placeholder-user.jpg',
  },
  {
    id: '10',
    name: 'Rifat Jahan',
    nameBn: 'রিফাত জাহান',
    email: 'rifat@student.sust.edu',
    phone: '+880 1712-101010',
    department: 'Industrial & Production Engineering',
    departmentBn: 'ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং',
    session: '2020-21',
    bloodGroup: 'B+',
    memberSince: '2021',
    image: '/placeholder-user.jpg',
  },
  {
    id: '11',
    name: 'Kamal Uddin',
    nameBn: 'কামাল উদ্দিন',
    email: 'kamal@student.sust.edu',
    phone: '+880 1712-111213',
    department: 'Petroleum & Mining Engineering',
    departmentBn: 'পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং',
    session: '2022-23',
    bloodGroup: 'O+',
    memberSince: '2023',
    image: '/placeholder-user.jpg',
  },
  {
    id: '12',
    name: 'Nasreen Akter',
    nameBn: 'নাসরীন আক্তার',
    email: 'nasreen@student.sust.edu',
    phone: '+880 1712-141516',
    department: 'Food Engineering',
    departmentBn: 'ফুড ইঞ্জিনিয়ারিং',
    session: '2021-22',
    bloodGroup: 'A+',
    memberSince: '2022',
    image: '/placeholder-user.jpg',
  },
];

const departments = [
  { en: 'Computer Science & Engineering', bn: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং' },
  { en: 'Electrical & Electronic Engineering', bn: 'ইলেক্ট্রিক্যাল অ্যান্ড ইলেক্ট্রনিক ইঞ্জিনিয়ারিং' },
  { en: 'Physics', bn: 'পদার্থবিজ্ঞান' },
  { en: 'Chemistry', bn: 'রসায়ন' },
  { en: 'Mathematics', bn: 'গণিত' },
  { en: 'Statistics', bn: 'পরিসংখ্যান' },
  { en: 'Civil Engineering', bn: 'সিভিল ইঞ্জিনিয়ারিং' },
  { en: 'Architecture', bn: 'স্থাপত্য' },
  { en: 'Mechanical Engineering', bn: 'মেকানিক্যাল ইঞ্জিনিয়ারিং' },
  { en: 'Industrial & Production Engineering', bn: 'ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং' },
  { en: 'Petroleum & Mining Engineering', bn: 'পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং' },
  { en: 'Food Engineering', bn: 'ফুড ইঞ্জিনিয়ারিং' },
];

interface GeneralMembersContentProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    totalMembers: string;
    searchPlaceholder: string;
    filterByDepartment: string;
    allDepartments: string;
    memberSince: string;
    department: string;
    session: string;
    bloodGroup: string;
    noResults: string;
  };
}

export function GeneralMembersContent({ lang, dictionary }: GeneralMembersContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.nameBn.includes(searchQuery) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDepartment = !selectedDepartment || member.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

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
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#1e3a5f]/10 dark:bg-[#5ce1e6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#2ecc71]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dictionary.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-3xl mx-auto">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={dictionary.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#1a2332] rounded-2xl border border-gray-200 dark:border-[#2d3f50] focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#1a2332] rounded-2xl border border-gray-200 dark:border-[#2d3f50] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-colors min-w-[200px]"
            >
              <Filter className="w-5 h-5 text-[#2ecc71] dark:text-[#5ce1e6]" />
              <span className="flex-1 text-left text-gray-700 dark:text-gray-300">
                {selectedDepartment
                  ? (lang === 'bn'
                      ? departments.find(d => d.en === selectedDepartment)?.bn
                      : selectedDepartment)
                  : dictionary.allDepartments}
              </span>
            </button>

            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a2332] rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-xl overflow-hidden z-50 max-h-64 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedDepartment('');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-[#2d3f50] transition-colors ${
                    !selectedDepartment ? 'bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10' : ''
                  }`}
                >
                  {dictionary.allDepartments}
                </button>
                {departments.map((dept) => (
                  <button
                    key={dept.en}
                    onClick={() => {
                      setSelectedDepartment(dept.en);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-[#2d3f50] transition-colors text-sm ${
                      selectedDepartment === dept.en ? 'bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10' : ''
                    }`}
                  >
                    {lang === 'bn' ? dept.bn : dept.en}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative card p-6 dark:bg-[#1a2332]/80 dark:border-[#2d3f50] hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
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

                {/* Member Image */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Dotted border ring */}
                  <div className="absolute -inset-px rounded-full border-2 border-dotted border-[#2ecc71]/50 dark:border-[#5ce1e6]/50" />
                  {/* Image container */}
                  <div className="absolute inset-0 rounded-full bg-white dark:bg-[#1a2332] p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-gray-100 dark:bg-[#2d3f50] overflow-hidden flex items-center justify-center">
                      <Image
                        src={member.image && member.image !== "/placeholder-user.jpg" ? member.image : "/user.png"}
                        alt={lang === 'bn' ? member.nameBn : member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {lang === 'bn' ? member.nameBn : member.name}
                  </h3>
                  <p className="text-sm text-[#2ecc71] dark:text-[#5ce1e6] font-medium">
                    {lang === 'bn' ? member.departmentBn : member.department}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <GraduationCap className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6] shrink-0" />
                    <span>{dictionary.session}: {member.session}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6] shrink-0" />
                    <span>{dictionary.memberSince}: {member.memberSince}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Droplets className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{dictionary.bloodGroup}: <span className="font-semibold text-red-500">{member.bloodGroup}</span></span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-100 dark:bg-[#2d3f50] flex items-center justify-center mb-4">
              <Users className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{dictionary.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
