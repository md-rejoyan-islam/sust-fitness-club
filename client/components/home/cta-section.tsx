import type { Locale } from "@/lib/i18n/config";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

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
    <section className="relative py-4 pb-16 px-4 bg-white dark:bg-[#0d1117]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative p-8 sm:p-12 rounded-3xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-linear-to-br from-white via-gray-50 to-white dark:from-[#161b22] dark:via-[#0d1117] dark:to-[#161b22] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-[#2ecc71]/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-linear-to-br from-[#5ce1e6]/20 to-transparent rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#2ecc71] dark:text-[#5ce1e6]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn" ? "আজই শুরু করুন" : "Get Started Today"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {dictionary.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto text-lg">
              {dictionary.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/register`}>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] font-semibold text-lg shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30 hover:shadow-xl hover:shadow-[#2ecc71]/40 dark:hover:shadow-[#5ce1e6]/40 transition-all duration-300 hover:-translate-y-0.5">
                  {dictionary.button}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-dashed border-[#2ecc71]/50 dark:border-[#5ce1e6]/50 bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 font-semibold hover:bg-[#2ecc71]/10 dark:hover:bg-[#5ce1e6]/10 hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-all duration-300">
                  {lang === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
