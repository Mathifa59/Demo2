import type { Metadata } from "next";
import { Productos } from "@/components/Productos";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Selekta opera en palta Hass, frijol chino, frijol castilla y pallar bebé. Resultados reales: toneladas recuperadas, mermas reducidas e impacto ambiental positivo.",
  openGraph: {
    title: "Productos | Selekta",
    description:
      "Selekta opera en palta Hass, frijol chino, frijol castilla y pallar bebé. Resultados reales: toneladas recuperadas y mermas reducidas.",
    url: "https://www.selektafood.com/productos",
  },
};

export default function ProductosPage() {
  return (
    <>
      <Productos />
      <CTA />
    </>
  );
}
