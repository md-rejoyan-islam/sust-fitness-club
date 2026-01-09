"use client";

import { AnimatedFadeIn } from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import {
  ArrowRight,
  Building,
  Check,
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface RegisterFormProps {
  lang: Locale;
  dictionary: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    studentId: string;
    department: string;
    password: string;
    confirmPassword: string;
    terms: string;
    submit: string;
    hasAccount: string;
    signIn: string;
  };
}

const departments = [
  "CSE",
  "EEE",
  "CEE",
  "IPE",
  "PME",
  "FET",
  "SWE",
  "BMB",
  "GEE",
  "PHY",
  "CHE",
  "MAT",
  "STA",
  "ECO",
  "BBA",
  "SOC",
  "ARC",
  "ANP",
  "ENG",
  "BNG",
];

export function RegisterForm({ lang, dictionary }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  const passwordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = passwordStrength(formData.password);

  return (
    <div className="min-h-screen flex items-center justify-center md:pt-32 py-20 px-4 relative overflow-hidden bg-white dark:bg-[#0d1117]">
      {/* Grid pattern with fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-[#2ecc71]/5 to-[#1e3a5f]/5 dark:from-[#5ce1e6]/5 dark:to-[#2ecc71]/5 rounded-full blur-3xl" />

      <AnimatedFadeIn>
        <div className="relative w-full max-w-lg z-10">
          {/* Card with dashed border */}
          <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#161b22] p-8 sm:p-10 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
                <span className="w-1.5 h-1.5 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                  {lang === "bn" ? "নতুন সদস্য" : "New Member"}
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {dictionary.fullName}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                    placeholder={lang === "bn" ? "আপনার নাম" : "Your full name"}
                    required
                  />
                </div>
              </div>

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

              {/* Student ID & Department */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {dictionary.studentId}
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <input
                      type="text"
                      value={formData.studentId}
                      onChange={(e) =>
                        setFormData({ ...formData, studentId: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                      placeholder="2020331001"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {dictionary.department}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none appearance-none cursor-pointer"
                      required
                    >
                      <option value="">
                        {lang === "bn" ? "বাছাই করুন" : "Select"}
                      </option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
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
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          strength >= level
                            ? strength <= 1
                              ? "bg-red-400"
                              : strength <= 2
                              ? "bg-yellow-400"
                              : strength <= 3
                              ? "bg-blue-400"
                              : "bg-[#2ecc71]"
                            : "bg-gray-200 dark:bg-neutral-700"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {dictionary.confirmPassword}
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-12 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {lang === "bn"
                        ? "পাসওয়ার্ড মিলছে না"
                        : "Passwords do not match"}
                    </p>
                  )}
                {formData.confirmPassword &&
                  formData.password === formData.confirmPassword && (
                    <p className="mt-1 text-sm text-[#2ecc71] flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      {lang === "bn" ? "পাসওয়ার্ড মিলেছে" : "Passwords match"}
                    </p>
                  )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.terms}
                    onChange={(e) =>
                      setFormData({ ...formData, terms: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#2ecc71] focus:ring-[#2ecc71]"
                    required
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {dictionary.terms}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-linear-to-r from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] text-white dark:text-[#0d1117] font-semibold shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30 hover:shadow-xl hover:shadow-[#2ecc71]/40 dark:hover:shadow-[#5ce1e6]/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {dictionary.submit}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 pt-6 border-t border-dashed border-gray-300 dark:border-slate-600 text-center">
              <span className="text-gray-600 dark:text-gray-400">
                {dictionary.hasAccount}{" "}
              </span>
              <Link
                href={`/${lang}/login`}
                className="text-[#2ecc71] dark:text-[#5ce1e6] font-medium hover:underline"
              >
                {dictionary.signIn}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}
