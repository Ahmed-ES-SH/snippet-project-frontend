import { getTranslations } from "@/app/helpers/global/getTranslations";

interface StatisticsPaneProps {
  locale: string;
}

export default function StatisticsPane({ locale }: StatisticsPaneProps) {
  const t = getTranslations(locale, "Login") as Record<string, string>;

  return (
    <div className="border border-outline-variant bg-surface-container-low p-md flex flex-col gap-sm">
      <span className="font-label-md text-label-md uppercase text-on-surface-variant">
        {t.archivingStatus}
      </span>
      <div className="space-y-md">
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] uppercase opacity-60">
            <span>{t.syncLoad}</span>
            <span>84%</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-highest">
            <div className="h-full bg-solar-orange w-[84%]" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] uppercase opacity-60">
            <span>{t.entropyPool}</span>
            <span>12%</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-highest">
            <div className="h-full bg-solar-orange w-[12%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
