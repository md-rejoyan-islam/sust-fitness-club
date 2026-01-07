import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{dict.contact.title}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="card p-8 dark:bg-[#71e8de10] dark:border-[#2d3f50]">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {lang === 'bn' ? 'বার্তা পাঠান' : 'Send a Message'}
              </h2>
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

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {dict.contact.info.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {lang === 'bn'
                    ? 'যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন'
                    : 'Contact us for any questions'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="card p-6 flex items-start gap-4 dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {dict.contact.info.address}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {dict.footer.address}
                    </p>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4 dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {dict.contact.info.email}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {dict.footer.email}
                    </p>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4 dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {dict.contact.info.phone}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {dict.footer.phone}
                    </p>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4 dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-[#27ae60] dark:text-[#5ce1e6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {lang === 'bn' ? 'কাজের সময়' : 'Working Hours'}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {lang === 'bn'
                        ? 'শনি - বুধ: সকাল ৬:০০ - রাত ১০:০০'
                        : 'Sat - Wed: 6:00 AM - 10:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'আমাদের অবস্থান' : 'Our Location'}
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-[#2d3f50] shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Shahjalal+University+of+Science+and+Technology,+Sylhet,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={lang === 'bn' ? 'সাস্ট অবস্থান মানচিত্র' : 'SUST Location Map'}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
