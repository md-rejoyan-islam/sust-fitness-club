"use client";

import {
  AnimatedFadeIn,
  AnimatedPageHero,
  AnimatedPageSection,
} from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import {
  ArrowRight,
  Building,
  ChevronDown,
  Dumbbell,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

interface FAQContentProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    categories: {
      membership: string;
      facilities: string;
      training: string;
      general: string;
    };
    items: FAQItem[];
    contact: {
      title: string;
      description: string;
      button: string;
    };
  };
}

const categoryIcons: Record<string, typeof Users> = {
  membership: Users,
  facilities: Building,
  training: Dumbbell,
  general: HelpCircle,
};

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export function FAQContent({ lang, dictionary }: FAQContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const categories = [
    { key: "all", label: lang === "bn" ? "সব" : "All" },
    { key: "membership", label: dictionary.categories.membership },
    { key: "facilities", label: dictionary.categories.facilities },
    { key: "training", label: dictionary.categories.training },
    { key: "general", label: dictionary.categories.general },
  ];

  const filteredItems =
    activeCategory === "all"
      ? dictionary.items
      : dictionary.items.filter((item) => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32 pb-10 px-4 bg-white dark:bg-[#0d1117]">
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
                {lang === "bn" ? "সাহায্য কেন্দ্র" : "Help Center"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-linear-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                {dictionary.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {dictionary.subtitle}
            </p>

            {/* Stats badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-linear-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                <HelpCircle className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  {lang === "bn" ? "মোট প্রশ্ন" : "Total Questions"}
                </span>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  {lang === "bn"
                    ? `${dictionary.items.length}+ প্রশ্নের উত্তর`
                    : `${dictionary.items.length}+ Answered`}
                </span>
              </div>
            </div>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* FAQ Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "ক্যাটাগরি" : "Categories"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === "bn" ? "প্রশ্নের বিভাগ" : "Question Categories"}
              </h2>
            </div>
          </AnimatedPageSection>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = categoryIcons[category.key] || HelpCircle;
              return (
                <button
                  key={category.key}
                  onClick={() => {
                    setActiveCategory(category.key);
                    setOpenItems([]);
                  }}
                  className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    activeCategory === category.key
                      ? "bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30"
                      : "bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2d3f50] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6]"
                  }`}
                >
                  {category.key !== "all" && <Icon className="w-4 h-4" />}
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredItems.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#1a2332] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2ecc71]/20 to-[#27ae60]/10 dark:from-[#5ce1e6]/20 dark:to-[#4fd1d9]/10 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#2ecc71] dark:text-[#5ce1e6]" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white pr-4">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? "bg-[#2ecc71] dark:bg-[#5ce1e6]"
                          : "bg-gray-100 dark:bg-[#2d3f50]"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-white dark:text-[#0d1117]"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pl-20 border-t border-dashed border-gray-300 dark:border-slate-600">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No items message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {lang === "bn"
                  ? "এই ক্যাটাগরিতে কোনো প্রশ্ন নেই"
                  : "No questions in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Contact CTA Section */}
      <section className="relative py-4 pb-16 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সাহায্য প্রয়োজন?" : "Need Help?"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {dictionary.contact.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {dictionary.contact.description}
              </p>
            </div>
          </AnimatedPageSection>

          {/* Contact Card */}
          <AnimatedFadeIn>
            <div className="relative pt-3">
              {/* Dashed border outer container */}
              <div className="relative p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                {/* Title label - floating centered green pill badge */}
                <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold text-sm">
                    {lang === "bn" ? "যোগাযোগ" : "Contact"}
                  </span>
                </div>

                {/* Inner card */}
                <div className="rounded-xl overflow-hidden bg-white dark:bg-[#161b22] p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                        <MessageCircle className="w-7 h-7 text-white dark:text-[#0d1117]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {lang === "bn"
                            ? "আমাদের সাথে কথা বলুন"
                            : "Talk to Us"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {lang === "bn"
                            ? "যেকোনো প্রশ্নের জন্য যোগাযোগ করুন"
                            : "Reach out for any questions"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:sustfitnessclub@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-[#2d3f50] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-[#3d5060] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {lang === "bn" ? "ইমেইল" : "Email"}
                      </a>
                      <a
                        href="tel:+8801234567890"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-[#2d3f50] text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-[#3d5060] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {lang === "bn" ? "কল করুন" : "Call"}
                      </a>
                      <Link href={`/${lang}/contact`}>
                        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] font-medium shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30 hover:shadow-xl hover:shadow-[#2ecc71]/40 dark:hover:shadow-[#5ce1e6]/40 transition-all">
                          {dictionary.contact.button}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFadeIn>

          {/* Quick Links */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/sustfitnessclub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-linear-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#2ecc71] dark:group-hover:text-[#5ce1e6] transition-colors">
                    {lang === "bn" ? "ফেসবুক পেজ" : "Facebook Page"}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {lang === "bn"
                      ? "আমাদের ফেসবুক পেজে মেসেজ করুন"
                      : "Message us on our Facebook page"}
                  </p>
                </div>
              </div>
            </a>

            <Link
              href={`/${lang}/about`}
              className="p-6 rounded-2xl bg-linear-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#2ecc71] dark:text-[#5ce1e6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#2ecc71] dark:group-hover:text-[#5ce1e6] transition-colors">
                    {lang === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {lang === "bn"
                      ? "ক্লাব সম্পর্কে আরও জানুন"
                      : "Learn more about our club"}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
