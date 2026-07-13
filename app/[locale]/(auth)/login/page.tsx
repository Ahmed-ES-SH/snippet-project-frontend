import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { ParamsLocaleType } from "@/app/hooks/global/useLocale";
import LoginForm from "@/app/components/auth/login/LoginForm";

export async function generateMetadata({
  params,
}: {
  params: ParamsLocaleType;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "Login") as Record<string, string>;
  const sharedMetaData = getSharedMetadata(
    locale,
    t.accessVault,
    t.accessVaultDescription,
  );

  return {
    title: t.accessVault,
    description: t.accessVaultDescription,
    ...sharedMetaData,
  };
}

export default async function LoginPage() {
  return (
    <main className="grow flex pt-16 items-center justify-center overflow-hidden">
      <LoginForm />
    </main>
  );
}
