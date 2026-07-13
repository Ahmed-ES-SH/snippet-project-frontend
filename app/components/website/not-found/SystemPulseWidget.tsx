"use client";

import { useTranslation } from "@/app/hooks/global/useTranslation";
import { FaTimes } from "react-icons/fa";
import styles from "./not-found.module.css";

export default function SystemPulseWidget() {
  const t = useTranslation("NotFound") as Record<string, string>;

  return (
    <section
      className="bg-surface-container-low border border-outline-variant p-lg rounded flex flex-col items-center justify-center gap-md"
      aria-label="System pulse"
    >
      <div className="font-label-md text-outline-warm uppercase tracking-widest text-xs">
        {t.dataFlowIntegrity}
      </div>

      <div className="flex items-center justify-center gap-3 w-full h-10">
        <div className={styles.pulseNode} />
        <div className={styles.pulseNode} />
        <div className={styles.pulseNode} />
        <div className="w-12 h-px bg-outline-variant relative">
          <div
            className="absolute inset-0 bg-error/50 animate-ping opacity-0"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className={`${styles.pulseNode} ${styles.pulseNodeActive}`} />
        <div className="w-12 h-px bg-outline-variant flex items-center justify-center">
          <FaTimes className="text-error text-[16px] animate-bounce" />
        </div>
        <div className={styles.pulseNode} />
        <div className={styles.pulseNode} />
      </div>

      <div className="text-[10px] font-code-md text-on-surface-variant/40 text-center">
        {t.connectionState}
      </div>
    </section>
  );
}
