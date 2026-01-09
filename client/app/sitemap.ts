import { i18n } from "@/lib/i18n/config";
import { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sustfitnessclub.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = i18n.locales;

  // Define all static routes
  const routes = [
    "", // home
    "/about",
    "/programs",
    "/trainers",
    "/contact",
    "/gallery",
    "/faq",
    "/login",
    "/register",
    "/members/executive-committee",
    "/members/general",
    "/members/founding",
    "/advisors",
  ];

  // Generate sitemap entries for each route in each locale
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const url = `${siteUrl}/${locale}${route}`;

      // Set priority based on page importance
      let priority = 0.7;
      if (route === "") {
        priority = 1.0; // Homepage highest priority
      } else if (
        route === "/about" ||
        route === "/programs" ||
        route === "/contact"
      ) {
        priority = 0.9; // Main pages high priority
      } else if (route.includes("/members") || route === "/advisors") {
        priority = 0.8; // Member pages medium-high priority
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority,
        alternates: {
          languages: {
            bn: `${siteUrl}/bn${route}`,
            en: `${siteUrl}/en${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
