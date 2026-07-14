"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import AuthBrandHeader from "@/app/components/UI/AuthBrandHeader";
import AuthFooter from "@/app/components/UI/AuthFooter";
import ForgotPasswordEmailField from "./ForgotPasswordEmailField";
import ForgotPasswordSuccess from "./ForgotPasswordSuccess";
import { FaPaperPlane } from "react-icons/fa";

const forgotPasswordSchema = z.object({
  email: z.email(),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "ForgotPassword") as Record<string, string>;
  const [step, setStep] = useState<"form" | "success">("form");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setStep("success");
  };

  if (step === "success") {
    return (
      <section className="flex-1  flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-lowest">
        <div className="w-full max-w-[400px]">
          <AuthBrandHeader description={t.subheading} />
          <AnimatePresence mode="wait">
            <ForgotPasswordSuccess
              message={t.recoveryMessage}
              returnLabel={t.returnToVault}
            />
          </AnimatePresence>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 h-screen flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-lowest">
      <div className="w-full max-w-[400px] space-y-lg">
        <AuthBrandHeader description={t.subheading} />

        <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <ForgotPasswordEmailField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.identityEmail}
                placeholder={t.emailPlaceholder}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <PrimaryButton
            label={isSubmitting ? t.dispatchingRecovery : t.dispatchRecovery}
            icon={isSubmitting ? undefined : FaPaperPlane}
            iconPosition="right"
            loading={isSubmitting}
          />
        </form>

        <AuthFooter
          links={[
            { label: t.securityProtocol, href: "#" },
            { label: t.signIn, href: "/login" },
          ]}
        />
      </div>
    </section>
  );
}
