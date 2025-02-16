'use client'

import { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = ['Robot', 'Tech', 'Gaming', 'Extras'];

const eventsData = {
  Robot: [
    { title: 'Line Follower', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Micro Mouse', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Robowars', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Robo Soccer', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Custom', image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ],
  Tech: [
    { title: 'Hackathon', image: 'https://source.unsplash.com/random/800x600?technology' },
    { title: 'Tech Quiz', image: 'https://source.unsplash.com/random/800x600?startup' },
    { title: 'Treasure Hunt', image: 'https://source.unsplash.com/random/800x600?digital' },
    { title: 'Competitive Programming', image: 'https://source.unsplash.com/random/800x600?futuristic' }
  ],
  Gaming: [
    { title: 'Fifa', image: 'https://source.unsplash.com/random/800x600?technology' },
    { title: 'Rocket League', image: 'https://source.unsplash.com/random/800x600?startup' },
    { title: 'Tekken', image: 'https://source.unsplash.com/random/800x600?digital' },
    { title: 'Mini Militia', image: 'https://source.unsplash.com/random/800x600?futuristic' },
    { title: 'Mortal Kombat XI', image: 'https://source.unsplash.com/random/800x600?futuristic' }
  ],
  Extras: [
    { title: 'Creative Tech Mixer', image: 'https://source.unsplash.com/random/800x600?creative' },
    { title: 'Networking Event', image: 'https://source.unsplash.com/random/800x600?networking' },
    { title: 'Innovation Workshop', image: 'https://source.unsplash.com/random/800x600?workshop' },
    { title: 'Tech Community Meetup', image: 'https://source.unsplash.com/random/800x600?meetup' }
  ]
};

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Robot');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="items-center justify-center h-screen p-4 mt-10 flex">
      <div className="w-full mx-auto">
        <nav className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-lg transition duration-300 
                ${activeCategory === category 
                  ? 'bg-white text-black font-mono scale-105' 
                  : 'bg-transparent text-white border font-mono border-white/30 hover:bg-white/10'}
              `}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 hidden group-hover:block"
          >
            <ChevronLeft className="text-white" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-6 scroll-smooth scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {eventsData[activeCategory].map((event, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 h-96 bg-white/10 rounded-xl overflow-hidden shadow-xl transition duration-300 hover:scale-105"
                style={{ scrollSnapAlign: 'center' }}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 font-mono">{event.title}</h3>
                  <p className="text-sm opacity-70">Discover the latest in technology and innovation</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 hidden group-hover:block"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

// 'use client'
// import { useState, useEffect, useRef } from 'react';
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// const categories = ['Robot', 'Tech', 'Gaming', 'Extras'];

// const eventsData = {
//   Robot: [
//     { title: 'Line Follower', image: '/api/placeholder/800/600' },
//     { title: 'Micro Mouse', image: '/api/placeholder/800/600' },
//     { title: 'Robowars', image: '/api/placeholder/800/600' },
//     { title: 'Robo Soccer', image: '/api/placeholder/800/600' },
//     { title: 'Custom', image: '/api/placeholder/800/600' }
//   ],
//   Tech: [
//     { title: 'Hackathon', image: '/api/placeholder/800/600' },
//     { title: 'Tech Quiz', image: '/api/placeholder/800/600' },
//     { title: 'Treasure Hunt', image: '/api/placeholder/800/600' },
//     { title: 'Competitive Programming', image: '/api/placeholder/800/600' }
//   ],
//   Gaming: [
//     { title: 'Fifa', image: '/api/placeholder/800/600' },
//     { title: 'Rocket League', image: '/api/placeholder/800/600' },
//     { title: 'Tekken', image: '/api/placeholder/800/600' },
//     { title: 'Mini Militia', image: '/api/placeholder/800/600' },
//     { title: 'Mortal Kombat XI', image: '/api/placeholder/800/600' }
//   ],
//   Extras: [
//     { title: 'Creative Tech Mixer', image: '/api/placeholder/800/600' },
//     { title: 'Networking Event', image: '/api/placeholder/800/600' },
//     { title: 'Innovation Workshop', image: '/api/placeholder/800/600' },
//     { title: 'Tech Community Meetup', image: '/api/placeholder/800/600' }
//   ]
// };

// const Events = () => {
//   const [activeCategory, setActiveCategory] = useState('Robot');
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const autoScrollTimer = useRef(null);
//   const carouselRef = useRef(null);

//   const getExpandedArray = (arr) => {
//     return [...arr, ...arr, ...arr];
//   };

//   const calculateVisibleIndices = (centerIndex, totalLength) => {
//     const originalLength = totalLength / 3;
//     let normalizedIndex = centerIndex;
    
//     if (centerIndex >= originalLength * 2) {
//       normalizedIndex = centerIndex - originalLength * 2;
//     } else if (centerIndex >= originalLength) {
//       normalizedIndex = centerIndex - originalLength;
//     }
    
//     return {
//       normalizedIndex,
//       visualIndex: centerIndex
//     };
//   };

//   const updateCategoryFromIndex = (index) => {
//     const normalizedIndex = index % (eventsData[activeCategory].length);
//     const currentEventTitle = eventsData[activeCategory][normalizedIndex].title;
    
//     // Find which category contains this event
//     for (const category of categories) {
//       if (eventsData[category].some(event => event.title === currentEventTitle)) {
//         setActiveCategory(category);
//         break;
//       }
//     }
//   };

//   const resetAutoScroll = () => {
//     if (autoScrollTimer.current) {
//       clearInterval(autoScrollTimer.current);
//     }
//     if (isAutoScrolling) {
//       autoScrollTimer.current = setInterval(() => {
//         handleScroll('right');
//       }, 4000);
//     }
//   };

//   useEffect(() => {
//     resetAutoScroll();
//     return () => {
//       if (autoScrollTimer.current) {
//         clearInterval(autoScrollTimer.current);
//       }
//     };
//   }, [isAutoScrolling, activeCategory]);

//   const handleScroll = (direction) => {
//     setIsAutoScrolling(false);
//     const expandedLength = eventsData[activeCategory].length * 3;
//     let newIndex = direction === 'left' 
//       ? activeIndex - 1 
//       : activeIndex + 1;

//     if (newIndex < 0) {
//       newIndex = expandedLength - 1;
//     } else if (newIndex >= expandedLength) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//     updateCategoryFromIndex(newIndex);
//   };

//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - carouselRef.current.offsetLeft);
//     setScrollLeft(carouselRef.current.scrollLeft);
//     setIsAutoScrolling(false);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//     const cardWidth = carouselRef.current.offsetWidth / 5;
//     const scrollOffset = carouselRef.current.scrollLeft;
//     const newIndex = Math.round(scrollOffset / cardWidth);
//     setActiveIndex(newIndex);
//     updateCategoryFromIndex(newIndex);
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <div className="items-center justify-center min-h-screen p-4 mt-10 flex bg-black">
//       <div className="w-full max-w-7xl mx-auto">
//         <nav className="flex justify-center space-x-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => {
//                 setActiveCategory(category);
//                 setActiveIndex(eventsData[category].length);
//                 setIsAutoScrolling(true);
//               }}
//               className={`
//                 px-6 py-3 rounded-lg transition-all duration-500 text-lg
//                 ${activeCategory === category 
//                   ? 'bg-white text-black font-mono scale-110 shadow-lg' 
//                   : 'bg-transparent text-white border font-mono border-white/30 hover:bg-white/10'}
//               `}
//             >
//               {category}
//             </button>
//           ))}
//         </nav>

//         <div className="relative group px-4">
//           <button 
//             onClick={() => handleScroll('left')} 
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
//           >
//             <ChevronLeft className="text-white w-6 h-6" />
//           </button>
          
//           <div 
//             ref={carouselRef}
//             className="overflow-hidden mx-8"
//             onMouseDown={handleDragStart}
//             onMouseLeave={() => setIsDragging(false)}
//             onMouseUp={handleDragEnd}
//             onMouseMove={handleDragMove}
//           >
//             <div 
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${(activeIndex * (100 / 5))}%)`,
//                 gap: '1rem'
//               }}
//             >
//               {getExpandedArray(eventsData[activeCategory]).map((event, index) => {
//                 const { normalizedIndex } = calculateVisibleIndices(activeIndex, eventsData[activeCategory].length * 3);
//                 const isCenter = index === activeIndex;
//                 const distance = Math.abs(index - activeIndex);
//                 const scale = isCenter ? 1.2 : Math.max(0.7, 1 - (distance * 0.15));
//                 const zIndex = isCenter ? 10 : 1;
                
//                 return (
//                   <div 
//                     key={index}
//                     className="flex-shrink-0 w-1/5 transition-all duration-500"
//                     style={{
//                       transform: `scale(${scale})`,
//                       zIndex
//                     }}
//                   >
//                     <div className="bg-white/10 rounded-xl overflow-hidden shadow-xl">
//                       <div className="relative aspect-[4/5]">
//                         <img 
//                           src={event.image} 
//                           alt={event.title} 
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                           <h3 className="text-lg font-bold font-mono text-white">
//                             {event.title}
//                           </h3>
//                           {isCenter && (
//                             <p className="text-sm text-white/80 mt-2">
//                               Discover the latest in technology and innovation
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
          
//           <button 
//             onClick={() => handleScroll('right')} 
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
//           >
//             <ChevronRight className="text-white w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;