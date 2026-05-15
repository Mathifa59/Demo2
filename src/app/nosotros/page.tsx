import type { Metadata } from "next";
import { Nosotros } from "@/components/Nosotros";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Somos una empresa peruana que optimiza la selección de frutas en plantas agroexportadoras. Conoce nuestra misión, visión y el equipo detrás de Selekta.",
  openGraph: {
    title: "Nosotros | Selekta",
    description:
      "Somos una empresa peruana que optimiza la selección de frutas en plantas agroexportadoras. Conoce nuestra misión, visión y el equipo detrás de Selekta.",
    url: "https://www.selektafood.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Nosotros />
      <CTA />
    </>
  );
}
