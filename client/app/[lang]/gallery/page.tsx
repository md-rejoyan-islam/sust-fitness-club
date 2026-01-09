import type { Locale } from "@/lib/i18n/config";
import type { Metadata } from "next";
import { GalleryContent } from "./gallery-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sustfitnessclub.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  const title = lang === "bn" ? "গ্যালারি" : "Gallery";
  const description = lang === "bn"
    ? "সাস্ট ফিটনেস ক্লাবের ম্যারাথন, ফিটনেস সেশন এবং বিভিন্ন ইভেন্টের ছবি ও ভিডিও দেখুন।"
    : "View photos and videos of SUST Fitness Club marathons, fitness sessions and various events.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${lang === "bn" ? "সাস্ট ফিটনেস ক্লাব" : "SUST Fitness Club"}`,
      description,
      url: `${siteUrl}/${lang}/gallery`,
      images: [
        {
          url: `${siteUrl}/og-gallery.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${lang === "bn" ? "সাস্ট ফিটনেস ক্লাব" : "SUST Fitness Club"}`,
      description,
      images: [`${siteUrl}/og-gallery.jpg`],
    },
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return <GalleryContent lang={lang} />;
}