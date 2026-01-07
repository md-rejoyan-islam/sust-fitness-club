'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  CreditCard,
  Building,
  Dumbbell,
  ArrowRight,
  Check,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

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
  'CSE', 'EEE', 'CEE', 'IPE', 'PME', 'FET', 'SWE', 'BMB', 'GEE',
  'PHY', 'CHE', 'MAT', 'STA', 'ECO', 'BBA', 'SOC', 'ARC', 'ANP', 'ENG', 'BNG'
];

export function RegisterForm({ lang, dictionary }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    department: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
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

      <div className="relative w-full max-w-lg z-10">
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
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                  placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your full name'}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none appearance-none cursor-pointer"
                    required
                  >
                    <option value="">{lang === 'bn' ? 'বাছাই করুন' : 'Select'}</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
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
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        strength >= level
                          ? strength <= 1
                            ? 'bg-red-400'
                            : strength <= 2
                            ? 'bg-yellow-400'
                            : strength <= 3
                            ? 'bg-blue-400'
                            : 'bg-[#2ecc71]'
                          : 'bg-gray-200 dark:bg-neutral-700'
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
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] pl-12 pr-12 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {lang === 'bn' ? 'পাসওয়ার্ড মিলছে না' : 'Passwords do not match'}
                </p>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <p className="mt-1 text-sm text-[#2ecc71] flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  {lang === 'bn' ? 'পাসওয়ার্ড মিলেছে' : 'Passwords match'}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
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
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
              >
                {dictionary.submit}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <span className="text-gray-600 dark:text-gray-400">
              {dictionary.hasAccount}{' '}
            </span>
            <Link
              href={`/${lang}/login`}
              className="text-[#1e3a5f] dark:text-[#5ce1e6] font-medium hover:underline"
            >
              {dictionary.signIn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
