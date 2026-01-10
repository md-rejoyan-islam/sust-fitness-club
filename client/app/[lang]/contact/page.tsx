import {
  AnimatedPageCards,
  AnimatedPageHero,
  AnimatedPageSection,
} from "@/components/ui/page-animations";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

// Facebook icon component (lucide Facebook is deprecated)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
  };
}

// Simple Section Divider - clean gradient transition
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`h-16 md:h-24 ${className}`} />
);

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const contactInfo =
    lang === "bn"
      ? [
          {
            title: "ইমেইল",
            value: "fitnessclubsust@gmail.com",
            link: "mailto:fitnessclubsust@gmail.com",
            Icon: Mail,
          },
          {
            title: "ফোন",
            value: "+৮৮০১৬০৪-০৪৭০৯৭",
            link: "tel+৮৮০১৬০৪০৪৭০৯৭",
            Icon: Phone,
          },
          {
            title: "ঠিকানা",
            value: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, সিলেট",
            link: "https://maps.google.com/?q=Shahjalal+University+of+Science+and+Technology",
            Icon: MapPin,
          },
        ]
      : [
          {
            title: "Email",
            value: "fitnessclubsust@gmail.com",
            link: "mailto:fitnessclubsust@gmail.com",
            Icon: Mail,
          },
          {
            title: "Phone",
            value: "+8801604-047097",
            link: "tel:+8801604047097",
            Icon: Phone,
          },
          {
            title: "Address",
            value: "Shahjalal University of Science & Technology, Sylhet",
            link: "https://maps.google.com/?q=Shahjalal+University+of+Science+and+Technology",
            Icon: MapPin,
          },
        ];

  const sessionInfo =
    lang === "bn"
      ? {
          title: "সাপ্তাহিক সেশন",
          day: "প্রতি শুক্রবার",
          time: "সকাল ৫:৪৫",
          location: "বাস্কেটবল গ্রাউন্ড, সাস্ট",
        }
      : {
          title: "Weekly Session",
          day: "Every Friday",
          time: "5:45 AM",
          location: "Basketball Ground, SUST",
        };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/sustfitnessclub",
      Icon: FacebookIcon,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - White Background */}
      <section className="relative pt-28 sm:pt-32 pb-10 px-4 bg-white dark:bg-[#0d1117]">
        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,black_30%,transparent_90%)]" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#2ecc71]/30 to-[#27ae60]/10 rounded-full blur-3xl animate-wave-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-[#1e3a5f]/20 to-[#5ce1e6]/10 dark:from-[#5ce1e6]/15 dark:to-[#2ecc71]/10 rounded-full blur-3xl animate-wave-reverse" />

        <AnimatedPageHero>
          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-linear-to-r from-[#2ecc71]/10 to-[#1e3a5f]/10 dark:from-[#5ce1e6]/20 dark:to-[#2ecc71]/10 backdrop-blur-sm border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30">
              <span className="w-2 h-2 bg-[#2ecc71] dark:bg-[#5ce1e6] rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#27ae60] dark:text-[#5ce1e6]">
                {lang === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Get in Touch"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-linear-to-r from-[#1e3a5f] via-[#2ecc71] to-[#1e3a5f] dark:from-[#5ce1e6] dark:via-[#2ecc71] dark:to-[#5ce1e6] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                {dict.contact.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {lang === "bn"
                ? "যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার কথা শুনতে আগ্রহী!"
                : "Contact us for any questions, suggestions or collaboration. We are eager to hear from you!"}
            </p>

            {/* Contact badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-linear-to-r from-white to-gray-50 dark:from-[#1a2332] dark:to-[#0d1117] border border-gray-200 dark:border-[#2d3f50] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center shadow-lg shadow-[#2ecc71]/30 dark:shadow-[#5ce1e6]/30">
                <MessageCircle className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  {lang === "bn" ? "সোশ্যাল মিডিয়া" : "Social Media"}
                </span>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  {lang === "bn" ? "ফেসবুকে যুক্ত হন" : "Connect on Facebook"}
                </span>
              </div>
            </div>
          </div>
        </AnimatedPageHero>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Contact Info Cards Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedPageSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "যোগাযোগের তথ্য" : "Contact Information"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {dict.contact.info.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {lang === "bn"
                  ? "বিভিন্ন মাধ্যমে আমাদের সাথে যোগাযোগ করুন"
                  : "Reach out to us through various channels"}
              </p>
            </div>
          </AnimatedPageSection>

          <AnimatedPageCards className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="relative pt-3">
                {/* Dashed border outer container for each card */}
                <div className="relative p-4 h-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-600 bg-white dark:bg-[#0d1117]/30">
                  {/* Title label - floating centered green pill badge */}
                  <div className="absolute w-fit -top-3.5 left-0 right-0 mx-auto px-3 py-0.5 bg-[#2ecc7072] dark:bg-[#0d1117] flex gap-2 items-center rounded-md">
                    <span className="font-semibold">{info.title}</span>
                  </div>

                  {/* Inner card with content */}
                  <div className="text-center h-full p-5 rounded-xl bg-white dark:bg-[#161b22] dark:border-[#30363d]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 mb-4">
                      <info.Icon className="w-6 h-6 text-[#2ecc71] dark:text-[#5ce1e6]" />
                    </div>
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block text-gray-600 text-lg dark:text-gray-400 hover:text-[#2ecc71] dark:hover:text-[#5ce1e6] transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedPageCards>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-white dark:from-[#0d1117] dark:to-[#0d1117]" />

      {/* Weekly Session Info */}
      <section className="relative py-4 px-4 bg-white dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="py-8 px-4 sm:p-8 md:p-12 rounded-3xl bg-gray-50 dark:bg-[#161b22] border border-gray-100 dark:border-[#2d3f50]">
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                {lang === "bn" ? "সেশন তথ্য" : "Session Info"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {sessionInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {lang === "bn"
                  ? "প্রতি সপ্তাহে আমাদের সাথে যোগ দিন"
                  : "Join us every week"}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "দিন" : "Day"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {sessionInfo.day}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "সময়" : "Time"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {sessionInfo.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#2d3f50]">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white dark:text-[#0d1117]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {lang === "bn" ? "স্থান" : "Location"}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 dark:text-white">
                      {sessionInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Join us badge */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117] font-bold text-sm">
                  <Users className="w-4 h-4" />
                  {lang === "bn" ? "সবার জন্য উন্মুক্ত" : "Open for Everyone"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-white to-gray-50 dark:from-[#0d1117] dark:to-[#161b22]" />

      {/* Contact Form & Social Section */}
      <section className="relative py-4 px-4 bg-gray-50 dark:bg-[#161b22]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                  {lang === "bn" ? "বার্তা" : "Message"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {lang === "bn" ? "বার্তা পাঠান" : "Send a Message"}
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#0d1117] dark:border-[#2d3f50]">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {dict.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] px-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                      placeholder={dict.contact.form.name}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {dict.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] px-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                      placeholder={dict.contact.form.email}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {dict.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full resize-none rounded-xl border border-gray-300 dark:border-[#2d3f50] bg-white dark:bg-[#0d1117] px-4 py-3 text-sm text-gray-900 dark:text-white transition-colors focus:border-[#2ecc71] dark:focus:border-[#5ce1e6] focus:outline-none"
                      placeholder={dict.contact.form.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                  >
                    <Send className="h-4 w-4" />
                    {dict.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Social & Map */}
            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 text-[#27ae60] dark:text-[#5ce1e6] text-sm font-medium mb-4">
                    {lang === "bn" ? "সোশ্যাল মিডিয়া" : "Social Media"}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {lang === "bn" ? "আমাদের অনুসরণ করুন" : "Follow Us"}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-2xl border bg-white dark:bg-[#0d1117] dark:border-[#2d3f50] flex items-center gap-4 hover:shadow-lg hover:border-[#2ecc71] dark:hover:border-[#5ce1e6] transition-all group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/10 flex items-center justify-center group-hover:bg-[#2ecc71] dark:group-hover:bg-[#5ce1e6] transition-colors">
                        <social.Icon className="w-7 h-7 text-[#2ecc71] dark:text-[#5ce1e6] group-hover:text-white dark:group-hover:text-[#0d1117] transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lang === "bn" ? "আমাদের পেজে যান" : "Visit our page"}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="text-center lg:text-left mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lang === "bn" ? "আমাদের অবস্থান" : "Our Location"}
                  </h3>
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=Shahjalal+University+of+Science+and+Technology,+Sylhet,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={
                      lang === "bn"
                        ? "সাস্ট অবস্থান মানচিত্র"
                        : "SUST Location Map"
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="bg-linear-to-b from-gray-50 to-slate-100/50 dark:from-[#161b22] dark:to-[#0d1117]" />

      {/* Commitment Section */}
      <section className="relative py-4 pb-16 px-4 bg-slate-100/50 dark:bg-[#0d1117]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#161b22]">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-[#2ecc71] to-[#27ae60] dark:from-[#5ce1e6] dark:to-[#4fd1d9] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white dark:text-[#0d1117]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {lang === "bn" ? "দ্রুত প্রতিক্রিয়া" : "Quick Response"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {lang === "bn"
                    ? "আমরা আপনার সকল প্রশ্ন ও পরামর্শের যত দ্রুত সম্ভব উত্তর দেওয়ার চেষ্টা করি। ফেসবুক পেজে মেসেজ করলে দ্রুত রিপ্লাই পাবেন।"
                    : "We try to respond to all your questions and suggestions as quickly as possible. Message us on Facebook for faster replies."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
