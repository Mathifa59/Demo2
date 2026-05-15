import type { Metadata } from "next";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre innovación agroindustrial, reducción de mermas y tecnología de visión artificial aplicada al campo peruano.",
  openGraph: {
    title: "Blog | Selekta",
    description:
      "Artículos sobre innovación agroindustrial, reducción de mermas y tecnología de visión artificial aplicada al campo peruano.",
    url: "https://www.selektafood.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Blog />
      <CTA />
    </>
  );
}
