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
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: ["https://www.wnacg.com/*"],
      },
      build: {
        metaFileName: true,
      },
    }),
  ],
});
