import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface HowItWorksProps {
  locale: LocaleType;
}

export default async function HowItWorks({ locale }: HowItWorksProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  const steps = [
    { number: t.workflow.step1Number, title: t.workflow.step1Title, description: t.workflow.step1Description },
    { number: t.workflow.step2Number, title: t.workflow.step2Title, description: t.workflow.step2Description },
    { number: t.workflow.step3Number, title: t.workflow.step3Title, description: t.workflow.step3Description },
  ];

  return (
    <section className="px-margin-desktop py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {t.workflow.title}
          </h2>
          <div className="h-px flex-grow mx-xl bg-outline-variant hidden md:block" />
          <span className="font-code-md text-code-md text-outline uppercase tracking-widest">
            {t.workflow.stepsLabel}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant -z-10" />
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start bg-surface-lowest md:bg-transparent p-md rounded-lg md:p-0"
            >
              <div className="font-display-lg text-display-lg text-outline leading-none mb-md border-b-2 border-solar-orange pb-2">
                {step.number}
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-sm">
                {step.title}
              </h4>
              <p className="text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
