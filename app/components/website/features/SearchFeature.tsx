import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface SearchFeatureProps {
  locale: LocaleType;
}

export default async function SearchFeature({ locale }: SearchFeatureProps) {
  const t = getTranslations(locale, "Features") as Record<
    string,
    Record<string, string>
  >;

  const results = [
    { file: t.search.mockResult1, desc: t.search.mockResult1Desc },
    { file: t.search.mockResult2, desc: t.search.mockResult2Desc },
    { file: t.search.mockResult3, desc: t.search.mockResult3Desc },
  ];

  return (
    <section className="px-gutter md:px-margin-desktop py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div>
          <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest mb-sm block">
            {t.search.subtitle}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            {t.search.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            {t.search.description}
          </p>
        </div>

        <div className="bg-surface-low border border-outline-variant rounded-lg overflow-hidden">
          <div className="bg-[#0C0E14] px-md py-lg">
            <div className="flex items-center gap-sm bg-surface-container-low rounded px-md py-sm border border-outline-variant mb-md">
              <span className="text-solar-orange font-code-md text-code-md">
                $
              </span>
              <span className="font-code-md text-code-md text-on-surface animate-fade-in">
                {t.search.mockQuery.replace("$ sv search ", "")}
              </span>
              <span className="inline-block w-0.5 h-4 bg-solar-orange animate-pulse" />
            </div>

            <div className="space-y-sm">
              {results.map((result, i) => (
                <div
                  key={result.file}
                  className="flex items-start gap-md px-md py-sm rounded bg-surface-container-low/50 border border-outline-variant/50 animate-fade-in"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="text-solar-orange mt-0.5 shrink-0">
                    {(() => {
                      const Chevron = getIconComponent("FaChevronRight");
                      return <Chevron className="text-xs" />;
                    })()}
                  </span>
                  <div>
                    <span className="font-code-md text-code-md text-on-surface block">
                      {result.file}
                    </span>
                    <span className="font-code-md text-[12px] text-outline block">
                      {result.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-solar-orange" />
              <span className="font-code-md text-[10px] uppercase font-bold text-outline">
                3 results
              </span>
            </div>
            <span className="font-code-md text-[10px] text-outline">
              &lt;500ms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
