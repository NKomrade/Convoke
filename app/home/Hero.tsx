'use client'
import { useEffect, useState } from "react";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className="w-full bg-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: windowWidth <= 768 ? 'cover' : '100%',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 h-full bg-black/60" />
        <div
          className="absolute top-0 left-0 right-0 h-full"
          style={{
            background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full z-10 px-4">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight text-center font-sans">
            Convoke 2025
          </h1>
        </div>
      </div>
    </div>
  );
}