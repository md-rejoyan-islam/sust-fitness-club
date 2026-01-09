"use client";

import type { Locale } from "@/lib/i18n/config";
import {
  Building,
  Calendar,
  ChevronDown,
  GraduationCap,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ECMember {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  department: string;
  departmentBn: string;
  session: string;
  phone: string;
  image: string;
  priority: number;
}

interface Committee {
  id: string;
  name: string;
  nameBn: string;
  year: string;
  members: ECMember[];
}

// Executive Committee data
const committees: Committee[] = [
  {
    id: "2nd",
    name: "2nd Executive Committee",
    nameBn: "২য় কার্যনির্বাহী কমিটি",
    year: "2025-2026",
    members: [
      {
        id: "2nd-1",
        name: "Tarequl Islam Mollah",
        nameBn: "তারেকুল ইসলাম মোল্লা",
        role: "president",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "2nd-2",
        name: "Md Akramul Khan",
        nameBn: "মোঃ আকরামুল খান",
        role: "seniorVicePresident",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 2,
      },
      {
        id: "2nd-3",
        name: "Mahedi Hasan Sourav",
        nameBn: "মাহেদী হাসান সৌরভ",
        role: "vicePresident",
        department: "Political Studies",
        departmentBn: "রাজনীতি বিজ্ঞান",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 3,
      },
      {
        id: "2nd-4",
        name: "Amir Hamza",
        nameBn: "আমির হামজা",
        role: "generalSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 4,
      },
      {
        id: "2nd-5",
        name: "Kazi Safayet",
        nameBn: "কাজী সাফায়েত",
        role: "jointSecretary",
        department: "Geography and Environment",
        departmentBn: "ভূগোল ও পরিবেশ",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 5,
      },
      {
        id: "2nd-6",
        name: "Tanvir Ahmed",
        nameBn: "তানভীর আহমেদ",
        role: "assistantGeneralSecretary",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 6,
      },
      {
        id: "2nd-7",
        name: "Jillur Rahman Jilon",
        nameBn: "জিল্লুর রহমান জিলন",
        role: "organizingSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 7,
      },
      {
        id: "2nd-8",
        name: "Motasim Billa Araf",
        nameBn: "মোতাসিম বিল্লা আরাফ",
        role: "assistantOrganizingSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2023-24",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 8,
      },
      {
        id: "2nd-9",
        name: "Ariyan Sheikh",
        nameBn: "আরিয়ান শেখ",
        role: "assistantOrganizingSecretary",
        department: "Statistics",
        departmentBn: "পরিসংখ্যান",
        session: "2023-24",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 9,
      },
      {
        id: "2nd-10",
        name: "Jobayer Alam",
        nameBn: "জোবায়ের আলম",
        role: "publicationSecretary",
        department: "Economics",
        departmentBn: "অর্থনীতি",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 10,
      },
      {
        id: "2nd-11",
        name: "Tahmid Jahin",
        nameBn: "তাহমিদ জাহিন",
        role: "assistantPublicationSecretary",
        department: "Chemistry",
        departmentBn: "রসায়ন",
        session: "2022-23",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 11,
      },
      {
        id: "2nd-12",
        name: "Mohammad Nazmul Jubayer",
        nameBn: "মোহাম্মদ নাজমুল জুবায়ের",
        role: "assistantPublicationSecretary",
        department: "Mathematics",
        departmentBn: "গণিত",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 12,
      },
      {
        id: "2nd-13",
        name: "Ramim Rahman Ovi",
        nameBn: "রামিম রহমান অভি",
        role: "sessionCoordinator",
        department: "Food Engineering and Tea Technology",
        departmentBn: "ফুড ইঞ্জিনিয়ারিং এন্ড টি টেকনোলজি",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 13,
      },
      {
        id: "2nd-14",
        name: "Sheikh Haiul",
        nameBn: "শেখ হাইউল",
        role: "assistantSessionCoordinator",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2023-24",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 14,
      },
      {
        id: "2nd-15",
        name: "Tanvir Hasan",
        nameBn: "তানভীর হাসান",
        role: "assistantSessionCoordinator",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2023-24",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 15,
      },
      {
        id: "2nd-16",
        name: "Manisha Majumdar",
        nameBn: "মানিশা মজুমদার",
        role: "officeSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 16,
      },
      {
        id: "2nd-17",
        name: "Jahima Nahar",
        nameBn: "জাহিমা নাহার",
        role: "headOfContentAndPublicity",
        department: "Food Engineering and Tea Technology",
        departmentBn: "ফুড ইঞ্জিনিয়ারিং এন্ড টি টেকনোলজি",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 17,
      },
      {
        id: "2nd-18",
        name: "Mahamudul Haque Ove",
        nameBn: "মাহামুদুল হক অভি",
        role: "assistantHeadOfContentAndPublicity",
        department: "Electrical and Electronic Engineering",
        departmentBn: "ইলেক্ট্রিক্যাল এন্ড ইলেক্ট্রনিক ইঞ্জিনিয়ারিং",
        session: "2022-23",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 18,
      },
      {
        id: "2nd-19",
        name: "Akram Hossain",
        nameBn: "আকরাম হোসেন",
        role: "documentationSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2022-23",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 19,
      },
      {
        id: "2nd-20",
        name: "Md. Nafiuzzaman Nafi",
        nameBn: "মোঃ নাফিউজ্জামান নাফি",
        role: "assistantDocumentationSecretary",
        department: "Sociology",
        departmentBn: "সমাজবিজ্ঞান",
        session: "2023-24",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 20,
      },
      {
        id: "2nd-21",
        name: "Kazi Zhumaiya Hossain",
        nameBn: "কাজী ঝুমাইয়া হোসেন",
        role: "treasurer",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 21,
      },
      {
        id: "2nd-22",
        name: "Marjana Sadia Afrin",
        nameBn: "মারজানা সাদিয়া আফরিন",
        role: "assistantTreasurer",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 22,
      },
      {
        id: "2nd-23",
        name: "Amit Baidya",
        nameBn: "অমিত বৈদ্য",
        role: "assistantTreasurer",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2022-23",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 23,
      },
    ],
  },
  {
    id: "1st",
    name: "1st Executive Committee",
    nameBn: "১ম কার্যনির্বাহী কমিটি",
    year: "2024-2025",
    members: [
      {
        id: "1st-1",
        name: "Md. Abu Rakib Hasan",
        nameBn: "মোঃ আবু রাকিব হাসান",
        role: "president",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2018-19",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "1st-2",
        name: "Rokibul Islam Rubel",
        nameBn: "রকিবুল ইসলাম রুবেল",
        role: "vicePresident",
        department: "Political Studies",
        departmentBn: "রাজনীতি বিজ্ঞান",
        session: "2018-19",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 2,
      },
      {
        id: "1st-3",
        name: "Arafat Ahmed Sajib",
        nameBn: "আরাফাত আহমেদ সজীব",
        role: "generalSecretary",
        department: "Chemistry",
        departmentBn: "রসায়ন",
        session: "2019-20",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 3,
      },
      {
        id: "1st-4",
        name: "Muktar Hossain Roxy",
        nameBn: "মুক্তার হোসেন রক্সি",
        role: "assistantGeneralSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2019-20",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 4,
      },
      {
        id: "1st-5",
        name: "Mehadi Hasan",
        nameBn: "মেহেদী হাসান",
        role: "assistantGeneralSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2019-20",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 5,
      },
      {
        id: "1st-6",
        name: "Sajeeb Ahamed",
        nameBn: "সজীব আহামেদ",
        role: "organizingSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2019-20",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 6,
      },
      {
        id: "1st-7",
        name: "Jannatul Ferdous",
        nameBn: "জান্নাতুল ফেরদৌস",
        role: "treasurer",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2019-20",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 7,
      },
      {
        id: "1st-8",
        name: "Tarequl Islam Mollah",
        nameBn: "তারেকুল ইসলাম মোল্লা",
        role: "assistantTreasurer",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 8,
      },
      {
        id: "1st-9",
        name: "Shawan Akanda",
        nameBn: "শাওন আকন্দ",
        role: "mediaAndPublicationsSecretary",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 9,
      },
      {
        id: "1st-10",
        name: "Jobayer Alam",
        nameBn: "জোবায়ের আলম",
        role: "assistantMediaAndPublicationsSecretary",
        department: "Economics",
        departmentBn: "অর্থনীতি",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 10,
      },
      {
        id: "1st-11",
        name: "Jillur Rahman Jilon",
        nameBn: "জিল্লুর রহমান জিলন",
        role: "officeSecretary",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 11,
      },
      {
        id: "1st-12",
        name: "Purnima Akhter Mim",
        nameBn: "পূর্ণিমা আখতার মিম",
        role: "socialWelfareSecretary",
        department: "English",
        departmentBn: "ইংরেজি",
        session: "2020-21",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 12,
      },
      {
        id: "1st-13",
        name: "Shafiqul Islam",
        nameBn: "শফিকুল ইসলাম",
        role: "executiveMember",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 13,
      },
      {
        id: "1st-14",
        name: "Asif Ahammed",
        nameBn: "আসিফ আহম্মেদ",
        role: "executiveMember",
        department: "Public Administration",
        departmentBn: "লোক প্রশাসন",
        session: "2021-22",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 14,
      },
      {
        id: "1st-15",
        name: "Dhenar Hossain",
        nameBn: "ধেনার হোসেন",
        role: "executiveMember",
        department: "Bangla",
        departmentBn: "বাংলা",
        session: "2022-23",
        phone: "",
        image: "/placeholder-user.jpg",
        priority: 15,
      },
    ],
  },
];

interface ECContentProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    selectCommittee: string;
    currentCommittee: string;
    roles: {
      president: string;
      vicePresident: string;
      generalSecretary: string;
      jointSecretary: string;
      treasurer: string;
      organizingSecretary: string;
      publicationSecretary: string;
      culturalSecretary: string;
      executiveMember: string;
    };
  };
}

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export function ExecutiveCommitteeContent({
  lang,
  dictionary,
}: ECContentProps) {
  const [selectedCommittee, setSelectedCommittee] = useState(committees[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getRoleLabel = (role: string) => {
    return dictionary.roles[role as keyof typeof dictionary.roles] || role;
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      president:
        "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/25",
      vicePresident:
        "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/25",
      seniorVicePresident:
        "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-500/25",
      generalSecretary:
        "bg-gradient-to-r from-[#2ecc71] to-[#1e3a5f] text-white shadow-[#2ecc71]/25",
      jointSecretary:
        "bg-gradient-to-r from-[#5ce1e6] to-[#2ecc71] text-white shadow-[#5ce1e6]/25",
      treasurer:
        "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-rose-500/25",
      organizingSecretary:
        "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-indigo-500/25",
      publicationSecretary:
        "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-cyan-500/25",
      culturalSecretary:
        "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink-500/25",
    };
    return (
      colors[role] ||
      "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-500/25"
    );
  };

  const sortedMembers = [...selectedCommittee.members].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32  px-4 bg-white dark:bg-[#0d1117]">
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
              {lang === "bn" ? "নেতৃত্ব" : "Leadership"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient bg-gradient-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
              {dictionary.title}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {dictionary.subtitle}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Committee Section */}
      <section className="relative pb-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Committee Selector */}
          <div className="flex justify-center mb-12">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#161b22] rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all min-w-[280px]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                  <Calendar className="w-5 h-5 text-white dark:text-[#0d1117]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {dictionary.selectCommittee}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {lang === "bn"
                      ? selectedCommittee.nameBn
                      : selectedCommittee.name}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isDropdownOpen
                      ? "bg-[#2ecc71] dark:bg-[#5ce1e6]"
                      : "bg-gray-100 dark:bg-[#2d3f50]"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isDropdownOpen
                        ? "rotate-180 text-white dark:text-[#0d1117]"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#161b22] rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-xl overflow-hidden z-50">
                  {committees.map((committee) => (
                    <button
                      key={committee.id}
                      onClick={() => {
                        setSelectedCommittee(committee);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-[#1a2332] transition-colors ${
                        selectedCommittee.id === committee.id
                          ? "bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                          selectedCommittee.id === committee.id
                            ? "bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117]"
                            : "bg-gray-100 dark:bg-[#2d3f50] text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {committee.id}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {lang === "bn" ? committee.nameBn : committee.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {committee.year}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* EC Members Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedMembers.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Member Image */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Dotted border ring */}
                  <div className="absolute -inset-px rounded-full border-2 border-dotted border-[#2ecc71]/50 dark:border-[#5ce1e6]/50" />
                  {/* Image container */}
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
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="flex justify-center mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${getRoleBadgeColor(
                      member.role
                    )}`}
                  >
                    {getRoleLabel(member.role)}
                  </span>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {lang === "bn" ? member.nameBn : member.name}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <Building className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                      <span className="truncate max-w-[180px]">
                        {lang === "bn"
                          ? member.departmentBn
                          : member.department}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                      <span>
                        {lang === "bn" ? "সেশন" : "Session"}:{" "}
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
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                        <a
                          href={`tel:${member.phone.replace(/\s/g, "")}`}
                          className="hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2ecc71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />
    </div>
  );
}
