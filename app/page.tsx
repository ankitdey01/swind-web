import { Nav } from "@/app/components/Nav";
import { Hero } from "@/app/components/Hero";
import { Marquee } from "@/app/components/Marquee";
import { Features } from "@/app/components/Features";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Faq } from "@/app/components/Faq";
import { Cta } from "@/app/components/Cta";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
