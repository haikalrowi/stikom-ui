// @ts-check
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { createRequire } from "node:module";
import { defineConfig } from "rollup";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const tsconfig = require("./tsconfig.json");

export default defineConfig({
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  input: tsconfig.files,
  output: {
    file: pkg.main,
  },
  plugins: [typescript(), terser()],
});
