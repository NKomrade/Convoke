// 'use client'
// import React, { useState, useEffect } from 'react';

// interface StatCardProps {
//   title: string;
//   subtitle: string;
//   isLarge?: boolean;
//   variant: 'date' | 'footfall' | 'prizes' | 'eventDates' | 'edition' | 'events' | 'sponsors';
//   position: 'left' | 'middle' | 'right';
// }

// interface MovieStats {
//   releaseYear: string;
//   releaseDate: string;
//   title: string;
//   storyBy: string;
//   prizes: string;
//   production: string;
//   eventDates: string;
//   distributedBy: string;
//   edition: string;
//   budgetValue: string;
//   events: string;
//   musicBy: string;
//   sponsors: string;
//   boxOfficeValue: string;
// }

// const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
//   const [displayValue, setDisplayValue] = useState("0");
//   const numericValue = parseInt(value.replace(/\D/g, ''));

//   useEffect(() => {
//     let start = 0;
//     const end = numericValue;
//     const duration = 2000;
//     const increment = end / (duration / 16);
//     let timer: NodeJS.Timeout;

//     const updateNumber = () => {
//       start += increment;
//       if (start < end) {
//         setDisplayValue(Math.floor(start).toString());
//         timer = setTimeout(updateNumber, 16);
//       } else {
//         setDisplayValue(value);
//       }
//     };

//     updateNumber();
//     return () => clearTimeout(timer);
//   }, [value]);

//   return <span>{displayValue}</span>;
// };

// const getBorderClasses = (position: StatCardProps['position']) => {
//   return `
//     border-t border-b
//     md:${position === 'left' ? 'border' : ''}
//     md:${position === 'middle' ? 'border' : ''}
//   `;
// };

// const getHoverEffect = (variant: StatCardProps['variant']) => {
//   const effects = {
//     date: 'hover:shadow-lg',
//     footfall: 'hover:shadow-lg ',
//     prizes: 'hover:shadow-lg ',
//     eventDates: 'hover:shadow-lg ',
//     edition: 'hover:shadow-lg ',
//     events: 'hover:shadow-lg',
//     sponsors: 'hover:shadow-lg'
//   };
//   return effects[variant];
// };

// const StatCard: React.FC<StatCardProps> = ({ 
//   title, 
//   subtitle, 
//   isLarge = false,
//   variant,
//   position 
// }) => {
//   const isNumeric = /^\$?\d/.test(title);
//   const hoverEffect = getHoverEffect(variant);

//   return (
//     <div className={`
//       bg-black/20 p-8 text-[#006462] 
//       flex flex-col items-start justify-between
//       border-gray-200
//       h-64
//       relative
//       backdrop-blur-sm
//       transform transition-all duration-500 ease-in-out
//       ${getBorderClasses(position)}
//       ${isLarge ? 'col-span-2 sm:col-span-2 lg:col-span-2' : ''}
//       ${hoverEffect}
//       group
//     `}>
//       <div className="absolute inset-0 bg-black"/>
//       <span className={`
//         ${isLarge ? 'text-6xl' : 'text-4xl'} 
//         font-bold font-mono mt-[50px]
//         w-full justify-center items-center text-center
//         transition-all duration-500
//         transform group-hover:translate-y-[-4px]
//       `}>
//         {isNumeric ? <AnimatedNumber value={title} /> : title}
//       </span>
//       <span className="
//         text-base font-mono text-gray-400 
//         self-start
//         transition-all duration-500
//         transform group-hover:translate-y-[-2px]
//         group-hover:text-gray-300
//       ">
//         {subtitle}
//       </span>
//     </div>
//   );
// };

