import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";
import Link from "next/link";

interface FooterProps {
  locale: LocaleType;
}

export default async function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-desktop py-md max-w-full">
      <div className="flex flex-col md:flex-row items-center gap-md mb-md md:mb-0">
        <span className="font-bold text-solar-orange font-body-md text-body-md">
          SnippetVault
        </span>
        <span className="text-on-surface-variant font-code-md text-code-md">
          {t.footer.copyright}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-lg">
        <Link
          href="#"
          className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-code-md text-code-md"
        >
          {t.footer.status}
        </Link>
        <Link
          href="#"
          className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-code-md text-code-md"
        >
          {t.footer.docs}
        </Link>
        <Link
          href="#"
          className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-code-md text-code-md"
        >
          {t.footer.cli}
        </Link>
        <Link
          href="#"
          className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer font-code-md text-code-md"
        >
          {t.footer.privacy}
        </Link>
      </div>
    </footer>
  );
}
