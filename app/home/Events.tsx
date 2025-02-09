'use client'

import { useState, useRef } from 'react';

const categories = ['Robot', 'Tech', 'Extras'];

const eventsData = {
  Robot: ['Event 1', 'Event 2', 'Event 3', 'Event 4'],
  Tech: ['Event 5', 'Event 6', 'Event 7', 'Event 8'],
  Extras: ['Event 9', 'Event 10', 'Event 11', 'Event 12'],
};

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Robot');
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="mt-10 text-white h-screen">
      <nav className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
              activeCategory === category
                ? 'bg-white text-black'
                : 'bg-black border border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto space-x-4 p-4 cursor-grab active:cursor-grabbing select-none scrollbar-thin scrollbar-thumb-white scrollbar-track-black"
      >
        {eventsData[activeCategory].map((event, index) => (
          <div
            key={index}
            className="w-screen h-[400px] bg-white text-black rounded-lg shadow-md p-4 flex items-center justify-center text-xl"
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
