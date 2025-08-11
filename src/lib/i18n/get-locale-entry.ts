import { getEntry, type DataEntryMap } from "astro:content";

export default async function getLocaleEntry(
  group: keyof DataEntryMap,
  entryName: string,
  locale: string
) {
  return await getEntry(group, `${entryName}/${locale}`);
}
