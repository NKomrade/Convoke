// 'use client'
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         className="w-full bg-center relative"
//         style={{
//           backgroundImage: `url('/static/video.mp4')`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: windowWidth <= 768 ? 'cover' : '100%',
//           backgroundAttachment: 'fixed',
//           height: '100vh',
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute top-0 left-0 right-0 h-full bg-black/60" />
//         <div
//           className="absolute top-0 left-0 right-0 h-full"
//           style={{
//             background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 100%)",
//           }}
//         />

//         {/* Content */}
//         <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full z-10 px-4">
//           <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight text-center font-sans">
//             Convoke 2025
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client'
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [offsetY, setOffsetY] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setOffsetY(window.scrollY * 0.5);
//     };

//     window.addEventListener("scroll", handleScroll);
//     setIsVisible(true); // Trigger animation on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Animated Background Grid */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" 
//              style={{
//                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                                 linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//                backgroundSize: '50px 50px',
//              }} />
//       </div>

//       {/* Background Video with Parallax Effect */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
//         src="/static/video2.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           transform: `translateY(${offsetY}px)`,
//         }}
//       />

//       {/* Enhanced Overlay with Tech-inspired Gradient */}
//       <div className="absolute top-0 left-0 w-full h-full" />
//       <div
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       {/* Animated Lines */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent top-1/4 animate-[slide-right_3s_ease-in-out_infinite]" />
//         <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent top-3/4 animate-[slide-left_3s_ease-in-out_infinite]" />
//       </div>

//       {/* Content */}
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 px-4">
//         <div className={`transform transition-all duration-1000 ${
//           isVisible 
//             ? 'translate-y-0 opacity-100' 
//             : 'translate-y-10 opacity-0'
//         }`}>
//           <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-green-500 tracking-tight font-mono text-center mb-4 relative">
//             <span className="relative inline-block">
//               <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
//                 Convoke 2025
//               </span>
//               <span className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-800 blur opacity-30 animate-pulse" />
//             </span>
//           </h1>
          
//           {/* Animated Subtitle */}
//           <p className={`text-lg md:text-xl text-green-400 text-center font-mono opacity-0 transform transition-all duration-1000 delay-500 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             &lt; 007 /&gt;
//           </p>
//         </div>
//       </div>

//       {/* Tech Accent Elements */}
//       <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between text-green-500/30 font-mono text-sm">
//         <div>SYSTEM_ACTIVE: TRUE</div>
//         <div>INIT_SEQUENCE: COMPLETE</div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { Scan, Target, Shield, Lock } from 'lucide-react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('00:00:00');
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure it only runs on the client

    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({
        x: parseFloat(((e.clientX / window.innerWidth) * 100).toFixed(2)),
        y: parseFloat(((e.clientY / window.innerHeight) * 100).toFixed(2)),
      });
    };

    const updateTime = () => {
      const now = new Date();
      setTime(now.toTimeString().split(' ')[0]);

      // Calculate days until March 20th, 2025
      const targetDate = new Date('2025-03-20');
      const timeDiff = targetDate.getTime() - now.getTime();
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(daysRemaining);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const timeInterval = setInterval(updateTime, 1000);
    setIsVisible(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timeInterval); // Clean up the interval to prevent memory leaks
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Scanning Grid Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src="/video.mp4" // Ensure this path is correct for production
        autoPlay
        loop
        muted
        playsInline
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0" />

      {/* Radar Scan Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 border-2 border-[#006462] rounded-full animate-ping" />
        <div className="absolute inset-0 border border-[#006462] rounded-full animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Security Badge */}
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 text-[#006462]-500">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-mono text-white">SECURITY LEVEL: MAXIMUM</span>
            <Lock className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Main Title */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight text-center mb-4">
            <span className="relative">CONVOKE</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006462] to-[#006462]/50">2025</span>
          </h1>

          {/* Days Left Counter */}
          <div className="text-2xl md:text-3xl text-[#006462] font-mono text-center mt-4 animate-pulse">
            {daysLeft} DAYS REMAINING
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#006462] to-transparent top-1/4 animate-[slide-right_3s_ease-in-out_infinite]" />
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#006462] to-transparent top-3/4 animate-[slide-left_3s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-4 left-4 font-mono text-xs text-[#006462]">
          <div>TIME: {time}</div>
          <div>LAT: {coordinates.y}°N</div>
          <div>LONG: {coordinates.x}°E</div>
        </div>

        {/* Top Right */}
        <div className="absolute top-4 right-4 font-mono text-xs text-[#006462] text-right">
          <div>SECURITY: ACTIVE</div>
          <div>ENCRYPTION: ENABLED</div>
          <div>CLEARANCE: LEVEL 7</div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-4 left-4 font-mono text-xs text-[#006462]">
          <Target className="w-4 h-4 mb-1" />
          <div>TARGET ACQUIRED</div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-4 right-4 font-mono text-xs text-[#006462]">
          <Scan className="w-4 h-4 mb-1 ml-auto" />
          <div>SCANNING...</div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#006462]" />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#006462]" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#006462]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#006462]" />
      </div>
    </div>
  );
}
