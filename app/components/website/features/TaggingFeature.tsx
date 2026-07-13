import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface TaggingFeatureProps {
  locale: LocaleType;
}

export default async function TaggingFeature({ locale }: TaggingFeatureProps) {
  const t = getTranslations(locale, "Features") as Record<
    string,
    Record<string, string>
  >;

  const tags = [
    { key: "tag1", active: true },
    { key: "tag2", active: false },
    { key: "tag3", active: true },
    { key: "tag4", active: false },
    { key: "tag5", active: false },
    { key: "tag6", active: true },
    { key: "tag7", active: false },
    { key: "tag8", active: false },
    { key: "tag9", active: false },
    { key: "tag10", active: false },
    { key: "tag11", active: false },
    { key: "tag12", active: false },
  ];

  return (
    <section className="px-gutter md:px-margin-desktop py-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-surface-low border border-outline-variant rounded-lg p-lg">
            <div className="flex items-center gap-sm mb-lg">
              <span className="font-code-md text-[10px] uppercase font-bold text-outline">
                {t.tagging.tagHint}
              </span>
              <span className="text-outline-variant">—</span>
              <span className="font-code-md text-[10px] text-solar-orange">
                auth
              </span>
              <span className="font-code-md text-[10px] text-solar-orange">
                + python
              </span>
            </div>

            <div className="flex flex-wrap gap-sm">
              {tags.map((tag, i) => {
                const isActive = tag.active;
                return (
                  <span
                    key={tag.key}
                    className={`
                      font-code-md text-code-md px-sm py-xs rounded border transition-colors
                      ${
                        isActive
                          ? "text-solar-orange bg-solar-orange/10 border-solar-orange"
                          : "text-on-surface-variant bg-surface-container border-outline-variant hover:border-outline-warm"
                      }
                    `}
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    #{t.tagging[tag.key as keyof typeof t.tagging]}
                  </span>
                );
              })}
            </div>

            <div className="mt-lg pt-md border-t border-outline-variant flex items-center justify-between">
              <span className="font-code-md text-[10px] text-outline uppercase">
                12 tags
              </span>
              <span className="font-code-md text-[10px] text-solar-orange uppercase">
                3 active
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest mb-sm block">
            {t.tagging.subtitle}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            {t.tagging.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            {t.tagging.description}
          </p>
        </div>
      </div>
    </section>
  );
}
