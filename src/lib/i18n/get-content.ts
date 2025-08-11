import getLocaleEntry from "@/lib/i18n/get-locale-entry";
import { locales, type Locale } from "@/lib/i18n/locales";

export async function getContent(id: string, locale: Locale) {
  if (!locales[locale]) {
    locale = "en";
  }

  const content = await getLocaleEntry("content", id, locale);

  return (key: string) => {
    const keys = key.split(".");
    let value: any = content?.data;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }

    return value;
  };
}

export default getContent;
