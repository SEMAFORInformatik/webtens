import { defineConfig, splitVendorChunkPlugin } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import strip from '@rollup/plugin-strip';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), splitVendorChunkPlugin(), {
    ...strip({
      include: "**/*.+(vue|ts)",
      functions: [ "console.log", "console.debug", "console.time", "console.timeEnd"]
    }),
    apply: "build"
  }],
  base: "./"
});
