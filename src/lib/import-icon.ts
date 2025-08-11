export async function importIcon(iconName?: string) {
  if (!iconName) return undefined;

  try {
    const { default: Icon } = await import(
      `@/components/ui/icons/${iconName}.astro`
    );
    return Icon;
  } catch {
    return undefined;
  }
}
