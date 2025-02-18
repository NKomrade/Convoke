// 'use client'
// import { useState } from 'react';
// import { X } from 'lucide-react';

// const images = [
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ];

// export default function GalleryPage() {
//   const [isZoomed, setIsZoomed] = useState(false);

//   const toggleZoom = () => {
//     setIsZoomed(!isZoomed);
//   };

//   return (
//     <div>
//       <div className="relative">
//         <button
//           onClick={toggleZoom}
//           className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-black text-white rounded-full shadow flex items-center justify-center transition-all duration-300 hover:bg-black/90"
//           style={{ top: '50%' }}
//         >
//           {isZoomed ? (
//             <X size={24} className="transition-transform duration-300" />
//           ) : (
//             <span className="transition-opacity duration-300">View Gallery</span>
//           )}
//         </button>

//         <div className={`grid grid-cols-2 md:grid-cols-4`}>
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 width={800}
//                 height={600}
//                 className={`w-full h-40 md:h-60 object-cover transition-transform duration-500 ease-in-out ${isZoomed ? 'scale-100' : 'scale-50'}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { X } from 'lucide-react';

// const images = [
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop',
//   'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop'
// ];

// export default function GalleryPage() {
//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-100 grid-rows-100 h-screen grid-auto-flow-dense">
//         {images.map((src, index) => {
//           const gridClasses = [
//             'col-span-30 row-span-25', 
//             'col-span-20 row-span-25', 
//             'col-span-25 row-span-25', 
//             'col-span-25 row-span-25', 
//             'col-span-30 row-span-30', 
//             'col-span-40 row-span-30', 
//             'col-span-30 row-span-30',
//             'col-span-40 row-span-20',
//             'col-span-40 row-span-20',
//             'col-span-20 row-span-20',
//           ];

//           return (
//             <div key={index} className={`overflow-hidden ${gridClasses[index]}`}>
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const images: string[] = [
  '/Gallery/2.jpg',
  '/Gallery/12.jpg',
  '/Gallery/5.jpg',
  '/Gallery/4.jpg',
  '/Gallery/3.jpg',
  '/Gallery/9.jpg',
  '/Gallery/8.jpg',
  '/Gallery/7.jpg',
  '/Gallery/1.jpeg',
  '/Gallery/11.jpg',
  '/Gallery/10.jpg',
];

// Desktop spans remain the same
const desktopSpans: string[] = [
  'col-span-3', 'col-span-3', 'col-span-3', 'col-span-3',
  'col-span-4', 'col-span-4', 'col-span-4',
  'col-span-3', 'col-span-3', 'col-span-3', 'col-span-3'
];

// Mobile spans configuration
const mobileSpans: string[] = [
  'col-span-3', 'col-span-3',
  'col-span-3', 'col-span-3',
  'col-span-3', 'col-span-3',
  'col-span-6',
  'col-span-3', 'col-span-3',
  'col-span-3', 'col-span-3'
];

export default function GalleryPage() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Handle window width in useEffect
  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 768);
    updateSize(); // Set initial value
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleZoom = () => setIsZoomed((prev) => !prev);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <button
          onClick={toggleZoom}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:px-3 md:py-3 px-2 py-2 bg-white/80 text-black rounded-full shadow flex items-center justify-center transition-all duration-300 hover:bg-white"
          style={{ top: '50%' }}
        >
          {isZoomed ? (
            <X size={24} className="transition-transform w-4 h-3 duration-300" />
          ) : (
            <span className="transition-opacity md:text-[16px] text-[12px] duration-300 px-4">
              View Gallery
            </span>
          )}
        </button>

        <div className="grid md:grid-cols-12 grid-cols-6 p-4 gap-1">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${isDesktop ? desktopSpans[index] : mobileSpans[index]}`}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                className={`w-full h-full rounded-md object-cover transition-transform duration-500 ease-in-out 
                  ${isZoomed ? 'scale-100' : 'scale-50'}
                  ${index === 4 ? 'md:aspect-video aspect-square' : 'aspect-square'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
