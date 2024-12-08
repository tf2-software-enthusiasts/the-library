import { defineConfig } from "tsup";

export default defineConfig({
  clean: false,
  bundle: false,
  dts: false,
  entry: ["src/**/*.ts", "!src/**/*.d.ts"],
  format: ["esm", "cjs"],
  minify: false,
  tsconfig: "tsconfig.json",
  target: "esnext",
  splitting: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  shims: false,
  keepNames: true,
});
