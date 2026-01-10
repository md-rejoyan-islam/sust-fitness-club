import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base URL for the site
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sustfitnessclub.org";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2ecc71" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const siteName = lang === "bn" ? "সাস্ট ফিটনেস ক্লাব" : "SUST Fitness Club";
  const siteDescription =
    lang === "bn"
      ? "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের অফিসিয়াল ফিটনেস ক্লাব। বিনামূল্যে ফিটনেস প্রশিক্ষণ, ম্যারাথন ইভেন্ট এবং স্বাস্থ্য সচেতনতা কার্যক্রম।"
      : "Official fitness club of Shahjalal University of Science and Technology. Free fitness training, marathon events and health awareness programs.";

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.title}`,
    },
    description: dict.metadata.description,
    keywords:
      lang === "bn"
        ? [
            "সাস্ট ফিটনেস ক্লাব",
            "ফিটনেস",
            "জিম",
            "ম্যারাথন",
            "সিলেট",
            "শাহজালাল বিশ্ববিদ্যালয়",
            "স্বাস্থ্য",
            "ব্যায়াম",
            "যোগব্যায়াম",
            "রানিং",
          ]
        : [
            "SUST Fitness Club",
            "fitness",
            "gym",
            "marathon",
            "Sylhet",
            "SUST",
            "health",
            "exercise",
            "yoga",
            "running",
            "university fitness",
          ],
    authors: [{ name: "SUST Fitness Club" }],
    creator: "SUST Fitness Club",
    publisher: "SUST Fitness Club",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        bn: `${siteUrl}/bn`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "bn" ? "bn_BD" : "en_US",
      url: `${siteUrl}/${lang}`,
      siteName: siteName,
      title: dict.metadata.title,
      description: siteDescription,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: siteDescription,
      images: [`${siteUrl}/og-image.png`],
      creator: "@sustfitnessclub",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    category: "fitness",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam as Locale) || i18n.defaultLocale || "en";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header
              locale={lang}
              dictionary={{
                navigation: dict.navigation,
                theme: dict.theme,
                language: dict.language,
              }}
            />
            <main className="flex-1">{children}</main>
            <Footer
              locale={lang}
              dictionary={{
                navigation: dict.navigation,
                footer: dict.footer,
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
