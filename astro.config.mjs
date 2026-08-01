import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://purevitalpro.online",
  output: "static",
  trailingSlash: "never",

  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://purevitalpro.online/404"
    })
  ]
});