import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

interface NavbarProps {
  locale: LocaleType;
}

export default async function Navbar({ locale }: NavbarProps) {
  const t = getTranslations(locale, "Home") as Record<
    string,
    Record<string, string>
  >;

  const isAuthenticated = false;

  return (
    <nav
      className="fixed top-0 w-full bg-surface-container-low border-b border-outline-variant z-50 flex justify-between items-center px-margin-desktop h-16"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-lg">
        <Image
          src="/logo.png"
          alt="SnippetVault"
          width={360}
          height={360}
          className="w-32"
          priority
        />
      </div>
      <div className="flex items-center gap-md">
        {isAuthenticated && (
          <div className="hidden lg:flex items-center bg-surface-lowest rounded-sm px-md h-10 border border-outline-variant focus-within:border-solar-orange transition-colors">
            <FaSearch className="text-icon-input w-5 h-5 shrink-0" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-outline w-48 font-body-sm ml-sm"
              placeholder={t.nav.searchPlaceholder}
              type="search"
              aria-label={t.nav.searchPlaceholder}
            />
          </div>
        )}

        <div className="flex items-center gap-sm ms-md">
          <button className="text-on-surface-variant font-body-md px-md py-sm rounded-sm hover:text-on-surface transition-colors">
            {t.nav.signIn}
          </button>
          <button className="bg-primary-container text-on-primary-container px-lg py-sm font-bold rounded-sm hover:brightness-110 active:scale-[0.98] transition-all">
            {t.nav.register}
          </button>
        </div>
      </div>
    </nav>
  );
}
