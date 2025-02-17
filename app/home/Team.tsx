"use client";

import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

const testimonials = [
  {
    quote: "I told you, I don't want to join your super-secret boy band.",
    name: "Arjun Gupta",
    designation: "Core Team",
    src: "/Team/Arjun.jpg"
  },
  {
    quote: "Hasde chehreya da matlab eh nhi hunda ki ohna nu koi takleef nhi hundi.",
    name: "Nitish Singla",
    designation: "Finance Head",
    src: "/Team/Singla.jpg"
  },
  {
    quote: "The less you care, the better you’ll be at something. Care less, do more!",
    name: "Charvi Mehra",
    designation: "Creative Head",
    src: "/Team/Charvi.jpg"
  },
  {
    quote: "In New York, you're always just a subway ride away from something new.",
    name: "Divya Bandaru",
    designation: "Event Co-ordinator ",
    src: "/Team/Divya.jpg"
  },
  {
    quote: "Be the hero of your own stories.",
    name: "Nitin Kumar Singh",
    designation: "Tech Lead",
    src: "/Team/Nitin.jpg"
  },
  {
    quote: "The best way to predict the future is to create it.",
    name: "Dev Mishra",
    designation: "Tech Lead",
    src: "/Team/Dev.jpg"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    name: "Mohit Katyal",
    designation: "Core Team",
    src: "/Team/Mohit.jpg"
  },
  {
    quote: "It is until a mosquito lands on your testicles, when you learn that violence does not solve all problems.",
    name: "Saswat Susmoy Sahoo",
    designation: "Design Head",
    src: "/Team/Susmoy.jpg"
  }
];

const Team = () => {
  return (
    <div className="overflow-hidden mt-10">
      <h2 className="md:text-5xl text-4xl font-bold text-center">Meet Our Team</h2>
      <div className="md:scale-[1.15] scale-[0.85]">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
};

export default Team;
