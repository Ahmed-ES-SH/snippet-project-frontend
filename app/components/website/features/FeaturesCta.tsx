import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface FeaturesCtaProps {
  locale: LocaleType;
}

export default async function FeaturesCta({ locale }: FeaturesCtaProps) {
  const t = getTranslations(locale, "Features") as Record<string, Record<string, string>>;

  return (
    <section className="px-gutter md:px-margin-desktop py-xl border-t border-outline-variant">
      <div className="bg-surface-container rounded-xl p-xl max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl text-center md:text-start">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            {t.cta.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            {t.cta.description}
          </p>
        </div>
        <div className="relative z-10">
          <button className="bg-primary-container text-on-primary-container px-xl h-14 rounded font-bold text-headline-md hover:brightness-110 transition-all focus:outline-2 focus:outline-solar-orange focus:outline-offset-2 active:scale-95">
            {t.cta.button}
          </button>
          <p className="text-body-sm text-center text-outline mt-sm">
            {t.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
