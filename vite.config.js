import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "./", // Use relative paths for GitHub Pages
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
});
