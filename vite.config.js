import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/",
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: "dist",
    target: "esnext",
    manifest: true,
    
  },
}));
