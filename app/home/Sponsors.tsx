'use client'

const sponsors = [
  {
    name: 'Spotify',
    logo: 'https://brandingforum.org/wp-content/uploads/2023/10/spotify-logo-768x488.webp',
    description: 'Partners who provide music streaming services, content, or related technologies.',
    category: 'Music Partner'
  },
  {
    name: 'WEDO',
    logo: '/static/wedo.jpg',
    description: 'Partners who contribute to the development, design, hosting, or maintenance of our website.',
    category: 'Website Partner'
  },
  {
    name: 'OLA',
    logo: 'https://swarajya.gumlet.io/swarajya/2021-12/acc9f032-e1e5-49a2-a8ed-a542ad93d57e/Ola_Image.png?w=610&q=50&compress=true&format=auto',
    description: ' Partners who offer transportation solutions, ride-sharing services, or contribute to logistics and mobility. ',
    category: 'Driving Partner'
  },
  {
    name: 'Amazon',
    logo: 'https://english.varthabharati.in/storage/uploads/world/Amazon_vb_30.png',
    description: 'Partners who provide cloud-based infrastructure, services, or solutions.',
    category: 'Cloud Partner'
  }
];

const Sponsors = () => {
  return (
    <div className="min-h-screen items-center justify-center flex py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold font-mono text-center text-white mb-16">
          Our Sponsor
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative bg-zinc-800/30 rounded-xl overflow-hidden group hover:bg-zinc-700/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-mono font-bold text-white">
                      {sponsor.name}
                    </h2>
                    <span className="px-3 py-1 text-xs rounded-full bg-black/20">
                      {sponsor.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">
                    {sponsor.description}
                  </p>
                  
                  <div className="pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full py-2 rounded-lg border border-white/80 bg-black/50 text-white ">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;