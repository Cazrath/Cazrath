// pages/admin.js
import { useState } from 'react';
import useAuth from '../lib/useAuth';

export default function Admin() {
  useAuth(); // Protect the page

  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);

  const handleUpload = async () => {
    if (!file || !name) return;
    const reader = new FileReader();
    reader.onload = () => {
      const newImage = {
        name,
        src: reader.result,
        id: Date.now()
      };
      const updated = [...images, newImage];
      setImages(updated);
      localStorage.setItem('cazrath-images', JSON.stringify(updated));
      setFile(null);
      setName('');
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    const updated = images.filter(img => img.id !== id);
    setImages(updated);
    localStorage.setItem('cazrath-images', JSON.stringify(updated));
  };

  const loadImages = () => {
    const stored = JSON.parse(localStorage.getItem('cazrath-images') || '[]');
    setImages(stored);
  };

  useState(() => {
    loadImages();
  }, []);

  return (
    <div className="p-10 bg-white text-black min-h-screen">
      <h1 className="text-3xl mb-4 font-bold">Cazrath Admin</h1>

      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={name}
          placeholder="Enter screenshot name"
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border px-4 py-2"
        />
        <button onClick={handleUpload} className="bg-black text-white px-4 py-2">Upload</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img.id} className="border p-2 relative">
            <img src={img.src} alt={img.name} className="w-full h-auto" />
            <p className="text-sm mt-2">{img.name}</p>
            <button
              onClick={() => handleDelete(img.id)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs"
            >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
