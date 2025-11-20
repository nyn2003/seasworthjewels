import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Base path: use VITE_BASE_URL env var if set, otherwise default to /seasworthjewels/ for GitHub Pages
// For Netlify: set VITE_BASE_URL=/ in Netlify build settings or use build:netlify script
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_URL || "/seasworthjewels/";

  return {
    plugins: [react()],
    base: base,
    server: {
      open: base, // forces dev server to serve from base
    },
  };
});
