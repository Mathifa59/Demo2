import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { JoisCam } from "@/components/JoisCam";
import { Benefits } from "@/components/Benefits";
import { Crops } from "@/components/Crops";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <JoisCam />
        <Benefits />
        <Crops />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
