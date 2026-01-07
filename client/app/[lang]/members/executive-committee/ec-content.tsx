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

// Sample data - replace with actual data
const committees: Committee[] = [
  {
    id: "7th",
    name: "7th Executive Committee",
    nameBn: "৭ম কার্যনির্বাহী কমিটি",
    year: "2024-2025",
    members: [
      {
        id: "1",
        name: "Md. Rahim Uddin",
        nameBn: "মোঃ রহিম উদ্দিন",
        role: "president",
        department: "Computer Science & Engineering",
        departmentBn: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
        session: "2019-20",
        phone: "+880 1712-345678",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "2",
        name: "Fatima Khatun",
        nameBn: "ফাতিমা খাতুন",
        role: "vicePresident",
        department: "Electrical & Electronic Engineering",
        departmentBn: "ইলেক্ট্রিক্যাল অ্যান্ড ইলেক্ট্রনিক ইঞ্জিনিয়ারিং",
        session: "2019-20",
        phone: "+880 1812-456789",
        image: "/placeholder-user.jpg",
        priority: 2,
      },
      {
        id: "3",
        name: "Kamal Hossain",
        nameBn: "কামাল হোসাইন",
        role: "generalSecretary",
        department: "Physics",
        departmentBn: "পদার্থবিজ্ঞান",
        session: "2020-21",
        phone: "+880 1912-567890",
        image: "/placeholder-user.jpg",
        priority: 3,
      },
      {
        id: "4",
        name: "Nusrat Jahan",
        nameBn: "নুসরাত জাহান",
        role: "jointSecretary",
        department: "Chemistry",
        departmentBn: "রসায়ন",
        session: "2020-21",
        phone: "+880 1612-678901",
        image: "/placeholder-user.jpg",
        priority: 4,
      },
      {
        id: "5",
        name: "Tanvir Ahmed",
        nameBn: "তানভীর আহমেদ",
        role: "treasurer",
        department: "Mathematics",
        departmentBn: "গণিত",
        session: "2020-21",
        phone: "+880 1512-789012",
        image: "/placeholder-user.jpg",
        priority: 5,
      },
      {
        id: "6",
        name: "Sharmin Akter",
        nameBn: "শারমিন আক্তার",
        role: "organizingSecretary",
        department: "Statistics",
        departmentBn: "পরিসংখ্যান",
        session: "2020-21",
        phone: "+880 1412-890123",
        image: "/placeholder-user.jpg",
        priority: 6,
      },
      {
        id: "7",
        name: "Rifat Hasan",
        nameBn: "রিফাত হাসান",
        role: "publicationSecretary",
        department: "Civil Engineering",
        departmentBn: "সিভিল ইঞ্জিনিয়ারিং",
        session: "2021-22",
        phone: "+880 1312-901234",
        image: "/placeholder-user.jpg",
        priority: 7,
      },
      {
        id: "8",
        name: "Mithila Rahman",
        nameBn: "মিথিলা রহমান",
        role: "culturalSecretary",
        department: "Architecture",
        departmentBn: "স্থাপত্য",
        session: "2021-22",
        phone: "+880 1712-012345",
        image: "/placeholder-user.jpg",
        priority: 8,
      },
    ],
  },
  {
    id: "6th",
    name: "6th Executive Committee",
    nameBn: "৬ষ্ঠ কার্যনির্বাহী কমিটি",
    year: "2023-2024",
    members: [
      {
        id: "9",
        name: "Sakib Al Hasan",
        nameBn: "সাকিব আল হাসান",
        role: "president",
        department: "Industrial & Production Engineering",
        departmentBn: "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং",
        session: "2018-19",
        phone: "+880 1711-123456",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "10",
        name: "Tasnim Ferdous",
        nameBn: "তাসনিম ফেরদৌস",
        role: "vicePresident",
        department: "Biochemistry",
        departmentBn: "প্রাণরসায়ন",
        session: "2018-19",
        phone: "+880 1811-234567",
        image: "/placeholder-user.jpg",
        priority: 2,
      },
      {
        id: "11",
        name: "Imran Khan",
        nameBn: "ইমরান খান",
        role: "generalSecretary",
        department: "Petroleum & Mining Engineering",
        departmentBn: "পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং",
        session: "2019-20",
        phone: "+880 1911-345678",
        image: "/placeholder-user.jpg",
        priority: 3,
      },
    ],
  },
  {
    id: "5th",
    name: "5th Executive Committee",
    nameBn: "৫ম কার্যনির্বাহী কমিটি",
    year: "2022-2023",
    members: [
      {
        id: "12",
        name: "Rubel Ahmed",
        nameBn: "রুবেল আহমেদ",
        role: "president",
        department: "Mechanical Engineering",
        departmentBn: "মেকানিক্যাল ইঞ্জিনিয়ারিং",
        session: "2017-18",
        phone: "+880 1611-456789",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "13",
        name: "Sadia Islam",
        nameBn: "সাদিয়া ইসলাম",
        role: "generalSecretary",
        department: "Food Engineering",
        departmentBn: "ফুড ইঞ্জিনিয়ারিং",
        session: "2018-19",
        phone: "+880 1511-567890",
        image: "/placeholder-user.jpg",
        priority: 3,
      },
    ],
  },
  {
    id: "1st",
    name: "1st Executive Committee",
    nameBn: "১ম কার্যনির্বাহী কমিটি",
    year: "2018-2019",
    members: [
      {
        id: "14",
        name: "Shahidul Islam",
        nameBn: "শহীদুল ইসলাম",
        role: "president",
        department: "Computer Science & Engineering",
        departmentBn: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
        session: "2014-15",
        phone: "+880 1411-678901",
        image: "/placeholder-user.jpg",
        priority: 1,
      },
      {
        id: "15",
        name: "Marium Begum",
        nameBn: "মরিয়ম বেগম",
        role: "generalSecretary",
        department: "Physics",
        departmentBn: "পদার্থবিজ্ঞান",
        session: "2015-16",
        phone: "+880 1311-789012",
        image: "/placeholder-user.jpg",
        priority: 3,
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/10 dark:bg-[#5ce1e6]/5 rounded-full blur-3xl" />
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

        {/* Committee Selector */}
        <div className="flex justify-center mb-12">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#1a2332] rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-lg hover:shadow-xl transition-all min-w-[280px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#1e3a5f] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
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
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a2332] rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-xl overflow-hidden z-50">
                {committees.map((committee) => (
                  <button
                    key={committee.id}
                    onClick={() => {
                      setSelectedCommittee(committee);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-[#2d3f50] transition-colors ${
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
          {sortedMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative card p-6 bg-white dark:bg-[#1a2332]/80 border border-white dark:border-[#2d3f50] hover:shadow-2xl transition-all duration-300 overflow-hidden"
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

              {/* Member Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Dotted border ring */}
                <div className="absolute -inset-px rounded-full border-2 border-dotted border-[#2ecc71]/50 dark:border-[#5ce1e6]/50" />
                {/* Image container */}
                <div className="absolute inset-0 rounded-full bg-white dark:bg-[#1a2332] p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-100 dark:bg-[#2d3f50] overflow-hidden flex items-center justify-center">
                    <Image
                      src={
                        member.image && member.image !== "/placeholder-user.jpg"
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
                      {lang === "bn" ? member.departmentBn : member.department}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <span>
                      {lang === "bn" ? "সেশন" : "Session"}: {member.session}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2ecc71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
