import "public/scripts/wasm_exec.js";

declare global {
  interface Window {
    bob: (driver: string) => any;
  }
}

type Driver = 'postgres' | 'mariadb' | 'sqlite';

let wasmReady: Promise<void> | null = null;

const instances: Record<Driver, any | null> = {
  postgres: null,
  mariadb: null,
  sqlite: null,
};

const loading: Partial<Record<Driver, Promise<any>>> = {};

async function loadWasm(): Promise<void> {
  if (wasmReady) return wasmReady;

  wasmReady = (async () => {
    const go = new Go();

    const response = await fetch("/scripts/bob.wasm");
    if (!response.ok) {
      throw new Error(`Failed to fetch wasm: ${response.statusText}`);
    }

    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes, go.importObject);

    go.run(result.instance);

    if (typeof window.bob !== "function") {
      throw new Error("Global function 'bob' is not defined after WASM init");
    }
  })();

  return wasmReady;
}

export function WASM(driver: Driver = 'sqlite'): Promise<any> {
  if (instances[driver]) {
    return Promise.resolve(instances[driver]);
  }

  if (!loading[driver]) {
    loading[driver] = (async () => {
      await loadWasm();

      const instance = window.bob(driver);
      instances[driver] = instance;

      return instance;
    })();
  }

  return loading[driver]!;
}

export default WASM;
