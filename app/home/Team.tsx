"use client";

import Link from 'next/link';
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
    quote: "What about second breakfast?",
    name: "Anhad Mehrotra",
    designation: "Core Team",
    src: "/Team/Anhad.jpg"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    name: "Mohit Katyal",
    designation: "Core Team",
    src: "/Team/Mohit.jpg"
  },
  {
    quote: "All the greatest men are maniacs.",
    name: "Saswat Susmoy Sahoo",
    designation: "Design Head",
    src: "/Team/Susmoy.jpg"
  },
  {
    quote: "Creativity takes courage, and innovation makes it impactful.",
    name: "Sourav Kumar Verma",
    designation: "Design Team",
    src: "/Team/Sourav.jpg"
  },
  {
    quote: "Meow Meow, Meow Meow... Meow Meow, Meow Meow Meowwwwwww",
    name: "Billa Bond",
    designation: "Mascott",
    src: "/Team/BillaBond.png"
  }
];


const Team = () => {
  return (
    <div className="relative overflow-hidden mt-10 pb-16">
      {/* Title */}
      <h2 className="md:text-5xl text-4xl font-bold text-center text-white">
        Meet Our Team
      </h2>

      {/* Testimonials Section */}
      <div className="md:scale-[1.15] scale-[0.85]">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>

      {/* Bouncy Button */}
      <div className="hidden md:block absolute bottom-28 right-6 md:right-28">
        <Link
          href="https://spiny-basil-be8.notion.site/19e80b7fb5c1801cb876f99dc117bbb8?v=19e80b7fb5c18188979e000c29360d9f"
          target="_blank"
          rel="noopener noreferrer"
          className="button-wrapper relative"
        >
          {/* Black Shadow */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#006462] to-teal-600 button-shadow"
            style={{
              width: "168px",
              height: "40px",
              top: "6px",
              left: "6px",
            }}
          ></div>

          {/* Button Content */}
          <button className="button-content relative flex items-center justify-center rounded-full border-[2.5px] border-black bg-white transition-transform duration-300 active:scale-95">
            <div
              className="flex items-center justify-center rounded-full border-[2px] border-black"
              style={{
                width: "170px",
                height: "42px",
              }}
            >
              <span className="font-poppins text-[15px] font-[590] leading-[19.5px] text-black">
                Everyone
              </span>
            </div>
          </button>
        </Link>
      </div>

      {/* Centered Button for Mobile */}
      <div className="md:hidden flex justify-center mt-8">
        <Link
          href="https://spiny-basil-be8.notion.site/19e80b7fb5c1801cb876f99dc117bbb8?v=19e80b7fb5c18188979e000c29360d9f"
          target="_blank"
          rel="noopener noreferrer"
          className="button-wrapper relative"
        >
          {/* Black Shadow */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#006462] to-teal-600 button-shadow"
            style={{
              width: "168px",
              height: "40px",
              top: "6px",
              left: "6px",
            }}
          ></div>

          {/* Button Content */}
          <button className="button-content relative flex items-center justify-center rounded-full border-[2.5px] border-black bg-white transition-transform duration-300 active:scale-95">
            <div
              className="flex items-center justify-center rounded-full border-[2px] border-black"
              style={{
                width: "170px",
                height: "42px",
              }}
            >
              <span className="font-poppins text-[15px] font-[590] leading-[19.5px] text-black">
                Our Team
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;