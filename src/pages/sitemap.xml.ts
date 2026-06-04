import type { APIRoute } from "astro";

const pages = [
  { url: "/", lastmod: new Date().toISOString().split("T")[0], priority: 1.0 },
  { url: "/biographie", lastmod: new Date().toISOString().split("T")[0], priority: 0.9 },
  { url: "/spectacles", lastmod: new Date().toISOString().split("T")[0], priority: 0.8 },
  { url: "/calendrier", lastmod: new Date().toISOString().split("T")[0], priority: 0.9 },
  { url: "/stages", lastmod: new Date().toISOString().split("T")[0], priority: 0.85 },
  { url: "/galerie", lastmod: new Date().toISOString().split("T")[0], priority: 0.7 },
  { url: "/contact", lastmod: new Date().toISOString().split("T")[0], priority: 0.8 },
  { url: "/mentions-legales", lastmod: new Date().toISOString().split("T")[0], priority: 0.5 },
];

const generateSiteMap = (pages: { url: string; lastmod: string; priority: number }[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${pages
          .map(
            ({ url, lastmod, priority }) =>
              `
        <url>
            <loc>${new URL(url, import.meta.env.SITE).href}</loc>
            <lastmod>${lastmod}</lastmod>
            <priority>${priority}</priority>
        </url>
        `
          )
          .join("")}
    </urlset>`;

export const GET: APIRoute = () => {
  return new Response(generateSiteMap(pages), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Length": generateSiteMap(pages).length.toString(),
    },
  });
};
