'use client'
import React, { useState, useEffect } from 'react';

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
  isLarge?: boolean;
  variant: 'date' | 'story' | 'credits' | 'distribution' | 'budget' | 'music' | 'boxOffice';
  position: 'left' | 'middle' | 'right';
}

interface MovieStats {
  releaseYear: string;
  releaseDate: string;
  title: string;
  storyBy: string;
  credits: string;
  production: string;
  distribution: string;
  distributedBy: string;
  budget: string;
  budgetValue: string;
  music: string;
  musicBy: string;
  boxOffice: string;
  boxOfficeValue: string;
}

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // Update every 16ms
    let timer: NodeJS.Timeout;

    const updateNumber = () => {
      start += increment;
      if (start < end) {
        setDisplayValue(Math.floor(start).toString());
        timer = setTimeout(updateNumber, 16);
      } else {
        setDisplayValue(value);
      }
    };

    updateNumber();
    return () => clearTimeout(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

const getBorderClasses = (position: StatCardProps['position']) => {
  const borders = {
    left: 'border-t border-b border-r',
    middle: 'border-t border-b border-r',
    right: 'border-t border-b'
  };
  return borders[position];
};

const getTextAnimation = (variant: StatCardProps['variant']) => {
  const animations = {
    date: 'hover:text-purple-400',
    story: 'hover:text-blue-400',
    credits: 'hover:text-green-400',
    distribution: 'hover:text-red-400',
    budget: 'hover:text-yellow-400',
    music: 'hover:text-pink-400',
    boxOffice: 'hover:scale-110 transition-transform duration-700'
  };
  return animations[variant];
};

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  isLarge = false,
  variant,
  position 
}) => {
  const isNumeric = /^\$?\d/.test(title);
  const textAnimation = getTextAnimation(variant);

  return (
    <div className={`
      bg-black/20 p-8 text-white 
      flex flex-col items-center justify-center
      border-gray-200
      h-64
      relative
      ${getBorderClasses(position)}
      ${isLarge ? 'col-span-2 sm:col-span-2 lg:col-span-2' : ''}
    `}>
      <span className={`
        ${isLarge ? 'text-5xl' : 'text-4xl'} 
        font-bold mb-4 
        transition-all duration-300
        ${textAnimation}
      `}>
        {isNumeric ? <AnimatedNumber value={title} /> : title}
      </span>
      <span className="text-base text-gray-400 mb-2 hover:text-white transition-colors duration-300">
        {subtitle}
      </span>
      <span className="text-sm hover:text-gray-300 transition-colors duration-300">
        {value}
      </span>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats: MovieStats = {
    releaseYear: "1985",
    releaseDate: "June 7, 1985",
    title: "Goonies",
    storyBy: "Steven Spielberg",
    credits: "Credits",
    production: "Amblin Entertainment",
    distribution: "Distribution",
    distributedBy: "Warner Bros",
    budget: "$19M",
    budgetValue: "$19 Million",
    music: "Music",
    musicBy: "Dave Grusin",
    boxOffice: "$61M",
    boxOfficeValue: "$61 Million"
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 relative">
        {/* First Row */}
        <StatCard
          title={stats.releaseYear}
          subtitle="Release date"
          value={stats.releaseDate}
          variant="date"
          position="left"
        />
        <StatCard
          title={stats.title}
          subtitle="Story by"
          value={stats.storyBy}
          variant="story"
          position="middle"
        />
        <StatCard
          title={stats.credits}
          subtitle="Production"
          value={stats.production}
          variant="credits"
          position="middle"
        />
        <StatCard
          title={stats.distribution}
          subtitle="Distributed by"
          value={stats.distributedBy}
          variant="distribution"
          position="right"
        />

        {/* Second Row */}
        <StatCard
          title={stats.budget}
          subtitle="Budget"
          value={stats.budgetValue}
          variant="budget"
          position="left"
        />
        <StatCard
          title={stats.music}
          subtitle="Music by"
          value={stats.musicBy}
          variant="music"
          position="middle"
        />
        <StatCard
          title={stats.boxOffice}
          subtitle="Box Office"
          value={stats.boxOfficeValue}
          variant="boxOffice"
          position="right"
          isLarge={true}
        />
      </div>
    </div>
  );
};

export default Stats;