// const Stats: React.FC = () => {
//   const stats: MovieStats = {
//     releaseYear: "2015",
//     releaseDate: "1st edition",
//     title: "1000+",
//     storyBy: "Past footfalls",
//     prizes: "1.5 lacs",
//     production: "Prizes worth",
//     eventDates: "22-23 March",
//     distributedBy: "Events dates",
//     edition: "007",
//     budgetValue: "Current edition",
//     events: "35+",
//     musicBy: "Events",
//     sponsors: "$61M",
//     boxOfficeValue: "Past Sponsors"
//   };

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 relative gap-[1px] bg-gray-200">
//         <StatCard
//           title={stats.releaseYear}
//           subtitle={stats.releaseDate}
//           variant="date"
//           position="left"
//         />
//         <StatCard
//           title={stats.title}
//           subtitle={stats.storyBy}         
//           variant="footfall"
//           position="middle"
//         />
//         <StatCard
//           title={stats.prizes}
//           subtitle={stats.production}
//           variant="prizes"
//           position="middle"
//         />
//         <StatCard
//           title={stats.eventDates}
//           subtitle={stats.distributedBy} 
//           variant="eventDates"
//           position="right"
//         />

//         {/* Second Row */}
//         <StatCard
//           title={stats.edition}
//           subtitle={stats.budgetValue}       
//           variant="edition"
//           position="left"
//         />
//         <StatCard
//           title={stats.events}
//           subtitle={stats.musicBy}         
//           variant="events"
//           position="middle"
//         />
//         <StatCard
//           title={stats.sponsors}
//           subtitle={stats.boxOfficeValue}
//           variant="sponsors"
//           position="right"
//           isLarge={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default Stats;

// 'use client'
// import React, { useState, useEffect } from 'react';
// import { IconCloud } from "@/app/components/ui/icon-clouds";

// interface StatCardProps {
//   title?: string;
//   subtitle: string;
//   isLarge?: boolean;
//   variant: 'date' | 'footfall' | 'prizes' | 'eventDates' | 'edition' | 'events' | 'sponsors';
//   position: 'left' | 'middle' | 'right';
//   children?: React.ReactNode;
// }

// interface MovieStats {
//   releaseYear: string;
//   releaseDate: string;
//   title: string;
//   storyBy: string;
//   prizes: string;
//   production: string;
//   eventDates: string;
//   distributedBy: string;
//   edition: string;
//   budgetValue: string;
//   events: string;
//   musicBy: string;
//   sponsors: string;
//   boxOfficeValue: string;
// }

// const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
//   const [displayValue, setDisplayValue] = useState("0");
//   const numericValue = parseInt(value.replace(/\D/g, ''));

//   useEffect(() => {
//     let start = 0;
//     const end = numericValue;
//     const duration = 2000;
//     const increment = end / (duration / 16);
//     let timer: NodeJS.Timeout;

//     const updateNumber = () => {
//       start += increment;
//       if (start < end) {
//         setDisplayValue(Math.floor(start).toString());
//         timer = setTimeout(updateNumber, 16);
//       } else {
//         setDisplayValue(value);
//       }
//     };

//     updateNumber();
//     return () => clearTimeout(timer);
//   }, [value]);

//   return <span>{displayValue}</span>;
// };

// const getBorderClasses = (position: StatCardProps['position']) => {
//   return `
//     border-t border-b
//     md:${position === 'left' ? 'border' : ''}
//     md:${position === 'middle' ? 'border' : ''}
//   `;
// };

// const getHoverEffect = (variant: StatCardProps['variant']) => {
//   const effects = {
//     date: 'hover:shadow-lg',
//     footfall: 'hover:shadow-lg',
//     prizes: 'hover:shadow-lg',
//     eventDates: 'hover:shadow-lg',
//     edition: 'hover:shadow-lg',
//     events: 'hover:shadow-lg',
//     sponsors: 'hover:shadow-lg'
//   };
//   return effects[variant];
// };

// const StatCard: React.FC<StatCardProps> = ({ 
//   title, 
//   subtitle, 
//   isLarge = false,
//   variant,
//   position,
//   children 
// }) => {
//   const isNumeric = title ? /^\$?\d/.test(title) : false;
//   const hoverEffect = getHoverEffect(variant);

