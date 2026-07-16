import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About UKMAC | Modern Agricultural Cooperative Union",
  description:
    "Learn about UKMAC's background, shared vision, strategic objectives, member benefits, leadership, and organizational structure.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
