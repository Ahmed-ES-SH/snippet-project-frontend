import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface SharingFeatureProps {
  locale: LocaleType;
}

export default async function SharingFeature({ locale }: SharingFeatureProps) {
  const t = getTranslations(locale, "Features") as Record<
    string,
    Record<string, string>
  >;

  const CopyIcon = getIconComponent("FaCopy");
  const LinkIcon = getIconComponent("FaLink");
  const CheckIcon = getIconComponent("FaCheck");

  return (
    <section className="px-gutter md:px-margin-desktop py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div>
          <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest mb-sm block">
            {t.sharing.subtitle}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            {t.sharing.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            {t.sharing.description}
          </p>
        </div>

        <div className="bg-surface-low border border-outline-variant rounded-lg overflow-hidden">
          <div className="bg-[#0C0E14] p-lg">
            {/* Share link card */}
            <div className="bg-surface-container rounded-lg border border-outline-variant p-md">
              <div className="flex items-center justify-between mb-md">
                <div className="flex items-center gap-sm">
                  <LinkIcon className="text-solar-orange text-sm" />
                  <span className="font-code-md text-code-md text-on-surface">
                    {t.sharing.mockSlug}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-sm text-on-surface-variant hover:text-solar-orange transition-colors"
                  aria-label="Copy link"
                >
                  <CheckIcon className="text-success text-sm" />
                  <span className="font-code-md text-[10px] text-success uppercase">
                    {t.sharing.mockCopied}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-md">
                <span className="font-code-md text-[10px] uppercase text-outline">
                  {t.sharing.mockVisibility}
                </span>
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-4 bg-solar-orange rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-on-primary-fixed rounded-full" />
                  </div>
                  <span className="font-code-md text-[10px] text-solar-orange uppercase font-bold">
                    {t.sharing.mockStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-md flex items-center gap-sm text-outline">
              <CopyIcon className="text-xs" />
              <span className="font-code-md text-[10px] uppercase">
                Copy to clipboard
              </span>
            </div>
          </div>

          <div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center gap-sm">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span className="font-code-md text-[10px] uppercase font-bold text-outline">
              Share link active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
