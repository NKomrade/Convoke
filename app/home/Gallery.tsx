'use client'
import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export default function GalleryPage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <div className="relative">
        <button
          onClick={toggleZoom}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-black text-white rounded-full shadow flex items-center justify-center transition-all duration-300 hover:bg-black/90"
          style={{ top: '50%' }}
        >
          {isZoomed ? (
            <X size={24} className="transition-transform duration-300" />
          ) : (
            <span className="transition-opacity duration-300">View Gallery</span>
          )}
        </button>

        <div className={`grid grid-cols-2 md:grid-cols-4`}>
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                width={800}
                height={600}
                className={`w-full h-40 md:h-60 object-cover transition-transform duration-500 ease-in-out ${isZoomed ? 'scale-100' : 'scale-50'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}