"use client";

import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import TerminalLogs from "./TerminalLogs";
import GeometricVisual from "./GeometricVisual";
import StatisticsPane from "./StatisticsPane";

export default function DiagnosticsPanel() {
  const locale = useLocale();
  const t = getTranslations(locale, "Login") as Record<string, string>;

  return (
    <section className="hidden lg:flex flex-1 relative bg-surface-container-lowest border-r border-outline-variant overflow-hidden">
      {/* Scan line animation */}
      <div className="scan-line" />

      <div className="absolute inset-0 p-xl flex flex-col gap-lg z-10">
        {/* Diagnostic Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-headline-md text-headline-md text-solar-orange tracking-tighter">
              {t.sysAuthDaemon}
            </h2>
            <p className="font-code-md text-code-md text-on-surface-variant opacity-60">
              {t.systemId}
            </p>
          </div>
          <div className="flex gap-sm">
            <div className="h-2 w-8 bg-solar-orange" />
            <div className="h-2 w-2 bg-outline-variant" />
            <div className="h-2 w-2 bg-outline-variant" />
          </div>
        </div>

        {/* High Density Data Grid */}
        <div className="grid grid-cols-2 gap-md h-full pb-xl">
          <TerminalLogs />
          <GeometricVisual />
          <StatisticsPane locale={locale} />
        </div>
      </div>

      {/* Background Aesthetic Elements */}
      <div className="absolute bottom-0 right-0 p-md pointer-events-none opacity-20">
        <span className="font-code-md text-[120px] leading-none select-none text-outline-variant font-bold">
          SV_V1
        </span>
      </div>
    </section>
  );
}
