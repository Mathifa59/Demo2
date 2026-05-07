import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selekta — Selección automatizada para la agroindustria",
  description:
    "En Selekta desarrollamos soluciones inteligentes que optimizan la selección de frutas y hortalizas, reduciendo mermas y aumentando la rentabilidad de tu empresa.",
  icons: {
    icon: "/assets/logoselekta.png",
    apple: "/assets/SELEKTA_fondo_blanco.png",
  },
  openGraph: {
    title: "Selekta — Selección automatizada para la agroindustria",
    description:
      "Tecnología de visión artificial que clasifica frutas con precisión superior al humano, reduciendo merma y aumentando rentabilidad hasta en 20%.",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/assets/SELEKTA_fondo_blanco.png",
        width: 1080,
        height: 1080,
        alt: "Selekta — Selección Automatizada",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Selekta — Selección automatizada para la agroindustria",
    description:
      "Tecnología de visión artificial que clasifica frutas con precisión superior al humano.",
    images: ["/assets/SELEKTA_fondo_blanco.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
