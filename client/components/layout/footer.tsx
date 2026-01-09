import type { Locale } from "@/lib/i18n/config";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
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
    };
    footer: {
      description: string;
      quickLinks: string;
      contact: string;
      followUs: string;
      rights: string;
      address: string;
      email: string;
      phone: string;
    };
  };
}

export function Footer({ locale, dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}/faq`, label: dictionary.navigation.faq },
    { href: `/${locale}/about`, label: dictionary.navigation.about },
    { href: `/${locale}/programs`, label: dictionary.navigation.programs },
    { href: `/${locale}/contact`, label: dictionary.navigation.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-900/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="flex w-full items-center gap-2 mb-4"
            >
              <Image
                src="/logo.png"
                alt="SUST Fitness Logo"
                width={100}
                height={100}
                className="h-24  w-fit"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed  -mt-3">
              {dictionary.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {dictionary.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {dictionary.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#1e3a5f] dark:text-[#2ecc71]" />
                <a
                  href="https://maps.google.com/?q=Shahjalal+University+of+Science+and+Technology+Sylhet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1e3a5f] dark:hover:text-[#2ecc71] transition-colors"
                >
                  {dictionary.footer.address}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 shrink-0 text-[#1e3a5f] dark:text-[#2ecc71]" />
                <a
                  href="mailto:fitness@sust.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1e3a5f] dark:hover:text-[#2ecc71] transition-colors"
                >
                  {dictionary.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 shrink-0 text-[#1e3a5f] dark:text-[#2ecc71]" />
                <a
                  href="tel:+8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1e3a5f] dark:hover:text-[#2ecc71] transition-colors"
                >
                  {dictionary.footer.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {dictionary.footer.followUs}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#2ecc71]/10 flex items-center justify-center text-[#1e3a5f] dark:text-[#2ecc71] hover:bg-[#1e3a5f] dark:hover:bg-[#2ecc71] hover:text-white dark:hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} SUST Fitness Club. {dictionary.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
