// @ts-check

import { createRequire } from "node:module";
import { defineConfig } from "rollup";

import typescript from "@rollup/plugin-typescript";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default defineConfig({
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  input: "./src/index.ts",
  output: {
    dir: "./dist",
  },
  plugins: [typescript()],
});
