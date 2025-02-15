// app/page.tsx
import Hero from "@/app/home/Hero";
import Stats from "@/app/home/Stats";
import Events from "@/app/home/Events";
import Sponsors from "@/app/home/Sponsors";
import Gallery from "@/app/home/Gallery";
import Team from "@/app/home/Team";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";


export default function HomePage() {
  return (
    <div className="bg-black">
      <Navbar />
      <section id="convoke">
        <Hero />
      </section>
      <section>
        <Stats />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="team">
        <Team />
      </section>
      <section className="hidden md:block">
        <div className="justify-center items-center mt-4 mx-8">
          <TextHoverEffect text="Convoke" duration={0.5} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
