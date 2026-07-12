"use client";

import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";

export default function GeometricVisual() {
  const locale = useLocale();
  const t = getTranslations(locale, "Login") as Record<string, string>;

  return (
    <div className="border border-outline-variant bg-surface-container-low relative group flex items-center justify-center p-xl">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FF5C00 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* Rotating diamond */}
      <div className="relative w-32 h-32 border-2 border-solar-orange/30 rotate-45 flex items-center justify-center transition-transform duration-[2000ms] group-hover:rotate-[225deg]">
        <div
          className="w-16 h-16 border-2 border-solar-orange animate-spin-slow"
          style={{ animationDuration: "10s" }}
        />
      </div>
      {/* Label */}
      <div className="absolute bottom-2 left-2 font-code-md text-xs text-on-surface-variant opacity-40">
        {t.geomPrimitive}
      </div>
    </div>
  );
}
