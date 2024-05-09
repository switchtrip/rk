import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  plugins: [sveltekit(), enhancedImages()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
