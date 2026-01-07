'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, Dumbbell, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

interface LoginFormProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    email: string;
    password: string;
    rememberMe: string;
    forgotPassword: string;
    submit: string;
    noAccount: string;
    signUp: string;
  };
}

export function LoginForm({ lang, dictionary }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #171717 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md z-10">
        <div className="card p-8 sm:p-10 dark:bg-[#71e8de10] dark:border-[#2d3f50]">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href={`/${lang}`} className="inline-flex items-center gap-2 mb-6 group">
              <div className="transition-transform duration-300 group-hover:rotate-12">
                <Dumbbell className="w-10 h-10 text-[#1e3a5f] dark:text-[#2ecc71]" />
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {dictionary.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {dictionary.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {dictionary.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {dictionary.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-12 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#2ecc71] focus:ring-[#2ecc71]"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {dictionary.rememberMe}
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-[#1e3a5f] dark:text-[#5ce1e6] hover:underline"
              >
                {dictionary.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
            >
              {dictionary.submit}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-700" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {dictionary.noAccount}
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-700" />
          </div>

          {/* Sign Up Link */}
          <Link href={`/${lang}/register`}>
            <button
              type="button"
              className="w-full btn-secondary"
            >
              {dictionary.signUp}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
