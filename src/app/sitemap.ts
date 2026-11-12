import type { MetadataRoute } from "next";
import { content } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: content.url, changeFrequency: "monthly", priority: 1 }];
}
