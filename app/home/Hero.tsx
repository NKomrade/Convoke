'use client'
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Quote } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("Convoke");
  const [windowWidth, setWindowWidth] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > 200) {
        setTitle("Convoke 2025");
      } else {
        setTitle("Convoke");
      }

      // Start scrolling the hero component after the Explore button appears
      if (currentScrollY > 150) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackgroundStyles = () => {
    const isMobile = windowWidth <= 768;
    const initialScale = isMobile ? 'cover' : '100%';
    const maxZoom = isMobile ? 'cover' : '150%';
    const zoomThreshold = 200;

    let scale;
    let yPosition = '50%';

    if (scrollY < zoomThreshold) {
      scale = isMobile ? 'cover' : `${100 + (scrollY * 0.25)}%`;
    } else {
      scale = maxZoom;
      const scrollProgress = (scrollY - zoomThreshold) * 0.1;
      yPosition = `calc(50% + ${scrollProgress}px)`;
    }

    return {
      backgroundSize: scale,
      backgroundPosition: isMobile ? 'center center' : `center ${yPosition}`,
    };
  };

  const isVisible = scrollY < window.innerHeight;

  return (
    <div>
      <div
        className="w-full bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          height: '200vh',
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? 0 : 'auto',
          ...getBackgroundStyles(),
          transition: "background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-position 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Overlays that only cover the viewport height */}
        {isVisible && (
          <>
            <div 
              className="fixed top-0 left-0 right-0 h-screen bg-black/60"
              style={{
                opacity: 1 - (scrollY / window.innerHeight),
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              className="fixed top-0 left-0 right-0 h-screen"
              style={{
                background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
                opacity: 1 - (scrollY / window.innerHeight),
                transition: "opacity 0.3s ease-out",
              }}
            />
          </>
        )}

        {isVisible && (
          <div className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center h-screen z-10 px-4">
            <h1 
              className={`text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight text-center
                ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                transition-all duration-1000 ease-out font-sans`}
            >
              {title}
            </h1>

            <p 
              className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-md text-center
                ${scrollY > 100 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                transition-all duration-1000 delay-300 ease-out font-sans`}
            >
              Your gateway to amazing events
            </p>

            <button 
              className={`mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full
                text-sm sm:text-base font-medium hover:bg-opacity-90 transform hover:scale-105
                transition-all duration-300
                ${scrollY > 150 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Explore Events
            </button>
          </div>
        )}
      </div>
      <div style={{ backgroundColor: 'black', height: '80vh' }} className="flex flex-col items-center justify-center text-center">
        <Quote className="w-8 h-8 mx-auto text-white" />
        <TextGenerateEffect words="Experience innovation at its peak with Convoke 2025. A gathering of minds, ideas, and inspirations. Empower your passion, ignite your future. Join us for transformative events and workshops." className="text-4xl" />
        <Quote className="w-8 h-8 mx-auto text-white rotate-180" />
      </div>
    </div>
  );
}