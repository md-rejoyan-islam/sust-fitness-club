"use client";

import { LanguageSwitcher } from "@/components/language/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { Locale } from "@/lib/i18n/config";
import {
  Award,
  ChevronDown,
  Globe,
  GraduationCap,
  Menu,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  locale: Locale;
  dictionary: {
    navigation: {
      home: string;
      about: string;
      programs: string;
      trainers: string;
      gallery: string;
      faq: string;
      contact: string;
      joinNow: string;
      members: string;
      executiveCommittee: string;
      generalMembers: string;
      foundingMembers: string;
      advisors: string;
    };
    theme: {
      light: string;
      dark: string;
      toggle: string;
    };
    language: {
      switchTo: string;
      current: string;
    };
  };
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: dictionary.navigation.home },
    { href: `/${locale}/about`, label: dictionary.navigation.about },
    { href: `/${locale}/programs`, label: dictionary.navigation.programs },
    { href: `/${locale}/gallery`, label: dictionary.navigation.gallery },
    { href: `/${locale}/contact`, label: dictionary.navigation.contact },
  ];

  const memberLinks = [
    {
      href: `/${locale}/members/executive-committee`,
      label: dictionary.navigation.executiveCommittee,
      icon: UserCheck,
    },
    {
      href: `/${locale}/members/general`,
      label: dictionary.navigation.generalMembers,
      icon: Users,
    },
    {
      href: `/${locale}/members/founding`,
      label: dictionary.navigation.foundingMembers,
      icon: Award,
    },
    {
      href: `/${locale}/advisors`,
      label: dictionary.navigation.advisors,
      icon: GraduationCap,
    },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  const isMembersActive = () => {
    return pathname.includes("/members") || pathname.includes("/advisors");
  };

  return (
    <nav className="fixed top-0 backdrop-blur-[2px] left-0 right-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="SUST Fitness Logo"
              width={400}
              height={400}
              className="h-20 w-full"
            />
            {/* <div className="transition-transform duration-300 group-hover:rotate-12">
              <Dumbbell className="w-8 h-8 text-[#1e3a5f] dark:text-[#2ecc71]" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {locale === "bn" ? "সাস্ট ফিটনেস" : "SUST Fitness"}
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#1e3a5f] dark:bg-[#2ecc71] rounded-full" />
                )}
              </Link>
            ))}

            {/* Members Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsMembersOpen(true)}
              onMouseLeave={() => setIsMembersOpen(false)}
            >
              <button
                className={`relative py-2 flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  isMembersActive() ? "text-gray-900 dark:text-white" : ""
                }`}
              >
                {dictionary.navigation.members}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMembersOpen ? "rotate-180" : ""
                  }`}
                />
                {isMembersActive() && (
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#1e3a5f] dark:bg-[#2ecc71] rounded-full" />
                )}
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  isMembersOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="w-64 bg-white dark:bg-[#1a2332] rounded-2xl shadow-xl border border-gray-200 dark:border-[#2d3f50] overflow-hidden">
                  <div className="p-2 space-y-1">
                    {memberLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive(link.href)
                              ? "bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#1e3a5f] dark:text-[#5ce1e6]"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2d3f50]"
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                              isActive(link.href)
                                ? "bg-[#2ecc71]/20 dark:bg-[#5ce1e6]/20"
                                : "bg-gray-100 dark:bg-[#2d3f50]"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isActive(link.href)
                                  ? "text-[#2ecc71] dark:text-[#5ce1e6]"
                                  : "text-gray-500 dark:text-gray-400"
                              }`}
                            />
                          </div>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle dictionary={dictionary.theme} />

            {/* Language Toggle */}
            <LanguageSwitcher
              currentLocale={locale}
              dictionary={dictionary.language}
            />

            {/* Login Button */}
            <Link
              href={`/${locale}/login`}
              className="text-sm py-2 px-5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-[#1e3a5f] hover:border-[#1e3a5f] hover:text-white dark:hover:bg-[#5ce1e6] dark:hover:border-[#5ce1e6] dark:hover:text-[#1a2332] transition-colors"
            >
              {locale === "bn" ? "লগইন" : "Login"}
            </Link>

            {/* Register Button */}
            <Link
              href={`/${locale}/register`}
              className="text-sm py-2 px-4 rounded-xl bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#1a2332] font-medium hover:bg-[#27ae60] dark:hover:bg-[#4bcbcf] transition-colors"
            >
              {locale === "bn" ? "রেজিস্টার" : "Register"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle dictionary={dictionary.theme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t overflow-hidden bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Members Section */}
            <div className="border-t border-gray-200 dark:border-[#2d3f50] pt-2 mt-2">
              <p className="px-4 py-1 text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                {dictionary.navigation.members}
              </p>
              {memberLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 py-2 px-4 rounded-xl transition-colors ${
                      isActive(link.href)
                        ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between py-2 px-4 border-t border-gray-200 dark:border-[#2d3f50] mt-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {locale === "bn" ? "ভাষা" : "Language"}
              </span>
              <LanguageSwitcher
                currentLocale={locale}
                dictionary={dictionary.language}
              />
            </div>

            <div className="pt-2 flex gap-3">
              <Link
                href={`/${locale}/login`}
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center py-3 px-4 rounded-xl border border-[#1e3a5f] dark:border-[#1e3a5f] text-gray-700 dark:text-gray-300 font-medium hover:bg-[#1e3a5f] hover:border-[#1e3a5f] hover:text-white dark:hover:bg-[#2ecc71] dark:hover:border-[#5ce1e6] dark:hover:text-[#1a2332] transition-colors"
              >
                {locale === "bn" ? "লগইন" : "Login"}
              </Link>
              <Link
                href={`/${locale}/register`}
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center py-3 px-4 rounded-xl bg-[#2ecc71]  text-white dark:text-[#1a2332] font-medium hover:bg-[#27ae60] dark:hover:bg-[#2ecc71] transition-colors"
              >
                {locale === "bn" ? "রেজিস্টার" : "Register"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
