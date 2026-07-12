import { Metadata } from "next";
import { getSharedMetadata } from "../helpers/global/getSharedMetadata";
import { getTranslations } from "../helpers/global/getTranslations";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ParamsLocaleType } from "../hooks/global/useLocale";

interface MainLayoutProps {
  children: ReactNode;
  params: ParamsLocaleType;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: ParamsLocaleType;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "layoutMeta");
  const sharedMetaData = getSharedMetadata(locale, t.title, t.description);

  return {
    title: t.title,
    description: t.description,
    ...sharedMetaData,
  };
}

export default async function MainLayout({
  children,
  params,
}: MainLayoutProps) {
  const { locale } = await params;
  return (
    <html
      lang={locale ?? "en"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
