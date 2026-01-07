import 'server-only';
import type { Locale } from './config';
import { isValidLocale, i18n } from './config';

const dictionaries = {
  bn: () => import('@/dictionaries/bn.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale | string) => {
  // Validate locale and fallback to default if invalid
  const validLocale = isValidLocale(locale) ? locale : i18n.defaultLocale;
  return dictionaries[validLocale]();
};
