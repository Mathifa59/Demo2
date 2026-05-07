import type { Metadata } from "next";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog — Sortiva",
  description:
    "Artículos sobre innovación agroindustrial, reducción de mermas y tecnología aplicada al campo.",
};

export default function BlogPage() {
  return (
    <>
      <Blog />
      <CTA />
    </>
  );
}
