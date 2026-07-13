import { Metadata } from "next";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getSharedMetadata } from "@/app/helpers/global/getSharedMetadata";
import { ParamsLocaleType } from "@/app/hooks/global/useLocale";
import SignupForm from "@/app/components/auth/signup/SignupForm";

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
    <main className="grow min-h-screen  flex items-end justify-center overflow-hidden">
      <SignupForm />
    </main>
  );
}
