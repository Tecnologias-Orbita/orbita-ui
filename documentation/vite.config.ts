import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Mode, plugin } from "vite-plugin-markdown";
import { config } from "dotenv";

config();

export default defineConfig({
  base:
    process.env.NODE_ENV === "production" ? `${process.env.BASE_URL}/` : "/",
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
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "large-libs",
              test: /node_modules/,
              minSize: 100000,
              maxSize: 250000,
              priority: 10,
            },
            {
              name: "docs",
              test: /docs/,
              minSize: 50000,
              maxSize: 250000,
              priority: 20,
            },
          ],
        },
      },
    },
  },
});
