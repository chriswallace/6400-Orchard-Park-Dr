import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "./", // Use relative paths for GitHub Pages
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
