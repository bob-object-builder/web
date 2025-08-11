// global.d.ts
declare class Go {
  importObject: WebAssembly.Imports;
  run(instance: WebAssembly.Instance): Promise<void> | void;
}

declare function bob(
  db: string,
): (strings: TemplateStringsArray | string) => { error: string; value: string };
