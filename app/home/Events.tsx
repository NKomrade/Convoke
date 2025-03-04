'use client'
import { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['Tech', 'Robotics', 'Gaming', 'Misc'] as const;

const categoryBackgrounds = {
  Tech: '/Events/tech/Tech.jpg',
  Robotics: '/Events/robot/Robot.jpg',
  Gaming: '/Events/gaming/Gaming.jpg',
  Misc: '/Events/extras/Extras.jpg'
} as const;

const eventsData = {
  Tech: [
    { title: 'Hackathon', description: 'Build innovative solutions in 24 hours', image: '/Events/tech/hashhacks.png', link: 'https://hashhacks.convoke.in' },
    { title: 'Tech Talks', description: "Insights from tech's brightest minds. Learn today, lead tomorrow.", image: '/Events/tech/techtalks.png', link: '/events/tech-talks' },
    { title: 'Competitive Programming', description: 'Logic, speed, and problem-solving grit. Crack the code, conquer the challenge', image: '/Events/tech/competitiveprogramming.jpg', link: '/events/competitive-programming' }
  ],
  Robotics: [
    { title: 'Line Follower', description: 'Precision on track, speed in control. Follow the line, claim the win.', image: '/Events/robot/LFr.jpg', link: 'https://unstop.com/p/line-follower-robot-cluster-innovation-centre-ducic-university-of-delhi-du-delhi-1413512' },
    { title: 'Micro Mouse', description: 'Maze of twists, turns, and tech. Smartest bot finds the fastest path.', image: '/Events/robot/micromouse.jpg', link: 'https://unstop.com/p/micromouse-competition-convoke-cluster-innovation-centre-ducic-university-of-delhi-du-delhi-1413511' },
    { title: 'Robowars', description: 'Sparks fly, metal collides. One bot stands, the rest fall.', image: '/Events/robot/robowars.jpg', link: '/events/robowars' },
    { title: 'Robo Soccer', description: 'Robots, goals, and endless thrill. Score, defend, and dominate the field.', image: '/Events/robot/robosoccer.jpg', link: 'https://unstop.com/p/robo-soccer-competition-convoke-cluster-innovation-centre-ducic-university-of-delhi-du-delhi-1413841' }
  ],
  Gaming: [
    { title: 'FC24', description: 'Virtual pitch, real excitement. Master the game, score the glory.', image: '/Events/gaming/fc24.jpg', link: 'https://forms.gle/KLmJBErAoYTQGzQJ9' },
    { title: 'Mortal Kombat', description: 'Fight with skill, finish with flair. Only the strongest survive.', image: '/Events/gaming/mortal.jpg', link: 'https://forms.gle/Nk79BZyxTCuJXmCQA' },
    { title: 'Rocket League', description: 'Fast, fun, and fiercely competitive. Survive the chaos, dominate the field.', image: '/Events/gaming/rocket.jpg', link: 'https://forms.gle/jhquM8TQhKZfphc58' },
    { title: 'Tekken', description: 'Precision, power, and perfect combos. Fight hard, win harder.', image: '/Events/gaming/tekken.jpg', link: 'https://forms.gle/kgtPnUNmi9hVhQvR8' }
  ],
  Misc: [
    { title: 'Sci Biz Tech', description: 'Business, tech, and a battle of wits. Answer smart, lead the charts.', image: '/Events/extras/scibiztech.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSetnDUZ15qPPwLixHf6fymqA6KzJPF4Fb9sOhevz1H4ZvYuTg/viewform' },
    { title: 'Treasure Hunt', description: 'Clues, puzzles, and a race against time. Think fast, find faster.', image: '/Events/extras/treasurehunt.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdLZslDOEC-lddjF0SsaCSWGGZMh2of9UIndpwGJM8zQ26Sww/viewform?usp=header' },
    { title: 'Escape Room', description: 'Get ready for a thrill-packed challenge with puzzles and hidden clues! Can you crack the codes and escape in time?', image: '/Events/extras/escaperoom.jpg', link: 'https://forms.gle/1GcuGnrwabb9SJyGA' },
    { title: 'Pop Culture Quiz', description: 'Think you’re a pop culture expert? Join our ultimate quiz and put your knowledge to the test!', image: '/Events/extras/pop_quiz.jpeg', link: 'https://docs.google.com/forms/d/e/1FAIpQLScmQDjqqrFxLhXUR0IW8f5vrCHE8CeQQvOi5dS3QhMfTJNdPQ/viewform' },
    { title: 'Sports Quiz', description: 'Are you a true sports fanatic? Join our ultimate sports quiz and prove your game knowledge!', image: '/Events/extras/sportsquiz.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLScmQDjqqrFxLhXUR0IW8f5vrCHE8CeQQvOi5dS3QhMfTJNdPQ/viewform' },
    { title: 'General Quiz', description: 'Curiosity meets competition. Answer right, win bright.', image: '/Events/extras/GK.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLScmQDjqqrFxLhXUR0IW8f5vrCHE8CeQQvOi5dS3QhMfTJNdPQ/viewform' },
    { title: 'Stock Market Simulator', description: 'Trade, invest, and outsmart the market. Virtual stakes, real strategies.', image: '/Events/extras/stockmarket.jpeg', link: '/events/stock-market-simulator' },
    { title: 'Poker Bots', description: 'Bluff, bet, and build the best bot. AI meets high-stakes poker.', image: '/Events/extras/poker.jpg', link: '/events/poker-bots' },
    { title: 'Case Study', description: 'Analyze, strategize, and present your edge. Real problems, smart solutions.', image: '/Events/extras/casestudy.jpg', link: '/events/case-study' }
  ]
} as const;

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof eventsData>('Tech');
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
      <div className="absolute inset-0 transition-transform duration-1000 ease-out transform scale-100">
        <Image
          src={categoryBackgrounds[activeCategory]}
          alt={`${activeCategory} background`}
          fill
          className="object-cover"
          priority
          style={{ filter: 'brightness(0.3)' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-sm from-black/50 via-transparent to-black/50"></div>

      <div className="relative z-10 px-4 py-12">
        {/* Category Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-6xl font-bold text-white mb-4 font-mono tracking-tighter">
              {activeCategory}
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
                    ? 'bg-[#48D1CC] text-black shadow-lg shadow-[#48D1CC]/40  '
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
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
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
                  className="h-[28rem] rounded-xl overflow-hidden shadow-lg transition-all duration-500 bg-black hover:shadow-[#48D1CC]/30 hover:translate-y-5 z-20"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)] w-full max-w-[90%] sm:max-w-md mx-auto">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                        {event.title}
                      </h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                    <Link target="_blank" href={event.link} passHref>
                      <button className="flex items-center gap-2 text-[#48D1CC] hover:text-white transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform transform hover:translate-x-1" />
                      </button>
                    </Link>
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