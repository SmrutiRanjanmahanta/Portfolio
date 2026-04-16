import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // 👈 change this to your repo name
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});