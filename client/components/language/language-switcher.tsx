'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  dictionary: {
    switchTo: string;
    current: string;
  };
}

export function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center lang-toggle rounded-xl p-1 gap-1">
      <button
        onClick={() => switchLocale('bn')}
        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
          currentLocale === 'bn'
            ? 'lang-toggle-active'
            : 'lang-toggle-inactive'
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
          currentLocale === 'en'
            ? 'lang-toggle-active'
            : 'lang-toggle-inactive'
        }`}
      >
        EN
      </button>
    </div>
  );
}
