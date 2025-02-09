'use client'

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://via.placeholder.com/150', description: 'Leading tech innovator.' },
  { name: 'Sponsor 2', logo: 'https://via.placeholder.com/150', description: 'Global robotics pioneer.' },
  { name: 'Sponsor 3', logo: 'https://via.placeholder.com/150', description: 'Revolutionizing AI solutions.' },
  { name: 'Sponsor 4', logo: 'https://via.placeholder.com/150', description: 'Empowering future technologies.' },
];

const Sponsors = () => {
  return (
    <div className=" text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Sponsors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{sponsor.name}</h2>
              <p className="text-gray-700">{sponsor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;