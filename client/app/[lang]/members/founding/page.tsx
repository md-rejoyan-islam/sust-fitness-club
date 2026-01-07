import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import { FoundingMembersContent } from './founding-members-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.foundingMembers.title,
    description: dict.foundingMembers.subtitle,
  };
}

export default async function FoundingMembersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return <FoundingMembersContent lang={lang} dictionary={dict.foundingMembers} />;
}
