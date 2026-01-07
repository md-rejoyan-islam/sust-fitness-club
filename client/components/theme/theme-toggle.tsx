'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  dictionary: {
    light: string;
    dark: string;
    toggle: string;
  };
}

export function ThemeToggle({ dictionary }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-xl border border-gray-300 dark:border-neutral-600 transition-colors">
        <span className="sr-only">{dictionary.toggle}</span>
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors border border-gray-300 dark:border-neutral-600"
      aria-label={dictionary.toggle}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? dictionary.light : dictionary.dark}
      </span>
    </button>
  );
}
