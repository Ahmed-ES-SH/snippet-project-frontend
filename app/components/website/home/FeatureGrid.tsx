import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface FeatureGridProps {
  locale: LocaleType;
}

export default async function FeatureGrid({ locale }: FeatureGridProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  const features = [
    { icon: "FaSearch", title: t.features.searchTitle, description: t.features.searchDescription },
    { icon: "FaTag", title: t.features.taggingTitle, description: t.features.taggingDescription },
    { icon: "FaShareAlt", title: t.features.sharingTitle, description: t.features.sharingDescription },
    { icon: "FaCode", title: t.features.editorTitle, description: t.features.editorDescription },
  ];

  return (
    <section className="px-margin-desktop py-xl max-w-7xl mx-auto">
      <div className="text-center mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
          {t.features.title}
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          {t.features.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {features.map((feature) => {
          const Icon = getIconComponent(feature.icon);
          return (
            <div
              key={feature.title}
              className="bg-surface-low border border-outline-variant p-lg rounded-lg hover:border-solar-orange/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center mb-lg border border-outline-variant group-hover:border-solar-orange transition-colors">
                <Icon className="text-solar-orange" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
