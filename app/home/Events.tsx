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
            className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide"
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