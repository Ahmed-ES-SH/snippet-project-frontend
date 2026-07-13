import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { LocaleType } from "@/app/hooks/global/useLocale";
import HeroSection from "@/app/components/website/home/HeroSection";
import HeroParallax from "@/app/components/website/home/HeroParallax";
import ScrollReveal from "@/app/components/website/home/ScrollReveal";
import StatStrip from "@/app/components/website/home/StatStrip";
import FeatureGrid from "@/app/components/website/home/FeatureGrid";
import BuiltForSection from "@/app/components/website/home/BuiltForSection";
import HowItWorks from "@/app/components/website/home/HowItWorks";
import CodeShowcaseSection from "@/app/components/website/home/CodeShowcaseSection";
import CtaBand from "@/app/components/website/home/CtaBand";
import Hero from "../components/website/home/HeroSection-v2/Hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "Home") as Record<
    string,
    Record<string, string>
  >;
  const sharedMetaData = getSharedMetadata(
    locale,
    t.hero.headline,
    t.hero.description,
  );

  return {
    title: "SnippetVault | High-Performance Code Library",
    description: t.hero.description,
    ...sharedMetaData,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="pt-16">
      {/*<HeroParallax>
        <HeroSection locale={locale as LocaleType} />
      </HeroParallax>*/}
      <Hero />
      <ScrollReveal>
        <StatStrip locale={locale as LocaleType} />
      </ScrollReveal>
      <ScrollReveal>
        <FeatureGrid locale={locale as LocaleType} />
      </ScrollReveal>
      <ScrollReveal>
        <BuiltForSection locale={locale as LocaleType} />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks locale={locale as LocaleType} />
      </ScrollReveal>
      <ScrollReveal>
        <CodeShowcaseSection locale={locale as LocaleType} />
      </ScrollReveal>
      <ScrollReveal>
        <CtaBand locale={locale as LocaleType} />
      </ScrollReveal>
    </main>
  );
}
