import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { LocaleType } from "@/app/hooks/global/useLocale";
import FeaturesHero from "@/app/components/website/features/FeaturesHero";
import SearchFeature from "@/app/components/website/features/SearchFeature";
import TaggingFeature from "@/app/components/website/features/TaggingFeature";
import SharingFeature from "@/app/components/website/features/SharingFeature";
import EditorFeature from "@/app/components/website/features/EditorFeature";
import FeaturesCta from "@/app/components/website/features/FeaturesCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "Features") as Record<string, Record<string, string>>;
  const sharedMetaData = getSharedMetadata(locale, t.hero.title, t.hero.subtitle);

  return {
    title: "Features | SnippetVault",
    description: t.hero.subtitle,
    ...sharedMetaData,
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="pt-16">
      <FeaturesHero locale={locale as LocaleType} />
      <SearchFeature locale={locale as LocaleType} />
      <TaggingFeature locale={locale as LocaleType} />
      <SharingFeature locale={locale as LocaleType} />
      <EditorFeature locale={locale as LocaleType} />
      <FeaturesCta locale={locale as LocaleType} />
    </main>
  );
}
