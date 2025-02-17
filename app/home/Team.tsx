"use client";

import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

const testimonials = [
  {
    quote: "This team is outstanding in every way!",
    name: "John Doe",
    designation: "Project Manager",
    src: "/Team/1.jpeg"
  },
  {
    quote: "A highly dedicated and professional team!",
    name: "Jane Smith",
    designation: "Software Engineer",
    src: "/Team/2.jpeg"
  },
  {
    quote: "A team of perfectionists!",
    name: "Johan Doe",
    designation: "Software Engineer",
    src: "/Team/3.jpeg"
  }
];

const Team = () => {
  return (
    <div >
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default Team;

