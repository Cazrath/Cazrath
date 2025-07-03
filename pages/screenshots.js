// pages/screenshots.js
import { useState } from 'react';

export default function Screenshots() {
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const VALID_USERNAME = 'Cazrath';
  const VALID_PASSWORD = 'Cazaye45';

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'monospace', padding: '20px' }}>
      <h1>Screenshots</h1>

      {/* Login Section */}
      {!isAuthenticated && (
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginRight: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #444', background: '#111', color: '#fff' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginRight: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #444', background: '#111', color: '#fff' }}
          />
          <button
            onClick={handleLogin}
            style={{ padding: '8px 12px', border: 'none', borderRadius: '5px', background: '#444', color: '#fff', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      )}

      {/* Upload Section (only if logged in) */}
      {isAuthenticated && (
        <input type="file" accept="image/*" multiple onChange={handleUpload} />
      )}

      {/* Gallery */}
      <div style={{ display: 'grid', gap: '10px', marginTop: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`screenshot-${i}`} style={{ width: '100%', borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
}
