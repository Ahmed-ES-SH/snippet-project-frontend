import { Metadata } from "next";
import { getSharedMetadata } from "../helpers/global/getSharedMetadata";
import { getTranslations } from "../helpers/global/getTranslations";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ParamsLocaleType } from "../hooks/global/useLocale";
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";

interface MainLayoutProps {
  children: ReactNode;
  params: ParamsLocaleType;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// export async function generateMetadata({
//   params,
// }: {
//   params: ParamsLocaleType;
// }): Promise<Metadata> {
//   const { locale } = await params;
//   const t = getTranslations(locale, "layoutMeta");
//   const sharedMetaData = getSharedMetadata(locale, t.title, t.description);

//   return {
//     title: t.title,
//     description: t.description,
//     ...sharedMetaData,
//   };
// }

export default async function MainLayout({
  children,
  params,
}: MainLayoutProps) {
  const { locale } = await params;

  return (
    <html
      lang={locale ?? "en"}
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