//   return (
//     <div className={`
//       bg-black/20 p-8 text-[#006462] 
//       flex flex-col items-center justify-between
//       border-gray-200
//       h-64
//       relative
//       backdrop-blur-sm
//       transform transition-all duration-500 ease-in-out
//       ${getBorderClasses(position)}
//       ${isLarge ? 'col-span-2 sm:col-span-2 lg:col-span-2' : ''}
//       ${hoverEffect}
//       group
//     `}>
//       <div className="absolute inset-0 bg-black"/>
//       {title && (
//         <span className={`
//           ${isLarge ? 'text-6xl' : 'text-4xl'} 
//           font-bold font-mono mt-[50px]
//           w-full justify-center items-center text-center
//           transition-all duration-500
//           transform group-hover:translate-y-[-4px]
//         `}>
//           {isNumeric ? <AnimatedNumber value={title} /> : title}
//         </span>
//       )}
//       {children}
//       <span className="
//         text-base font-mono text-gray-400 
//         self-start
//         transition-all duration-500
//         transform group-hover:translate-y-[-2px]
//         group-hover:text-gray-300
//       ">
//         {subtitle}
//       </span>
//     </div>
//   );
// };

// const slugs = [
//   "typescript", "javascript", "dart", "java", "react", "flutter", "android", 
//   "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", 
//   "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest", 
//   "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode", 
//   "androidstudio", "sonarqube", "figma"
// ];

// const Stats: React.FC = () => {
//   const images = slugs.map(
//     (slug) => `https://cdn.simpleicons.org/${slug}`,
//   );

//   const stats: MovieStats = {
//     releaseYear: "2015",
//     releaseDate: "1st edition",
//     title: "1000+",
//     storyBy: "Past footfalls",
//     prizes: "1.5 lacs",
//     production: "Prizes worth",
//     eventDates: "20-22 March",
//     distributedBy: "Events dates",
//     edition: "007",
//     budgetValue: "Current edition",
//     events: "35+",
//     musicBy: "Events",
//     sponsors: "",
//     boxOfficeValue: "Past Sponsors"
//   };

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 relative gap-[1px] bg-gray-200">
//         <StatCard
//           title={stats.releaseYear}
//           subtitle={stats.releaseDate}
//           variant="date"
//           position="left"
//         />
//         <StatCard
//           title={stats.title}
//           subtitle={stats.storyBy}         
//           variant="footfall"
//           position="middle"
//         />
//         <StatCard
//           title={stats.prizes}
//           subtitle={stats.production}
//           variant="prizes"
//           position="middle"
//         />
//         <StatCard
//           title={stats.eventDates}
//           subtitle={stats.distributedBy} 
//           variant="eventDates"
//           position="right"
//         />

//         {/* Second Row */}
//         <StatCard
//           title={stats.edition}
//           subtitle={stats.budgetValue}       
//           variant="edition"
//           position="left"
//         />
//         <StatCard
//           title={stats.events}
//           subtitle={stats.musicBy}         
//           variant="events"
//           position="middle"
//         />
//         <StatCard
//           subtitle={stats.boxOfficeValue}
//           variant="sponsors"
//           position="right"
//           isLarge={true}
//         >
//           {/* Replaced $61M with IconCloud component */}
//           <div className="relative flex size-full items-center object-cover justify-center">
//             <IconCloud images={images} />
//           </div>
//         </StatCard>
//       </div>
//     </div>
//   );
// };

// export default Stats;

'use client'
import React, { useState, useEffect, memo } from 'react';
import { IconCloud } from "@/app/components/ui/icon-clouds";

interface StatCardProps {
  title?: string;
  subtitle: string;
  isLarge?: boolean;
  variant: 'date' | 'footfall' | 'prizes' | 'eventDates' | 'edition' | 'events' | 'sponsors';
  position: 'left' | 'middle' | 'right';
  children?: React.ReactNode;
  hoverBgImage?: string;
  rollingNumbers?: boolean;
}

interface MovieStats {
  releaseYear: string;
  releaseDate: string;
  title: string;
  storyBy: string;
  prizes: string;
  production: string;
  eventDates: string;
  distributedBy: string;
  edition: string;
  budgetValue: string;
  events: string;
  musicBy: string;
  sponsors: string;
  boxOfficeValue: string;
}

