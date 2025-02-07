'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('convoke');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const sections = ['convoke', 'about', 'events', 'past'];
      let currentSection = 'convoke';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'convoke', label: 'Convoke' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'past', label: 'Past' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto items-center justify-between">
        <div className={`flex justify-center items-center 
          ${isMobile ? 'space-x-12 sm:space-x-8' : 'space-x-12 md:space-x-24 lg:space-x-52'}`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex flex-col items-center"
            >
              <span className={`text-white font-medium tracking-wide hover:opacity-80 transition-opacity
                text-xs sm:text-sm md:text-base
                ${activeSection === item.id ? 'font-semibold' : 'font-normal'}
                font-poppins`}
              >
                {item.label}
              </span>
              <span 
                className={`mt-1 md:mt-2 h-0.5 md:h-1 
                  ${isMobile ? 'w-0.5 md:w-1' : 'w-1'}
                  rounded-full transition-all duration-300 ease-in-out
                  ${activeSection === item.id ? 'bg-white opacity-100' : 'bg-transparent opacity-0'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
