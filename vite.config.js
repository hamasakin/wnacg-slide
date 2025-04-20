import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5555,
  },
  plugins: [
    monkey({
      entry: "src/main.js",
      userscript: {
        author: "hamasakin",
        description: "为wnacg添加快捷下拉阅读按钮",
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: ["https://www.wnacg.com/*"],
        license: "MIT",
      },
      build: {
        metaFileName: true,
      },
    }),
  ],
});
