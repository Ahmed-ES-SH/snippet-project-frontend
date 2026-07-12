"use client";

import { useState } from "react";
import { FaTerminal, FaAt, FaKey, FaRocket } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import IconInput from "@/app/components/UI/IconInput";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import Checkbox from "@/app/components/UI/Checkbox";

export default function SignupForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "Signup") as Record<string, string>;
  const [password, setPassword] = useState("");

  const strength = Math.min(100, (password.length / 12) * 100);
  const strengthColor =
    strength < 40
      ? "bg-error"
      : strength < 75
        ? "bg-warning"
        : "bg-solar-orange";

  return (
    <section className="flex-1 flex items-center justify-center p-gutter bg-surface-lowest relative">
      <div className="w-full max-w-[480px] bg-surface-container-low border border-outline-warm rounded-sm p-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-xl">
          <div className="h-16 w-16 mb-md flex items-center justify-center text-solar-orange text-4xl font-bold font-code-md">
            &lt;/&gt;
          </div>
          <h1 className="font-headline-lg text-headline-lg text-solar-orange tracking-tighter uppercase font-bold">
            SnippetVault
          </h1>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-base">
            {t.establishSecureArchive}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
          <IconInput
            id="username"
            name="username"
            type="text"
            label={t.systemUsername}
            placeholder={t.usernamePlaceholder}
            icon={FaTerminal}
            required
          />

          <IconInput
            id="email"
            name="email"
            type="email"
            label={t.engineerEmail}
            placeholder={t.emailPlaceholder}
            icon={FaAt}
            required
          />

          <div className="space-y-sm">
            <IconInput
              id="accessKey"
              name="accessKey"
              type="password"
              label={t.accessKey}
              placeholder={t.passwordPlaceholder}
              icon={FaKey}
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <div className="mt-sm">
              <div className="flex justify-between items-center mb-xs">
                <span className="font-label-md text-[10px] text-outline-variant uppercase">
                  {t.keyEntropyLevel}
                </span>
                <span className="font-code-md text-[10px] text-outline-variant uppercase tracking-tighter">
                  {Math.round(strength)}%
                </span>
              </div>
              <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className={`h-full ${strengthColor} transition-all duration-500`}
                  style={{ width: `${strength}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-sm py-sm">
            <Checkbox
              id="terms"
              label={
                <>
                  {t.confirmOwnership}{" "}
                  <a className="text-solar-orange hover:underline" href="#">
                    {t.securityProtocol}
                  </a>
                </>
              }
            />
          </div>

          <PrimaryButton
            label={t.initializeVault}
            icon={FaRocket}
            iconPosition="right"
          />
        </form>

        {/* Footer Links */}
        <div className="mt-xl pt-lg border-t border-outline-variant flex justify-between items-center">
          <a
            className="font-code-md text-code-md text-on-surface-variant hover:text-solar-orange transition-colors"
            href="#"
          >
            {t.decryptExisting}
          </a>
          <span className="text-outline-muted">|</span>
          <a
            className="font-code-md text-code-md text-on-surface-variant hover:text-solar-orange transition-colors"
            href="#"
          >
            {t.systemStatus}
          </a>
        </div>
      </div>
    </section>
  );
}
