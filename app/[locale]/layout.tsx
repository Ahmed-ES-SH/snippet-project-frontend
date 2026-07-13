import { Metadata } from "next";
import { getSharedMetadata } from "../helpers/global/getSharedMetadata";
import { getTranslations } from "../helpers/global/getTranslations";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { LocaleType } from "../hooks/global/useLocale";
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";
import GridBackground from "../components/UI/GridBackground";

interface MainLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;
  const sharedMetaData = getSharedMetadata(locale, t.hero.headline, t.hero.description);

  return {
    title: "SnippetVault | High-Performance Code Library",
    description: t.hero.description,
    ...sharedMetaData,
  };
}

export default async function MainLayout({
  children,
  params,
}: MainLayoutProps) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale ?? "en"}
      dir={dir}
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GridBackground />
        <div className="relative z-10 flex flex-col min-h-full">
          <Navbar locale={locale as LocaleType} />
          {children}
          <Footer locale={locale as LocaleType} />
        </div>
      </body>
    </html>
  );
}
