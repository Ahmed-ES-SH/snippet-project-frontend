import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";
import CodeEditorMockup from "./CodeEditorMockup";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";
import { FaPaperPlane } from "react-icons/fa6";
import { SlDocs } from "react-icons/sl";

interface HeroSectionProps {
  locale: LocaleType;
}

export default async function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale, "Home") as Record<
    string,
    Record<string, string>
  >;

  return (
    <section className="relative min-h-[600px] lg:min-h-[870px] flex items-center px-gutter md:px-margin-desktop py-xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,92,0,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center w-full max-w-7xl mx-auto">
        <div>
          <h1
            className="font-display-lg text-display-lg text-on-surface mb-md animate-fade-in"
            style={{ textWrap: "balance", animationDelay: "0ms" }}
          >
            {t.hero.headline}{" "}
            <span className="text-solar-orange">
              {t.hero.headlineHighlight}
            </span>
          </h1>
          <p
            className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl animate-fade-in"
            style={{ textWrap: "pretty", animationDelay: "100ms" }}
          >
            {t.hero.description}
          </p>
          <div
            className="flex flex-col  gap-md animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <PrimaryButton
              label={t.hero.createAccount}
              className="text-white"
            />
            <SecondaryButton label={t.hero.viewDocs} icon={SlDocs} />
          </div>
          <div
            className="mt-lg flex items-center gap-md animate-fade-in"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
          <CodeEditorMockup locale={locale} />
        </div>
      </div>
    </section>
  );
}
