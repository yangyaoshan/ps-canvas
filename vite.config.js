import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
  //     components: path.resolve(
  //       path.dirname(fileURLToPath(import.meta.url)),
  //       "src/components"
  //     ),
  //     styles: path.resolve(
  //       path.dirname(fileURLToPath(import.meta.url)),
  //       "src/styles"
  //     ),
  //   },
  // },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
