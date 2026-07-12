import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { ParamsLocaleType } from "@/app/hooks/global/useLocale";
import SignupForm from "@/app/components/auth/signup/SignupForm";
import DiagnosticsPanel from "@/app/components/auth/login/DiagnosticsPanel";

export async function generateMetadata({
  params,
}: {
  params: ParamsLocaleType;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "Signup") as Record<string, string>;
  const sharedMetaData = getSharedMetadata(
    locale,
    "SnippetVault",
    t.establishSecureArchive,
  );

  return {
    title: "SnippetVault",
    description: t.establishSecureArchive,
    ...sharedMetaData,
  };
}

export default async function SignupPage() {
  return (
    <main className="grow flex overflow-hidden">
      <DiagnosticsPanel />
      <SignupForm />
    </main>
  );
}
