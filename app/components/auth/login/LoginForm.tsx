"use client";

import { FaAt, FaLock, FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import SecondaryButton from "@/app/components/UI/SecondaryButton";
import IconInput from "@/app/components/UI/IconInput";
import Checkbox from "@/app/components/UI/Checkbox";
import Divider from "@/app/components/UI/Divider";
import AuthFooter from "@/app/components/UI/AuthFooter";

export default function LoginForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "Login") as Record<string, string>;

  return (
    <section className="flex-1 flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-lowest">
      <div className="w-full  space-y-lg">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-md">
          <div className="h-12 w-12 flex items-center justify-center text-solar-orange">
            <FaGithub className="w-10 h-10" />
          </div>
          <div className="space-y-base">
            <h1 className="font-headline-lg text-headline-lg tracking-tight uppercase">
              {t.accessVault}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.accessVaultDescription}
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
          <IconInput
            id="email"
            name="email"
            type="email"
            label={t.identityEmail}
            placeholder={t.emailPlaceholder}
            icon={FaAt}
            required
          />

          <div className="space-y-sm">
            <div className="flex justify-between items-center">
              <label
                className="font-label-md text-label-md uppercase block text-on-surface-variant"
                htmlFor="password"
              >
                {t.accessKey}
              </label>
              <a
                className="font-label-md text-label-md text-solar-orange hover:underline uppercase transition-opacity"
                href="#"
              >
                {t.keyRecovery}
              </a>
            </div>
            <IconInput
              id="password"
              name="password"
              type="password"
              label=""
              placeholder={t.passwordPlaceholder}
              icon={FaLock}
              required
            />
          </div>

          <Checkbox id="persist" label={t.persistSession} />

          <PrimaryButton
            label={t.initializeAuth}
            icon={FaArrowRight}
            iconPosition="right"
          />
        </form>

        <Divider label={t.secondaryMethods} />

        <SecondaryButton label={t.signInWithGithub} icon={FaGithub} />

        <SecondaryButton label={t.signInWithGoogle} icon={FaGoogle} />

        <AuthFooter
          links={[
            { label: t.securityProtocol, href: "#" },
            { label: t.createAccount, href: "#" },
          ]}
        />
      </div>
    </section>
  );
}
