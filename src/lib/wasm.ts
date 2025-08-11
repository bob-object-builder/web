import "public/scripts/wasm_exec.js";

declare global {
  interface Window {
    bob: (arg: string) => any;
  }
}

let bobInstance: any = null;
let wasmLoadingPromise: Promise<any> | null = null;

export function WASM(): Promise<any> {
  if (bobInstance) {
    return Promise.resolve(bobInstance);
  }

  if (!wasmLoadingPromise) {
    wasmLoadingPromise = (async () => {
      const go = new Go();

      const response = await fetch("/public/scripts/bob.wasm");
      if (!response.ok) {
        throw new Error(`Failed to fetch wasm: ${response.statusText}`);
      }

      const bytes = await response.arrayBuffer();
      const result = await WebAssembly.instantiate(bytes, go.importObject);

      go.run(result.instance);

      if (typeof window.bob !== "function") {
        throw new Error("Global function 'bob' is not defined after WASM init");
      }

      bobInstance = window.bob("sqlite");

      return bobInstance;
    })();
  }

  return wasmLoadingPromise;
}

export default WASM;
