"use client";

import { useTranslation } from "@/app/hooks/global/useTranslation";
import { FaSearch, FaThLarge, FaArrowRight } from "react-icons/fa";
import GlitchTitle from "./GlitchTitle";
import Link from "next/link";

export default function NotFoundHero() {
  const t = useTranslation("NotFound") as Record<string, string>;

  return (
    <div className="flex flex-col gap-lg">
      <div className="relative">
        <span className="font-code-md text-solar-orange bg-solar-orange/10 px-sm py-xs border border-solar-orange/20 inline-block mb-md">
          {t.errorBadge}
        </span>
        <GlitchTitle />
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {t.subtitle}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-md mt-md">
        <Link
          href="/"
          className="bg-primary-container text-on-primary-container px-lg py-md font-label-md rounded-lg flex items-center gap-sm active:scale-95 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <FaSearch />
          {t.initializeSearch}
        </Link>
        <Link
          href="/"
          className="border border-outline-variant text-on-surface px-lg py-md font-label-md rounded-lg flex items-center gap-sm hover:bg-surface-container-low active:scale-95 transition-all"
        >
          <FaThLarge />
          {t.returnToWorkbench}
        </Link>
      </div>

      <div className="mt-xl">
        <Link
          href="/"
          className="text-on-surface-variant font-label-md flex items-center gap-xs hover:text-solar-orange transition-colors group"
        >
          {t.contactAdmin}
          <FaArrowRight className="text-[18px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
