import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { ParamsLocaleType } from "@/app/hooks/global/useLocale";
import ForgotPasswordForm from "@/app/components/auth/forgot-password/ForgotPasswordForm";

export async function generateMetadata({
  params,
}: {
  params: ParamsLocaleType;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "ForgotPassword") as Record<string, string>;
  const sharedMetaData = getSharedMetadata(locale, t.title, t.description);

  return {
    title: t.title,
    description: t.description,
    ...sharedMetaData,
  };
}

export default async function ForgotPasswordPage() {
  return (
    <main className="grow flex   items-center justify-center overflow-hidden">
      <ForgotPasswordForm />
    </main>
  );
}
