"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define interface instead of type for better type checking
interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({
  testimonials = [], // Add default empty array
  autoplay = false,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent out of bounds errors with empty testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      setIsLoaded(true);
    }
  }, [testimonials]);

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  // Cleanup interval on component unmount or when autoplay changes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay && testimonials.length > 1) {
      interval = setInterval(handleNext, 8000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Show loading state or return null if no testimonials
  if (!isLoaded || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 md:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 20
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                    priority={index === active}
                    onError={(e) => {
                      // Handle image load error
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-image.jpg'; // Fallback image
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col">
          <motion.div
            key={`content-${active}`}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold md:text-left text-center text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm md:text-left text-center text-gray-400">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg md:text-left text-center text-white mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={`word-${index}-${active}`}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-8 md:justify-start justify-center mt-10 items-center md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};