interface LocaleType {
  [key: string]: string;
}

export const locales = {
  es: "Español",
  en: "English",
} as const;

export type Locale = keyof typeof locales;
