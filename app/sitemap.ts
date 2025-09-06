import { type MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nasreen-ara.vercel.app"
  const paths = ["", "/about", "/services", "/results", "/credentials", "/blog", "/contact", "/legal/disclaimer", "/legal/privacy", "/legal/terms"]
  return paths.map(p => ({ url: `${base}${p}`, changeFrequency: "weekly", priority: p === "" ? 1 : 0.6 }))
}
