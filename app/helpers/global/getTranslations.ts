import arTranslations from "../../translations/ar.json";
import enTranslations from "../../translations/en.json";

type Translations = typeof enTranslations;

export const getTranslations = (
  locale: string,
  namespace?: keyof Translations,
) => {
  const translations: Translations =
    locale === "ar" ? arTranslations : enTranslations;

  if (!namespace) {
    return translations;
  }

  return translations[namespace];
};
