"use client";

import { useEffect, useRef } from "react";
import { FaTerminal } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";

const LOG_MESSAGES = [
  "[INFO] Checking firewall handshake...",
  "[AUTH] Token generation started.",
  "[SYSTEM] Memory buffer cleared.",
  "[OK] Identity verified at node 7.",
  "[WARN] Traffic spike detected in region: West.",
  "[SYSTEM] Syncing vault metadata...",
];

const INITIAL_LOGS = [
  "[INFO] Checking firewall handshake...",
  "[WARN] Traffic spike detected in region: West.",
  "[SYSTEM] Memory buffer cleared.",
  "[OK] Identity verified at node 7.",
  "[INFO] Checking firewall handshake...",
  "[OK] Identity verified at node 7.",
  "[INFO] Checking firewall handshake...",
  "[INFO] Checking firewall handshake...",
  "[WARN] Traffic spike detected in region: West.",
  "[AUTH] Token generation started.",
  "[INFO] Checking firewall handshake...",
  "[SYSTEM] Memory buffer cleared.",
  "[SYSTEM] Syncing vault metadata...",
  "[OK] Identity verified at node 7.",
  "[OK] Identity verified at node 7.",
  "[WARN] Traffic spike detected in region: West.",
  "[SYSTEM] Memory buffer cleared.",
  "[SYSTEM] Memory buffer cleared.",
  "[SYSTEM] Syncing vault metadata...",
  "[INFO] Checking firewall handshake...",
];

export default function TerminalLogs() {
  const locale = useLocale();
  const t = getTranslations(locale, "Login") as Record<string, string>;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const addLog = () => {
      const p = document.createElement("p");
      p.textContent =
        LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      container.appendChild(p);

      if (container.children.length > 20 && container.firstChild) {
        container.removeChild(container.firstChild);
      }

      container.scrollTop = container.scrollHeight;
    };

    const interval = setInterval(addLog, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-2 border border-outline-variant bg-surface-container-low p-md font-code-md text-code-md overflow-hidden flex flex-col">
      <div className="flex items-center gap-sm mb-sm border-b border-outline-variant pb-xs">
        <FaTerminal className="w-4 h-4 text-solar-orange" />
        <span className="uppercase opacity-70">{t.consoleLogPrimary}</span>
      </div>
      <div
        ref={containerRef}
        className="flex-grow overflow-y-auto space-y-1 text-on-surface-variant/80"
      >
        {INITIAL_LOGS.map((log, i) => (
          <p key={i}>{log}</p>
        ))}
      </div>
    </div>
  );
}
