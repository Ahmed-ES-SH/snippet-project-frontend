import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface BuiltForSectionProps {
  locale: LocaleType;
}

export default async function BuiltForSection({ locale }: BuiltForSectionProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  const personas = [
    {
      icon: "FaLaptopCode",
      title: t.builtFor.persona1Title,
      description: t.builtFor.persona1Description,
      pain: t.builtFor.persona1Pain,
    },
    {
      icon: "FaGithub",
      title: t.builtFor.persona2Title,
      description: t.builtFor.persona2Description,
      pain: t.builtFor.persona2Pain,
    },
    {
      icon: "FaUsersCog",
      title: t.builtFor.persona3Title,
      description: t.builtFor.persona3Description,
      pain: t.builtFor.persona3Pain,
    },
  ];

  return (
    <section className="px-margin-desktop py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            {t.builtFor.title}
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            {t.builtFor.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
          {personas.map((persona) => {
            const Icon = getIconComponent(persona.icon);
            return (
              <div
                key={persona.title}
                className="bg-surface-low border border-outline-variant p-lg rounded-lg hover:border-solar-orange/50 transition-colors group"
              >
                <div className="w-10 h-10 bg-surface-container rounded flex items-center justify-center mb-md border border-outline-variant group-hover:border-solar-orange transition-colors">
                  <Icon className="text-solar-orange" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                  {persona.title}
                </h3>
                <p className="text-on-surface-variant text-body-sm mb-md">
                  {persona.description}
                </p>
                <p className="text-outline text-body-sm line-through">
                  {persona.pain}
                </p>
              </div>
            );
          })}
        </div>

        {(() => {
          const Arrow = getIconComponent("FaArrowRight");
          return (
            <div className="bg-surface-container rounded-lg px-lg py-md border border-outline-variant flex flex-col md:flex-row items-center justify-center gap-md md:gap-lg">
              <span className="font-code-md text-code-md text-on-surface-variant">
                {t.builtFor.problemStrip1}
              </span>
              <Arrow className="text-solar-orange text-body-sm hidden md:block" />
              <span className="font-code-md text-code-md text-on-surface-variant">
                {t.builtFor.problemStrip2}
              </span>
              <Arrow className="text-solar-orange text-body-sm hidden md:block" />
              <span className="font-code-md text-code-md text-on-surface-variant">
                {t.builtFor.problemStrip3}
              </span>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
