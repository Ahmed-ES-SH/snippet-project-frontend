import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { ParamsLocaleType } from "@/app/hooks/global/useLocale";
import ResetPasswordForm from "@/app/components/auth/reset-password/ResetPasswordForm";

export async function generateMetadata({
  params,
}: {
  params: ParamsLocaleType;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "ResetPassword") as Record<string, string>;
  const sharedMetaData = getSharedMetadata(locale, t.title, t.description);

  return {
    title: t.title,
    description: t.description,
    ...sharedMetaData,
  };
}

export default async function ResetPasswordPage() {
  return (
    <main className="grow flex pt-16 items-center justify-center overflow-hidden">
      <ResetPasswordForm />
    </main>
  );
}
