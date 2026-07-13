"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/app/hooks/global/useTranslation";
import { FaTerminal } from "react-icons/fa";
import styles from "./not-found.module.css";

export default function FaultLogWidget() {
  const t = useTranslation("NotFound") as Record<string, string>;
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setTimestamp(
        `[${now.toISOString().replace("T", " ").substring(0, 19)}]`,
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="bg-surface-container-low border border-outline-variant p-lg rounded shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      aria-label="Fault log"
    >
      <div className="flex items-center justify-between border-b border-outline-variant pb-md mb-md">
        <div className="flex items-center gap-sm">
          <FaTerminal className="text-solar-orange" />
          <span className="font-label-md text-on-surface">{t.faultLog}</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-solar-orange animate-pulse" />
      </div>

      <div
        className={`font-code-md text-code-md text-on-surface-variant flex flex-col gap-xs max-h-48 overflow-y-auto ${styles.customScrollbar}`}
      >
        <div className="flex justify-between">
          <span className="text-outline-warm">{t.requestId}:</span>
          <span className="text-on-surface">{t.requestIdValue}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-outline-warm">{t.timestamp}:</span>
          <span className="text-on-surface">{timestamp}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-outline-warm">{t.status}:</span>
          <span className="text-error font-bold">{t.statusValue}</span>
        </div>
        <div className="mt-md border-t border-outline-variant/30 pt-sm text-xs opacity-60">
          <div>{t.logTrace}</div>
          <div>{t.logWarn}</div>
          <div>{t.logFail1}</div>
          <div>{t.logFail2}</div>
          <div>{t.logCrit}</div>
        </div>
      </div>
    </section>
  );
}
