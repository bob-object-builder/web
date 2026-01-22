/**
 * Importa un icono por nombre:
 * 1) intenta importar "@/components/ui/icons/${iconName}.astro" (export default)
 * 2) si falla, importa @lucide/astro y busca un icono nombrado dinámicamente
 * Devuelve el componente del icono o undefined si no se encuentra.
 */
export async function importIcon(iconName?: string): Promise<any | undefined> {
  if (!iconName) return undefined;

  try {
    const { default: Icon } = await import(
      `@/components/ui/icons/${iconName}.astro`
    );

    return Icon;
  } catch (e: any) {
    try {
      const lucideModule = await import("@lucide/astro");
      const pascal = iconName;
      const camel = iconName.replace(/[-_]+(.)?/g, (_, c) =>
        c ? c.toUpperCase() : ""
      );

      const candidates = [pascal, iconName, camel];

      for (const name of candidates) {
        if (name in lucideModule) {
          return (lucideModule as any)[name];
        }
      }

      if (
        (lucideModule as any).default &&
        typeof (lucideModule as any).default === "object"
      ) {
        for (const name of candidates) {
          if (name in (lucideModule as any).default) {
            return (lucideModule as any).default[name];
          }
        }
      }

      return undefined;
    } catch {
      return undefined;
    }
  }
}
