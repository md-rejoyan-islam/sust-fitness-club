"use client";

import type { Locale } from "@/lib/i18n/config";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatedFadeIn } from "@/components/ui/page-animations";

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
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:pt-32 py-20 px-4 relative overflow-hidden bg-white dark:bg-[#0d1117]">
      {/* Grid pattern with fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#2ecc71]/5 to-[#1e3a5f]/5 dark:from-[#5ce1e6]/5 dark:to-[#2ecc71]/5 rounded-full blur-3xl" />

      <AnimatedFadeIn>
      <div className="relative w-full max-w-md z-10">
        {/* Card with dashed border */}
        <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] p-8 sm:p-10 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
              <span className="w-1.5 h-1.5 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn" ? "স্বাগতম" : "Welcome Back"}
              </span>
            </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-12 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#2ecc71] focus:ring-[#2ecc71]"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {dictionary.rememberMe}
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-[#2ecc71] dark:text-[#5ce1e6] hover:underline font-medium"
              >
                {dictionary.forgotPassword}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] font-semibold shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30 hover:shadow-xl hover:shadow-[#2ecc71]/40 dark:hover:shadow-[#5ce1e6]/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {dictionary.submit}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px border-t border-dashed border-gray-300 dark:border-slate-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {dictionary.noAccount}
            </span>
            <div className="flex-1 h-px border-t border-dashed border-gray-300 dark:border-slate-600" />
          </div>

          {/* Sign Up Link */}
          <Link href={`/${lang}/register`}>
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-transparent text-gray-700 dark:text-gray-300 font-semibold hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-all duration-300"
            >
              {dictionary.signUp}
            </button>
          </Link>
        </div>
      </div>
      </AnimatedFadeIn>
    </div>
  );
}
