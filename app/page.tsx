// app/page.tsx
import Hero from "@/app/home/Hero";
import About from "@/app/home/About";
import OurHistory from "@/app/home/OurHistory";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <OurHistory />
    </div>
  );
}
