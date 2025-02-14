'use client'
import React, { useState, useEffect } from 'react';

interface StatCardProps {
  title: string;
  subtitle: string;
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
    const duration = 2000;
    const increment = end / (duration / 16);
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
  return `
    border-t border-b
    md:${position === 'left' ? 'border' : ''}
    md:${position === 'middle' ? 'border' : ''}
  `;
};

const getHoverEffect = (variant: StatCardProps['variant']) => {
  const effects = {
    date: 'hover:shadow-lg',
    story: 'hover:shadow-lg ',
    credits: 'hover:shadow-lg ',
    distribution: 'hover:shadow-lg ',
    budget: 'hover:shadow-lg ',
    music: 'hover:shadow-lg',
    boxOffice: 'hover:shadow-lg'
  };
  return effects[variant];
};

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  subtitle, 
  isLarge = false,
  variant,
  position 
}) => {
  const isNumeric = /^\$?\d/.test(title);
  const hoverEffect = getHoverEffect(variant);

  return (
    <div className={`
      bg-black/20 p-8 text-[#006462] 
      flex flex-col items-center justify-center
      border-gray-200
      h-64
      relative
      backdrop-blur-sm
      transform transition-all duration-500 ease-in-out
      ${getBorderClasses(position)}
      ${isLarge ? 'col-span-2 sm:col-span-2 lg:col-span-2' : ''}
      ${hoverEffect}
      group
    `}>
      <div className="absolute inset-0 bg-black"/>
      <span className={`
        ${isLarge ? 'text-5xl' : 'text-4xl'} 
        font-bold font-mono mb-4 
        transition-all duration-500
        transform group-hover:translate-y-[-4px]
      `}>
        {isNumeric ? <AnimatedNumber value={title} /> : title}
      </span>
      <span className="
        text-base font-mono text-gray-400 
        transition-all duration-500
        transform group-hover:translate-y-[-2px]
        group-hover:text-gray-300
      ">
        {subtitle}
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 relative gap-[1px] bg-gray-200">
        <StatCard
          title={stats.releaseYear}
          subtitle="Release date"
          variant="date"
          position="left"
        />
        <StatCard
          title={stats.title}
          subtitle="Story by"
          variant="story"
          position="middle"
        />
        <StatCard
          title={stats.credits}
          subtitle="Production"
          variant="credits"
          position="middle"
        />
        <StatCard
          title={stats.distribution}
          subtitle="Distributed by"
          variant="distribution"
          position="right"
        />

        {/* Second Row */}
        <StatCard
          title={stats.budget}
          subtitle="Budget"
          variant="budget"
          position="left"
        />
        <StatCard
          title={stats.music}
          subtitle="Music by"
          variant="music"
          position="middle"
        />
        <StatCard
          title={stats.boxOffice}
          subtitle="Box Office"
          variant="boxOffice"
          position="right"
          isLarge={true}
        />
      </div>
    </div>
  );
};

export default Stats;