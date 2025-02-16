// 'use client'
// import { useEffect, useState } from 'react';

// interface NavItem {
//   id: string;
//   label: string;
// }

// interface HoverPosition {
//   left: number;
//   width: number;
//   show: boolean;
// }

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState<string>('convoke');
//   const [isMobile, setIsMobile] = useState<boolean>(false);
//   const [hoverPosition, setHoverPosition] = useState<HoverPosition>({ left: 0, width: 0, show: false });
//   const [activePosition, setActivePosition] = useState<Omit<HoverPosition, 'show'>>({ left: 0, width: 0 });

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     const handleScroll = () => {
//       const sections = ['events', 'sponsors', 'gallery', 'team'];
//       let currentSection = 'convoke';

//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//             currentSection = section;
//           }
//         }
//       });

//       setActiveSection(currentSection);

//       // Update active section position
//       if (currentSection !== 'convoke') {
//         const activeButton = document.querySelector(`[data-section="${currentSection}"]`);
//         if (activeButton) {
//           const rect = activeButton.getBoundingClientRect();
//           const navRect = document.querySelector('nav')?.getBoundingClientRect();
//           if (navRect) {
//             setActivePosition({
//               left: rect.left - navRect.left,
//               width: rect.width,
//             });
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   const handleMouseEnter = (sectionId: string) => {
//     const button = document.querySelector(`[data-section="${sectionId}"]`);
//     if (button) {
//       const rect = button.getBoundingClientRect();
//       const navRect = document.querySelector('nav')?.getBoundingClientRect();
//       if (navRect) {
//         setHoverPosition({
//           left: rect.left - navRect.left,
//           width: rect.width,
//           show: true
//         });
//       }
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoverPosition(prev => ({ ...prev, show: false }));
//   };

//   const scrollToSection = (section: string) => {
//     const element = document.getElementById(section);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const navItems: NavItem[] = [
//     { id: 'events', label: 'Events' },
//     { id: 'sponsors', label: 'Sponsors' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'team', label: 'Team' }
//   ];

//   return (
//     <nav className="fixed left-1/2 -translate-x-1/2 top-4 sm:top-6 md:top-8 z-40">
//       <div className="relative backdrop-blur-md border-2 border-[#E9EBDD] rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2">
//         {/* Hover effect background */}
//         <div
//           className="absolute transition-all duration-300 ease-out"
//           style={{
//             left: `${hoverPosition.left}px`,
//             width: `${hoverPosition.width}px`,
//             height: '70%',
//             top: '15%',
//             background: 'rgba(0, 100, 98, 1)',
//             borderRadius: '24px',
//             opacity: hoverPosition.show ? 1 : 0,
//           }}
//         />

//         {/* Active section background */}
//         <div
//           className="absolute transition-all duration-300 ease-out"
//           style={{
//             left: `${activePosition.left}px`,
//             width: `${activePosition.width}px`,
//             height: '70%',
//             top: '15%',
//             background: 'rgba(0, 100, 98, 1)',
//             borderRadius: '24px',
//             opacity: activeSection !== 'convoke' ? 1 : 0,
//           }}
//         />

//         <div className={`flex items-center ${isMobile ? 'space-x-3 sm:space-x-4' : 'space-x-8 md:space-x-12'}`}>
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               data-section={item.id}
//               onClick={() => scrollToSection(item.id)}
//               onMouseEnter={() => handleMouseEnter(item.id)}
//               onMouseLeave={handleMouseLeave}
//               className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 z-10"
//             >
//               <span className={`text-[#B7D0D0] font-medium tracking-wide transition-all duration-300 text-xs sm:text-sm md:text-base font-mono mix-blend-difference`}>
//                 {item.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
'use client'
import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface HoverPosition {
  left: number;
  width: number;
  show: boolean;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('convoke');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoverPosition, setHoverPosition] = useState<HoverPosition>({ left: 0, width: 0, show: false });
  const [activePosition, setActivePosition] = useState<Omit<HoverPosition, 'show'>>({ left: 0, width: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const sections = ['events', 'sponsors', 'gallery', 'team'];
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

      if (currentSection !== 'convoke') {
        const activeButton = document.querySelector(`[data-section="${currentSection}"]`);
        if (activeButton) {
          const rect = activeButton.getBoundingClientRect();
          const navRect = document.querySelector('nav')?.getBoundingClientRect();
          if (navRect) {
            setActivePosition({
              left: rect.left - navRect.left,
              width: rect.width,
            });
          }
        }
      }

      // Hide navbar when at the top of the page (only for mobile)
      if (isMobile) {
        if (window.scrollY < 50) {
          setIsVisible(false);
        } else if (window.scrollY > lastScrollY) {
          setIsVisible(true);
        }
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleMouseEnter = (sectionId: string) => {
    const button = document.querySelector(`[data-section="${sectionId}"]`);
    if (button) {
      const rect = button.getBoundingClientRect();
      const navRect = document.querySelector('nav')?.getBoundingClientRect();
      if (navRect) {
        setHoverPosition({
          left: rect.left - navRect.left,
          width: rect.width,
          show: true
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(prev => ({ ...prev, show: false }));
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems: NavItem[] = [
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'team', label: 'Team' }
  ];

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 top-4 sm:top-6 md:top-8 z-40 transition-opacity duration-300 ${isMobile && !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative backdrop-blur-md border-2 border-[#E9EBDD] rounded-full px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2">
        {/* Hover effect background */}
        <div
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${hoverPosition.left}px`,
            width: `${hoverPosition.width}px`,
            height: '70%',
            top: '15%',
            background: 'rgba(0, 100, 98, 1)',
            borderRadius: '24px',
            opacity: hoverPosition.show ? 1 : 0,
          }}
        />

        {/* Active section background */}
        <div
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${activePosition.left}px`,
            width: `${activePosition.width}px`,
            height: '70%',
            top: '15%',
            background: 'rgba(0, 100, 98, 1)',
            borderRadius: '24px',
            opacity: activeSection !== 'convoke' ? 1 : 0,
          }}
        />

        <div className={`flex items-center ${isMobile ? 'space-x-3 sm:space-x-4' : 'space-x-8 md:space-x-12'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              data-section={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className="relative px-2 md:px-4 py-2 md:py-2 z-10"
            >
              <span className={`text-[#B7D0D0] font-medium tracking-wide transition-all duration-300 text-xs sm:text-sm md:text-base font-mono mix-blend-difference`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
