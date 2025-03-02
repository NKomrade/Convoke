// 'use client'
// import React, { useState, useEffect } from 'react';

// const ScheduleButton = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation(prev => (prev + 1) % 360);
//     }, 20);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-[400px] flex items-center justify-center overflow-hidden relative">
//       {/* Large Rotating Crosshair Background */}
//       <div 
//         className="absolute w-72 h-72 md:w-96 md:h-96"
//         style={{
//           transform: `rotate(${rotation}deg)`
//         }}
//       >
//         <svg
//           viewBox="0 0 100 100"
//           className="w-full h-full opacity-20"
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="45"
//             fill="none"
//             stroke="#006462"
//             strokeWidth="2"
//           />
//           <line
//             x1="0"
//             y1="50"
//             x2="100"
//             y2="50"
//             stroke="#006462"
//             strokeWidth="2"
//           />
//           <line
//             x1="50"
//             y1="0"
//             x2="50"
//             y2="100"
//             stroke="#006462"
//             strokeWidth="2"
//           />
//           <circle
//             cx="50"
//             cy="50"
//             r="30"
//             fill="none"
//             stroke="#006462"
//             strokeWidth="1"
//           />
//           <circle
//             cx="50"
//             cy="50"
//             r="15"
//             fill="none"
//             stroke="#006462"
//             strokeWidth="1"
//           />
//         </svg>
//       </div>

//       {/* Glassmorphic Button */}
//       <button 
//         className="relative px-8 py-3 rounded-xl
//                    bg-[#006462]/20 backdrop-blur-md
//                    border border-[#006462]/30
//                    shadow-lg hover:shadow-xl
//                    transition-all duration-300
//                    hover:bg-[#006462]/30
//                    focus:outline-none focus:ring-2 focus:ring-[#006462]/50
//                    transform hover:scale-105
//                    group"
//       >
//         <div className="flex items-center space-x-3">
//           <span className="text-lg font-mono text-white tracking-wider uppercase">
//             Schedule
//           </span>
//           <svg 
//             className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M9 5l7 7-7 7" 
//             />
//           </svg>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default ScheduleButton;