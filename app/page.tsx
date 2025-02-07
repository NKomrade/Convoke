// app/page.tsx
import Hero from "@/app/home/Hero";
import About from "@/app/home/About";
import Past from "@/app/home/Past";
import Events from "@/app/home/Events";
import Navbar from "@/app/components/Navbar";
import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <section id="convoke">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="past">
        <Past />
      </section>
      <section>
        <div className="justify-center items-center mt-4">
          <TextHoverEffect text="Convoke" duration={1.5} />
        </div>
      </section>
    </div>
  );
}