// Rolling Numbers Animation Component
const AnimatedNumber = memo(({ value, isHovered }: { value: string, isHovered: boolean }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isHovered) {
      setDisplayValue(value);
      return;
    }

    const digits = value.split("").map((char) => (/\d/.test(char) ? parseInt(char, 10) : char));
    const maxIterations = 20;
    const animationDuration = 800;
    const intervalTime = animationDuration / maxIterations;
    let frame = 0;

    const updateDigits = () => {
      frame++;
      const newDisplay = digits.map((char) => {
        if (typeof char === "number") {
          return Math.floor(Math.random() * 10);
        }
        return char;
      });

      setDisplayValue(newDisplay.join(""));

      if (frame < maxIterations) {
        setTimeout(updateDigits, intervalTime);
      } else {
        setDisplayValue(value);
      }
    };

    updateDigits();
  }, [isHovered, value]);

  return <span>{displayValue}</span>;
});

AnimatedNumber.displayName = 'AnimatedNumber';

// Utility functions
const getBorderClasses = (position: StatCardProps['position']): string => {
  return position === 'left' || position === 'middle' ? '' : '';
};

const getVariantSpecificClasses = (variant: StatCardProps['variant']): string => {
  switch (variant) {
    case 'sponsors':
      return 'overflow-hidden';
    case 'prizes':
      return 'font-bold';
    default:
      return '';
  }
};

// StatCard component
const StatCard = memo(({
  title,
  subtitle,
  isLarge = false,
  variant,
  position,
  children,
  hoverBgImage,
  rollingNumbers = false,
}: StatCardProps) => {
  const isNumeric = title ? /^\$?\d/.test(title) : false;
  const variantClasses = getVariantSpecificClasses(variant);
  const [isHovered, setIsHovered] = useState(false);

  // Define corner image based on variant
  const getCornerImage = (variant: StatCardProps['variant']) => {
    switch (variant) {
      case 'date':
        return '/Static/Billa.png';
      case 'footfall':
        return '/Static/Billa.png';
      case 'prizes':
        return '/Static/Billa.png';
      case 'eventDates':
        return '/Static/Billa.png';
      case 'edition':
        return '/Static/Billa.png';
      case 'events':
        return '/Static/Billa.png';
      case 'sponsors':
        return '/Static/Billa.png';
      default:
        return '';
    }
  };

  return (
    <div
      className={`
        relative overflow-hidden bg-black p-8 text-[#006462]
        flex flex-col items-center justify-between border-gray-200
        backdrop-blur-sm transform transition-all duration-500 ease-in-out
        ${getBorderClasses(position)}
        ${isLarge ? 'col-span-2 sm:col-span-2 lg:col-span-2 h-full' : 'h-64'}
        ${variantClasses}
        group
      `}
      role="article"
      aria-label={`${subtitle} statistics`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image (Hover Effect) */}
      {hoverBgImage && (
        <div
          className="
            absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out
            opacity-0 scale-110 translate-y-full group-hover:opacity-100 
            group-hover:translate-y-0 group-hover:scale-100
          "
          style={{ backgroundImage: `url(${hoverBgImage})` }}
          aria-hidden="true"
        />
      )}

      {/* Corner Image */}
      <div
        className="
          absolute bottom-0 right-0 w-16 h-16
          transform translate-y-full transition-transform duration-500 ease-in-out
          group-hover:translate-y-0 z-20
        "
      >
        <img
          src={getCornerImage(variant)}
          alt=""
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Overlay for readability */}
      {hoverBgImage && (
        <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/40" />
      )}

      {/* Content */}
      {title && (
        <span className={`
          ${isLarge ? 'text-6xl' : 'text-4xl'} 
          font-bold font-mono mt-[50px] w-full text-center
          transition-all duration-500 transform group-hover:translate-y-[-4px]
          relative z-10
        `}>
          {isNumeric && rollingNumbers ? (
            <AnimatedNumber value={title} isHovered={isHovered} />
          ) : (
            title
          )}
        </span>
      )}
      {children}

      <span className="
        text-base font-mono text-gray-400 self-start 
        transition-all duration-500 transform group-hover:translate-y-[-2px]
        group-hover:text-gray-300 relative z-10
      ">
        {subtitle}
      </span>
    </div>
  );
});

