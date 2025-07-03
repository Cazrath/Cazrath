import { useState } from 'react';

export default function Fragments() {
  const [images, setImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(null);
  const [titles, setTitles] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    const newTitles = files.map(file => file.name);
    setImages([...images, ...newImages]);
    setTitles([...titles, ...newTitles]);
  };

  const next = () => setModalIndex((modalIndex + 1) % images.length);
  const prev = () => setModalIndex((modalIndex - 1 + images.length) % images.length);

  return (
    <div className="fragment-container">
      <h2>Fragments</h2>
      <input type="file" multiple accept="image/*" onChange={handleUpload} />
      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={titles[i] || `screenshot-${i}`}
            onClick={() => setModalIndex(i)}
          />
        ))}
      </div>

      {modalIndex !== null && (
        <div className="modal" onClick={() => setModalIndex(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }}>◀</button>
          <img src={images[modalIndex]} alt="active" />
          <button onClick={(e) => { e.stopPropagation(); next(); }}>▶</button>
          <p>{titles[modalIndex]}</p>
        </div>
      )}

      <style jsx>{`
        .fragment-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 40px;
          font-family: monospace;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .gallery img {
          width: 100%;
          border-radius: 8px;
          cursor: pointer;
        }
        .modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 999;
        }
        .modal img {
          max-width: 80vw;
          max-height: 80vh;
        }
        .modal button {
          background: none;
          border: none;
          color: #fff;
          font-size: 2rem;
          margin: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
