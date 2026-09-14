import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Mode, plugin } from "vite-plugin-markdown";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    plugin({
      mode: [Mode.MARKDOWN],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