StatCard.displayName = 'StatCard';

// Constants
const slugs = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"
];

// Main Stats component
const Stats: React.FC = () => {
  const images = slugs.map((slug) => `/icons/${slug}.svg`);

  const stats: MovieStats = {
    releaseYear: "2015",
    releaseDate: "1st edition",
    title: "1000+",
    storyBy: "Past footfall",
    prizes: "1.5 lacs",
    production: "Prizes worth",
    eventDates: "03-05 April",
    distributedBy: "Events dates",
    edition: "007",
    budgetValue: "Current edition",
    events: "25+",
    musicBy: "Events",
    sponsors: "",
    boxOfficeValue: "Past Sponsors"
  };

  // Sponsors Cloud component
  const SponsorsCloud = memo(() => (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="scale-[1.65]">
        <IconCloud images={images} />
      </div>
    </div>
  ));

  SponsorsCloud.displayName = 'SponsorsCloud';

  return (
    <div className="relative h-full text-extrabold">
      {/* Mobile layout */}
      <div className="grid grid-cols-2 gap-[1px] bg-white/20 md:hidden">
        <StatCard 
          title={stats.releaseYear} 
          subtitle={stats.releaseDate} 
          variant="date" 
          position="left" 
          rollingNumbers
        />
        <StatCard 
          title="1000+" 
          subtitle="Past footfall" 
          variant="footfall" 
          position="middle" 
        />
        <StatCard 
          title={stats.prizes} 
          subtitle={stats.production} 
          variant="prizes" 
          position="middle" 
          rollingNumbers
        />
        <StatCard 
          title={stats.eventDates} 
          subtitle={stats.distributedBy} 
          variant="eventDates" 
          position="right" 
        />
        <StatCard 
          title={stats.edition} 
          subtitle={stats.budgetValue} 
          variant="edition" 
          position="left" 
          rollingNumbers
        />
        <StatCard 
          title={stats.events} 
          subtitle={stats.musicBy} 
          variant="events" 
          position="middle" 
        />
        <div className="col-span-2 row-span-2">
          <StatCard 
            subtitle={stats.boxOfficeValue} 
            variant="sponsors" 
            position="right" 
            isLarge
          >
            <SponsorsCloud />
          </StatCard>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-5 md:grid-rows-2 gap-[1px] bg-white/20 auto-rows-[256px]">
        <div className="col-span-1">
          <StatCard 
            title={stats.releaseYear} 
            subtitle={stats.releaseDate} 
            variant="date" 
            position="left" 
            rollingNumbers
          />
        </div>
        <div className="col-span-1">
          <StatCard
            title="1000+"
            subtitle="Past footfall"
            variant="footfall"
            position="middle"
          />
        </div>
        <div className="col-span-1">
          <StatCard 
            title={stats.prizes} 
            subtitle={stats.production} 
            variant="prizes" 
            position="middle" 
            rollingNumbers
          />
        </div>
        <div className="col-span-2 row-span-2">
          <StatCard 
            subtitle={stats.boxOfficeValue} 
            variant="sponsors" 
            position="right" 
            isLarge 
          >
            <SponsorsCloud />
          </StatCard>
        </div>
        <div className="col-span-1">
          <StatCard
            title="03-05 April"
            subtitle="Events Dates"
            variant="eventDates"
            position="left"
          />
        </div>
        <div className="col-span-1">
          <StatCard 
            title={stats.edition} 
            subtitle={stats.budgetValue} 
            variant="edition" 
            position="middle" 
            rollingNumbers
          />
        </div>
        <div className="col-span-1">
          <StatCard
            title="25+"
            subtitle="Events"
            variant="events"
            position="middle"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Stats);