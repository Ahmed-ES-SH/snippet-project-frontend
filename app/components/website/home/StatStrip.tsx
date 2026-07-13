import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface StatStripProps {
  locale: LocaleType;
}

export default async function StatStrip({ locale }: StatStripProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  const BoltIcon = getIconComponent("FaBolt");
  const LockIcon = getIconComponent("FaLock");
  const ShareIcon = getIconComponent("FaShareAlt");

  return (
    <section className="border-y border-outline-variant bg-surface-lowest">
      <div className="px-margin-desktop grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
        <div className="py-md px-lg flex items-center justify-center gap-md">
          <BoltIcon className="text-solar-orange" />
          <span className="font-code-md text-code-md text-on-surface tracking-wide uppercase">
            {t.stats.search}
          </span>
        </div>
        <div className="py-md px-lg flex items-center justify-center gap-md">
          <LockIcon className="text-solar-orange" />
          <span className="font-code-md text-code-md text-on-surface tracking-wide uppercase">
            {t.stats.auth}
          </span>
        </div>
        <div className="py-md px-lg flex items-center justify-center gap-md">
          <ShareIcon className="text-solar-orange" />
          <span className="font-code-md text-code-md text-on-surface tracking-wide uppercase">
            {t.stats.sharing}
          </span>
        </div>
      </div>
    </section>
  );
}
