'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Users, Building, Dumbbell, MessageCircle, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

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

export function FAQContent({ lang, dictionary }: FAQContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { key: 'all', label: lang === 'bn' ? 'সব' : 'All' },
    { key: 'membership', label: dictionary.categories.membership },
    { key: 'facilities', label: dictionary.categories.facilities },
    { key: 'training', label: dictionary.categories.training },
    { key: 'general', label: dictionary.categories.general },
  ];

  const filteredItems = activeCategory === 'all'
    ? dictionary.items
    : dictionary.items.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/5 via-transparent to-[#1e3a5f]/5 dark:from-[#2ecc71]/3 dark:via-transparent dark:to-[#5ce1e6]/3" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/10 dark:bg-[#5ce1e6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 mb-6">
            <HelpCircle className="w-8 h-8 text-[#2ecc71] dark:text-[#5ce1e6]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dictionary.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => {
            const Icon = categoryIcons[category.key] || HelpCircle;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.key
                    ? 'bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117]'
                    : 'bg-gray-100 dark:bg-[#2d3f50] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#3d4f60]'
                }`}
              >
                {category.key !== 'all' && <Icon className="w-4 h-4" />}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const Icon = categoryIcons[item.category] || HelpCircle;
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="card overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 card p-8 text-center relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 mb-4">
              <MessageCircle className="w-7 h-7 text-[#2ecc71] dark:text-[#5ce1e6]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {dictionary.contact.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              {dictionary.contact.description}
            </p>
            <Link href={`/${lang}/contact`}>
              <button className="btn-primary inline-flex items-center gap-2">
                {dictionary.contact.button}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
