import { useState } from 'react';

export default function Screenshots() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'monospace', padding: '20px' }}>
      <h1>Screenshots</h1>
      <input type="file" accept="image/*" multiple onChange={handleUpload} />
      <div style={{ display: 'grid', gap: '10px', marginTop: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`screenshot-${i}`} style={{ width: '100%', borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
}
