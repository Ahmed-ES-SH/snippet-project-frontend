import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface FeaturesHeroProps {
  locale: LocaleType;
}

export default async function FeaturesHero({ locale }: FeaturesHeroProps) {
  const t = getTranslations(locale, "Features") as Record<
    string,
    Record<string, string>
  >;

  return (
    <section className="relative min-h-[400px] flex items-center justify-center px-gutter md:px-margin-desktop py-xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,92,0,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h1
          className="font-display-lg text-display-lg text-on-surface mb-md animate-fade-in"
          style={{ textWrap: "balance" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto animate-fade-in"
          style={{ textWrap: "pretty", animationDelay: "100ms" }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
