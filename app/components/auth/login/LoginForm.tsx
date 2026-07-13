"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { useLocale } from "@/app/hooks/global/useLocale";
import AuthFooter from "@/app/components/UI/AuthFooter";
import AuthBrandHeader from "@/app/components/UI/AuthBrandHeader";
import {
  LoginEmailField,
  LoginPasswordField,
  LoginActions,
  LoginSocialButtons,
} from "./";
import { login } from "@/app/helpers/website/login.helper";
import { ApiError } from "@/app/helpers/global/globalRequest";
import { api } from "@/app/lib/Client";
import { AUTH_API } from "@/app/constants/auth.api";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
  persist: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const locale = useLocale();
  const t = getTranslations(locale, "Login") as Record<string, string>;
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", persist: false },
  });

  const onSubmit = async (data: LoginFormData) => {
    setServerError(null);
    try {
      await login(data);
    } catch (error) {
      if (error instanceof ApiError) {
        setServerError(error.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    }
  };

  // const onSubmit = async (data: LoginFormData) => {
  //   try {
  //     await api.get(AUTH_API.CSRF);
  //     const response = await api.post(AUTH_API.LOGIN, data);
  //     console.log(response);
  //   } catch (error) {
  //     if (error instanceof ApiError) {
  //       setServerError(error.message);
  //     } else {
  //       setServerError("An unexpected error occurred. Please try again.");
  //     }
  //   }
  // };

  return (
    <section className="flex-1  flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface-lowest">
      <div className="w-full max-w-[400px] space-y-lg">
        <AuthBrandHeader description={t.accessVaultDescription} />

        <form className="space-y-lg" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <LoginEmailField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.identityEmail}
                placeholder={t.emailPlaceholder}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <LoginPasswordField
                error={fieldState.error}
                value={field.value}
                onChange={field.onChange}
                label={t.accessKey}
                placeholder={t.passwordPlaceholder}
                errorMessage={fieldState.error?.message}
                forgotPasswordLabel={t.keyRecovery}
              />
            )}
          />

          <LoginActions
            isSubmitting={isSubmitting}
            persistLabel={t.persistSession}
            signInLabel={t.signIn}
            signingInLabel={t.signingIn}
            persistRegister={register("persist")}
          />
        </form>

        <AnimatePresence>
          {serverError && (
            <motion.div
              key="server-error"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-3 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              <svg
                className="h-5 w-5 shrink-0 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{serverError}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <LoginSocialButtons
          dividerLabel={t.secondaryMethods}
          githubLabel={t.signInWithGithub}
          googleLabel={t.signInWithGoogle}
        />

        <AuthFooter
          links={[
            { label: t.securityProtocol, href: "#" },
            { label: t.createAccount, href: "/signup" },
          ]}
        />
      </div>
    </section>
  );
}
