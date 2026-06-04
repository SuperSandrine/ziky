import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://zikyversari.fr",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
});
