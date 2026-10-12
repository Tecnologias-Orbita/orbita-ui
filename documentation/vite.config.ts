import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { config } from "dotenv";

config();

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? `${process.env.BASE_URL || ""}/`
      : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-core",
              test: /node_modules\/(react|react-dom|scheduler)\//,
              priority: 20,
            },
            {
              name: "vendor",
              test: /node_modules/,
              minSize: 50000,
              maxSize: 250000,
              priority: 10,
            },
            {
              name: "docs",
              test: /docs/,
              minSize: 50000,
              maxSize: 250000,
              priority: 1,
            },
          ],
        },
      },
    },
  },
});
