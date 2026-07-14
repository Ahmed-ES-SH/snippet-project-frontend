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
import ResetPasswordNewField from "./ResetPasswordNewField";
import ResetPasswordConfirmField from "./ResetPasswordConfirmField";
import ResetPasswordSuccess from "./ResetPasswordSuccess";
import { FaKey } from "react-icons/fa";

const resetPasswordSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "ResetPassword") as Record<string, string>;
  const [step, setStep] = useState<"form" | "success">("form");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setStep("success");
  };

  if (step === "success") {
    return (
      <section className="flex-1 flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-lowest">
        <div className="w-full max-w-[400px]">
          <AuthBrandHeader description={t.subheading} />
          <AnimatePresence mode="wait">
            <ResetPasswordSuccess
              message={t.rotatedMessage}
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
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <ResetPasswordNewField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.accessKey}
                placeholder={t.keyPlaceholder}
                errorMessage={fieldState.error?.message}
                strengthLabel={t.keyEntropyLevel}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <ResetPasswordConfirmField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.confirmKey}
                placeholder={t.confirmKeyPlaceholder}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <PrimaryButton
            label={isSubmitting ? t.rotatingKey : t.rotateKey}
            icon={isSubmitting ? undefined : FaKey}
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
