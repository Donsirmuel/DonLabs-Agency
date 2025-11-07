import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use GH_PAGES env flag to decide whether to build with the GitHub Pages base path.
  // In CI for GitHub Pages set GH_PAGES=true; Vercel builds will leave it unset and use '/'.
  base: process.env.GH_PAGES === 'true' ? "/My-Portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
