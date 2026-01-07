'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ShaderBackground } from '@/components/ui/shader-background';
import type { Locale } from '@/lib/i18n/config';

interface CTASectionProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export function CTASection({ lang, dictionary }: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 cta-section relative overflow-hidden">
      {/* Shader Background */}
      <ShaderBackground />

      <div className="max-w-4xl mx-auto text-center card p-12 relative overflow-hidden dark:bg-[#71e8de10] dark:border-[#2d3f50]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {dictionary.title}
        </h2>
        <p className="relative z-10 text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          {dictionary.subtitle}
        </p>
        <div className="relative z-10">
          <Link href={`/${lang}/contact`}>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-[#2ecc71]/20 dark:hover:shadow-[#5ce1e6]/20 transition-all">
              {dictionary.button}
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
