# SUST Fitness Club Website - Architecture Documentation

## Overview

This document provides a comprehensive guide for building the SUST Fitness Club website with:
- **Dark/Light Theme** support using `next-themes`
- **Multi-language (i18n)** support for Bangla (bn) and English (en)
- **URL-based locale routing** (e.g., `/bn/about`, `/en/about`)

---

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Internationalization (i18n)](#internationalization-i18n)
3. [Theme System](#theme-system)
4. [Implementation Guide](#implementation-guide)
5. [Component Guidelines](#component-guidelines)
6. [Best Practices](#best-practices)

---

## Folder Structure

```
client/
├── app/
│   └── [lang]/                    # Dynamic locale route
│       ├── layout.tsx             # Root layout with providers
│       ├── page.tsx               # Home page
│       ├── about/
│       │   └── page.tsx           # About page
│       ├── programs/
│       │   └── page.tsx           # Programs/Services page
│       ├── trainers/
│       │   └── page.tsx           # Trainers page
│       ├── gallery/
│       │   └── page.tsx           # Gallery page
│       ├── contact/
│       │   └── page.tsx           # Contact page
│       └── globals.css            # Global styles
│
├── components/
│   ├── ui/                        # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── layout/                    # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── mobile-nav.tsx
│   ├── theme/                     # Theme related components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── language/                  # Language related components
│   │   └── language-switcher.tsx
│   └── sections/                  # Page sections
│       ├── hero.tsx
│       ├── features.tsx
│       ├── testimonials.tsx
│       └── ...
│
├── lib/
│   ├── utils.ts                   # Utility functions
│   ├── i18n/                      # Internationalization
│   │   ├── config.ts              # i18n configuration
│   │   ├── dictionaries.ts        # Dictionary loader
│   │   └── get-dictionary.ts      # Server-side dictionary fetcher
│   └── fonts.ts                   # Font configurations
│
├── dictionaries/                  # Translation files
│   ├── bn.json                    # Bangla translations
│   └── en.json                    # English translations
│
├── hooks/
│   ├── use-locale.ts              # Locale hook
│   └── use-dictionary.ts          # Dictionary hook for client components
│
├── types/
│   ├── dictionary.ts              # Dictionary type definitions
│   └── index.ts                   # Shared types
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero/
│   │   ├── trainers/
│   │   └── gallery/
│   └── fonts/                     # Custom fonts (if any)
│
├── middleware.ts                  # Locale detection & routing
├── next.config.ts                 # Next.js configuration
└── package.json
```

---

## Internationalization (i18n)

### How It Works

1. **URL Structure**: Locale is part of the URL path
   - Bangla (default): `https://sustfitness.com/bn/about`
   - English: `https://sustfitness.com/en/about`

2. **Middleware**: Automatically redirects users to their preferred locale
   - Detects browser language preference
   - Falls back to Bangla (bn) as default

3. **Dictionary System**: JSON files store all translations
   - Loaded server-side for Server Components
   - Passed as props to Client Components

### Locale Configuration

```typescript
// lib/i18n/config.ts
export const i18n = {
  defaultLocale: 'bn',
  locales: ['bn', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
```

### Dictionary Structure

```json
// dictionaries/bn.json
{
  "metadata": {
    "title": "সাস্ট ফিটনেস ক্লাব",
    "description": "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের অফিসিয়াল ফিটনেস ক্লাব"
  },
  "navigation": {
    "home": "হোম",
    "about": "আমাদের সম্পর্কে",
    "programs": "প্রোগ্রাম",
    "trainers": "প্রশিক্ষক",
    "gallery": "গ্যালারি",
    "contact": "যোগাযোগ"
  },
  "hero": {
    "title": "আপনার ফিটনেস যাত্রা শুরু করুন",
    "subtitle": "সাস্ট ফিটনেস ক্লাবে আপনাকে স্বাগতম",
    "cta": "এখনই যোগ দিন"
  },
  "common": {
    "readMore": "আরও পড়ুন",
    "learnMore": "আরও জানুন",
    "contactUs": "যোগাযোগ করুন"
  },
  "theme": {
    "light": "লাইট",
    "dark": "ডার্ক",
    "system": "সিস্টেম"
  },
  "language": {
    "switchTo": "Switch to English",
    "current": "বাংলা"
  }
}
```

```json
// dictionaries/en.json
{
  "metadata": {
    "title": "SUST Fitness Club",
    "description": "Official Fitness Club of Shahjalal University of Science and Technology"
  },
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "programs": "Programs",
    "trainers": "Trainers",
    "gallery": "Gallery",
    "contact": "Contact"
  },
  "hero": {
    "title": "Start Your Fitness Journey",
    "subtitle": "Welcome to SUST Fitness Club",
    "cta": "Join Now"
  },
  "common": {
    "readMore": "Read More",
    "learnMore": "Learn More",
    "contactUs": "Contact Us"
  },
  "theme": {
    "light": "Light",
    "dark": "Dark",
    "system": "System"
  },
  "language": {
    "switchTo": "বাংলায় দেখুন",
    "current": "English"
  }
}
```

### Using Translations

#### Server Components (Recommended)
```tsx
// app/[lang]/page.tsx
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/lib/i18n/config';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <h1>{dict.hero.title}</h1>
      <p>{dict.hero.subtitle}</p>
    </main>
  );
}
```

#### Client Components
```tsx
'use client';

import { Dictionary } from '@/types/dictionary';

interface HeroProps {
  dictionary: Dictionary['hero'];
}

export function Hero({ dictionary }: HeroProps) {
  return (
    <section>
      <h1>{dictionary.title}</h1>
      <p>{dictionary.subtitle}</p>
      <button>{dictionary.cta}</button>
    </section>
  );
}
```

---

## Theme System

### How It Works

1. **next-themes**: Library for theme management
2. **CSS Variables**: Theme colors defined in CSS
3. **Class-based**: Theme applied via `class="dark"` on `<html>`

### Theme Configuration

The theme uses CSS variables defined in `globals.css`:

```css
:root {
  /* Light theme colors */
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 142.1 76.2% 36.3%;  /* Green for fitness */
  /* ... more colors */
}

.dark {
  /* Dark theme colors */
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 142.1 70.6% 45.3%;
  /* ... more colors */
}
```

### Using Theme in Components

```tsx
'use client';

import { useTheme } from 'next-themes';

export function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

---

## Implementation Guide

### Step 1: Install Dependencies

```bash
pnpm add next-themes negotiator @formatjs/intl-localematcher
pnpm add -D @types/negotiator
```

### Step 2: Create i18n Configuration

Create `lib/i18n/config.ts`:
```typescript
export const i18n = {
  defaultLocale: 'bn',
  locales: ['bn', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}
```

### Step 3: Create Middleware

Create `middleware.ts` at project root:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from '@/lib/i18n/config';

function getLocale(request: NextRequest): string {
  const headers = {
    'accept-language': request.headers.get('accept-language') || '',
  };
  const languages = new Negotiator({ headers }).languages();

  try {
    return match(languages, i18n.locales, i18n.defaultLocale);
  } catch {
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
```

### Step 4: Create Dictionary Loader

Create `lib/i18n/get-dictionary.ts`:
```typescript
import 'server-only';
import { Locale } from './config';

const dictionaries = {
  bn: () => import('@/dictionaries/bn.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
```

### Step 5: Create Theme Provider

Create `components/theme/theme-provider.tsx`:
```typescript
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### Step 6: Update Root Layout

Create `app/[lang]/layout.tsx`:
```typescript
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { i18n, Locale } from '@/lib/i18n/config';
import '@/app/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## Component Guidelines

### Language Switcher

```tsx
// components/language/language-switcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  dictionary: {
    switchTo: string;
    current: string;
  };
}

export function LanguageSwitcher({ currentLocale, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = currentLocale === 'bn' ? 'en' : 'bn';
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button onClick={switchLocale} className="flex items-center gap-2">
      <span>{dictionary.switchTo}</span>
    </button>
  );
}
```

### Theme Toggle

```tsx
// components/theme/theme-toggle.tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  dictionary: {
    light: string;
    dark: string;
    system: string;
  };
}

export function ThemeToggle({ dictionary }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        {theme === 'dark' ? dictionary.light : dictionary.dark}
      </span>
    </Button>
  );
}
```

---

## Best Practices

### 1. Server vs Client Components

| Use Server Components When | Use Client Components When |
|---------------------------|---------------------------|
| Fetching dictionary data | Interactive elements (buttons, forms) |
| Static page content | Using `useTheme` or `usePathname` |
| SEO-critical content | Animations and transitions |

### 2. Translation Keys

- Use nested objects for organization
- Keep keys descriptive: `navigation.home` not `nav.h`
- Group by feature/page: `hero.title`, `about.description`

### 3. Performance

- Dictionaries are loaded server-side (no client bundle impact)
- Use `generateStaticParams` for static generation
- Theme provider prevents flash of wrong theme

### 4. SEO

- Each locale has unique URLs for better indexing
- Metadata is generated per locale
- `<html lang={locale}>` helps search engines

### 5. Adding New Languages

1. Add locale to `i18n.locales` in config
2. Create new dictionary file (`dictionaries/[locale].json`)
3. Add import in `get-dictionary.ts`
4. Update `generateStaticParams` if needed

---

## File Reference

| File | Purpose |
|------|---------|
| `middleware.ts` | Locale detection & routing |
| `lib/i18n/config.ts` | i18n configuration |
| `lib/i18n/get-dictionary.ts` | Server-side dictionary loader |
| `dictionaries/bn.json` | Bangla translations |
| `dictionaries/en.json` | English translations |
| `components/theme/theme-provider.tsx` | Theme context provider |
| `components/theme/theme-toggle.tsx` | Theme switch button |
| `components/language/language-switcher.tsx` | Language switch button |
| `app/[lang]/layout.tsx` | Root layout with providers |
| `app/globals.css` | Theme CSS variables |

---

## Quick Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Add shadcn/ui component
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add dropdown-menu

# Install i18n dependencies
pnpm add next-themes negotiator @formatjs/intl-localematcher
pnpm add -D @types/negotiator
```
