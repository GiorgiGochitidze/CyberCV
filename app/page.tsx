import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CtfSection } from "@/components/ctf-section";
import { WriteupsSection } from "@/components/writeups-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CtfSection />
      <WriteupsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
