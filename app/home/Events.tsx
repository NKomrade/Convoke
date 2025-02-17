'use client'
import { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const categories = ['Robot', 'Tech', 'Gaming', 'Misc'] as const;

const categoryBackgrounds = {
  Robot: '/Events/robot/Robot.jpg',
  Tech: '/Events/tech/Tech.jpg',
  Gaming: '/Events/gaming/Gaming.jpg',
  Misc: '/Events/extras/Extras.jpg'
} as const;

const eventsData = {
  Robot: [
    { title: 'Line Follower', description: 'Build and program robots that can follow paths autonomously', image: '/Events/robot/LFr.jpg' },
    { title: 'Micro Mouse', description: 'Create tiny robots that can solve complex mazes', image: '/Events/robot/micromouse.jpg' },
    { title: 'Robowars', description: 'Design battle robots and compete in intense matches', image: '/Events/robot/robowars.jpg' },
    { title: 'Robo Soccer', description: 'Program robots to play soccer in teams', image: '/Events/robot/robosoccer.jpg' },
    { title: 'Custom', description: 'A custome soccer game.', image: '/Events/robot/robosoccer.jpg' }
  ],
  Tech: [
    { title: 'Hackathon', description: 'Build innovative solutions in 24 hours', image: '/Events/tech/hashhacks.png' },
    { title: 'Tech Talks', description: 'Learn from industry experts and thought leaders', image: '/Events/tech/techtalks.png' },
    { title: 'Competitive Programming', description: 'Solve complex problems under time pressure', image: '/Events/tech/competitiveprogramming.jpg' }
  ],
  Gaming: [
    { title: 'FC25', description: 'Compete in the ultimate football gaming championship', image: '/Events/gaming/fifa.jpg' },
    { title: 'Mortal Kombat', description: 'Test your fighting game skills', image: '/Events/gaming/mortal.jpg' },
    { title: 'Mini Militia', description: 'Join the ground.', image: '/Events/gaming/minimilitia.jpg' },
    { title: 'Tekken', description: 'Challenge for the arcade.', image: '/Events/gaming/tekken.jpg' }
  ],
  Misc: [
    { title: 'Biz Tech', description: 'Solve real-world business cases with technology', image: '/Events/extras/biztech.jpeg' },
    { title: 'Treasure Hunt', description: 'Navigate through technical clues and puzzles', image: '/Events/extras/treasurehunt.jpg' },
    { title: 'Sports quiz', description: 'Trade virtual stocks and learn market dynamics', image: '/Events/extras/sportsquiz.jpg' },
    { title: 'General quiz', description: 'Trade virtual stocks and learn market dynamics', image: '/Events/extras/GK.png' },
    { title: 'Stock Market Simulator', description: 'Trade virtual stocks and learn market dynamics', image: '/Events/extras/stockmarket.jpeg' },
    { title: 'Poker bots', description: 'Trade virtual stocks and learn market dynamics', image: '/Events/extras/poker.jpg' },
    { title: 'Case study', description: 'Trade virtual stocks and learn market dynamics', image: '/Events/extras/casestudy.jpg' }
  ]
} as const;

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof eventsData>('Robot');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Black Fade */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out transform scale-100"
        style={{
          backgroundImage: `url(${categoryBackgrounds[activeCategory]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-sm from-black/50 via-transparent to-black/50"></div>

      <div className="relative z-10 px-4 py-12">
        {/* Category Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-6xl font-bold text-white mb-4 font-mono tracking-tighter">
              {activeCategory}
              <span className="text-[#48D1CC]">.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Explore our {activeCategory.toLowerCase()} events and competitions
            </p>
          </div>

          <div className="flex flex-wrap md:gap-4 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`md:px-6 md:py-3 px-4 py-3 rounded-full text-sm md:font-medium font-sm transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-[#48D1CC] text-black shadow-lg shadow-[#48D1CC]/30 scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Carousel */}
        <div className="relative group">
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 pb-12 scroll-smooth scrollbar-hide"
          >
            {eventsData[activeCategory].map((event, index) => (
              <div key={index} className="relative flex-shrink-0 w-96 group/card">
                <div 
                  className="h-[28rem] rounded-xl overflow-hidden shadow-lg transition-all duration-500 bg-white/10 hover:shadow-[#48D1CC]/30 hover:scale-105"
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                        {event.title}
                      </h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                    <button className="flex items-center gap-2 text-[#48D1CC] hover:text-white transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform transform hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
