import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import { ExecutiveCommitteeContent } from './ec-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.executiveCommittee.title,
    description: dict.executiveCommittee.subtitle,
  };
}

export default async function ExecutiveCommitteePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return <ExecutiveCommitteeContent lang={lang} dictionary={dict.executiveCommittee} />;
}
