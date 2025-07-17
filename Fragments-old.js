// pages/Fragments.js
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/frag1.jpg', name: 'Ruins of Silence' },
  { src: '/images/frag2.jpg', name: 'Echo_33' },
  { src: '/images/frag3.jpg', name: 'Static Memory' },
  // Add more here
];

export default function Fragments() {
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    setSelected((selected + 1) % images.length);
  };

  const handlePrev = () => {
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <h1 className="text-3xl mb-6 font-bold">Fragments</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className="cursor-pointer grayscale hover:grayscale-0 transition"
          >
            <Image src={img.src} alt={img.name} width={500} height={300} className="rounded" />
            <p className="mt-2 text-sm">{img.name}</p>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={images[selected].src}
              alt={images[selected].name}
              width={1000}
              height={600}
              className="rounded border-2 border-white"
            />
            <p className="text-white text-center mt-2">{images[selected].name}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ×
            </button>
            <button onClick={handlePrev} className="absolute top-1/2 left-2 text-white text-xl">←</button>
            <button onClick={handleNext} className="absolute top-1/2 right-2 text-white text-xl">→</button>
          </div>
        </div>
      )}
    </div>
  );
}
