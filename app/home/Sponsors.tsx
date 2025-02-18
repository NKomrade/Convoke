'use client';

import Image from 'next/image';
import Link from 'next/link';

type Sponsor = {
  name: string;
  logo: string;
  description: string;
  category: string;
};

const sponsors: Sponsor[] = [
  {
    name: 'WEDO',
    logo: '/wedo.jpg',
    description: 'Partners who contribute to the development, design, or maintenance of our website.',
    category: 'Website Partner',
  }
];

const Sponsors = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center py-10 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-bold font-mono text-center text-white mb-10 sm:mb-16">
          Our Sponsors
        </h1>

        <div className="flex justify-center items-center w-full">
          <div className="flex w-[70%] md:w-[40%] justify-center items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative bg-zinc-800/30 rounded-lg sm:rounded-xl overflow-hidden group hover:bg-zinc-700/40 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg sm:text-xl font-mono font-bold text-white">
                        {sponsor.name}
                      </h2>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-black/20">
                        {sponsor.category}
                      </span>
                    </div>

                    <p className="text-gray-400 font-mono text-xs sm:text-sm leading-relaxed">
                      {sponsor.description}
                    </p>

                    <div className="pt-3 sm:pt-4 transform translate-y-6 sm:translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="w-full py-2 text-xs sm:text-sm rounded-lg border border-white/80 bg-black/50 text-white">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouncy Button Below WEDO Card */}
        <div className="flex justify-center mt-10">
          <a
            href="/prospectus.pdf"
            // download="Convoke_Prospectus.pdf"
            className="button-wrapper relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Black Shadow */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#006462] to-teal-600 button-shadow"
              style={{
                width: "178px",
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
                  width: "180px",
                  height: "42px",
                }}
              >
                <span className="font-poppins text-[15px] font-[590] leading-[19.5px] text-black">
                  Wish to Sponsor us?
                </span>
              </div>
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Sponsors;




// const sponsors = [
//   {
//     name: 'Spotify',
//     logo: 'https://brandingforum.org/wp-content/uploads/2023/10/spotify-logo-768x488.webp',
//     description: 'Partners who provide music streaming services, content, or related technologies.',
//     category: 'Music Partner'
//   },
//   {
//     name: 'WEDO',
//     logo: '/static/wedo.jpg',
//     description: 'Partners who contribute to the development, design, hosting, or maintenance of our website.',
//     category: 'Website Partner'
//   },
//   {
//     name: 'OLA',
//     logo: 'https://swarajya.gumlet.io/swarajya/2021-12/acc9f032-e1e5-49a2-a8ed-a542ad93d57e/Ola_Image.png?w=610&q=50&compress=true&format=auto',
//     description: 'Partners who offer transportation solutions, ride-sharing services, or contribute to logistics and mobility.',
//     category: 'Driving Partner'
//   },
//   {
//     name: 'Amazon',
//     logo: 'https://english.varthabharati.in/storage/uploads/world/Amazon_vb_30.png',
//     description: 'Partners who provide cloud-based infrastructure, services, or solutions.',
//     category: 'Cloud Partner'
//   }
// ];

// const Sponsors = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-5xl font-bold font-mono text-center text-white mb-16">
//           Our Sponsors
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {sponsors.map((sponsor, index) => (
//             <div
//               key={index}
//               className="relative bg-zinc-800/30 rounded-xl overflow-hidden group hover:bg-zinc-700/40 transition-all duration-300 p-4"
//             >
//               <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-lg">
//                 <img
//                   src={sponsor.logo}
//                   alt={sponsor.name}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
//               </div>

//               <div className="mt-4">
//                 <h2 className="text-lg font-mono font-bold text-white text-center">
//                   {sponsor.name}
//                 </h2>
//                 <span className="block text-center text-xs rounded-full bg-black/20 px-3 py-1 mt-1">
//                   {sponsor.category}
//                 </span>
//                 <p className="text-gray-400 font-mono text-sm leading-relaxed text-center mt-2">
//                   {sponsor.description}
//                 </p>
//                 <div className="flex justify-center mt-4">
//                   <button className="py-2 px-6 rounded-lg border border-white/80 bg-black/50 text-white text-sm">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsors;
