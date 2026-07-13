"use client";

import { useTranslation } from "@/app/hooks/global/useTranslation";

export default function NotFoundFooter() {
  const t = useTranslation("NotFound") as Record<string, string>;

  return (
    <footer className="fixed bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-desktop py-md">
      <div className="font-body-sm text-body-sm text-on-surface-variant">
        {t.copyright}
      </div>
      <nav className="flex gap-lg mt-md md:mt-0">
        <a
          href="#"
          className="font-body-sm text-body-sm text-on-surface-variant hover:text-solar-orange transition-colors"
        >
          {t.systemStatus}
        </a>
        <a
          href="#"
          className="font-body-sm text-body-sm text-on-surface-variant hover:text-solar-orange transition-colors"
        >
          {t.documentation}
        </a>
        <a
          href="#"
          className="font-body-sm text-body-sm text-on-surface-variant hover:text-solar-orange transition-colors"
        >
          {t.apiReference}
        </a>
        <a
          href="#"
          className="font-body-sm text-body-sm text-on-surface-variant hover:text-solar-orange transition-colors"
        >
          {t.securityLogs}
        </a>
      </nav>
    </footer>
  );
}
