"use client";

import { FaRocket } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import PrimaryButton from "@/app/components/UI/PrimaryButton";
import AuthBrandHeader from "@/app/components/UI/AuthBrandHeader";
import {
  SignupUsernameField,
  SignupEmailField,
  SignupPasswordField,
  SignupConfirmPasswordField,
  SignupTerms,
  SignupFooter,
} from "./";

const signupSchema = z
  .object({
    username: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(1),
    terms: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "Signup") as Record<string, string>;

  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async () => {
    // TODO: wire to actual auth action
    await new Promise((r) => setTimeout(r, 1500));
  };

  return (
    <section className="w-full max-w-3xl mt-16 px-md py-lg md:p-gutter">
      <div className="bg-surface-container-low border border-outline-warm rounded-sm p-lg md:p-xl">
        <AuthBrandHeader description={t.establishSecureArchive} />

        <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <SignupUsernameField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.systemUsername}
                placeholder={t.usernamePlaceholder}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <SignupEmailField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.engineerEmail}
                placeholder={t.emailPlaceholder}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <SignupPasswordField
                  error={fieldState.error}
                  value={field.value}
                  onChange={field.onChange}
                  label={t.accessKey}
                  placeholder={t.passwordPlaceholder}
                  errorMessage={fieldState.error?.message}
                  strengthLabel={t.keyEntropyLevel}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <SignupConfirmPasswordField
                  error={fieldState.error}
                  value={field.value}
                  onChange={field.onChange}
                  label={t.confirmPassword}
                  placeholder={t.passwordPlaceholder}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </div>

          <SignupTerms
            label={t.confirmOwnership}
            termsLinkLabel={t.securityProtocol}
            register={register("terms")}
          />

          <PrimaryButton
            label={isSubmitting ? t.signingUp : t.initializeVault}
            icon={isSubmitting ? undefined : FaRocket}
            iconPosition="right"
            loading={isSubmitting}
          />
        </form>

        <SignupFooter
          loginLabel={t.decryptExisting}
          statusLabel={t.systemStatus}
        />
      </div>
    </section>
  );
}
