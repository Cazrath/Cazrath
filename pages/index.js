// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('admin');
    if (stored === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === 'Cazaye45') {
      localStorage.setItem('admin', 'true');
      setLoggedIn(true);
    } else {
      alert('Wrong password');
    }
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
    const urls = files.map(file => URL.createObjectURL(file));
    setScreenshots([...screenshots, ...urls]);
  };

  return (
    <div className="container">
      <Head>
        <title>𝕮𝖆𝖟𝖗𝖆𝖙𝖍</title>
      </Head>

      <header className="header">
        <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
        <div className="login-icon" onClick={() => {
          const box = document.querySelector('.login-box');
          if (box) box.classList.toggle('show');
        }}>C</div>
      </header>

      <div className="login-box">
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      {loggedIn && (
        <section className="admin-section">
          <h2>Upload Screenshots</h2>
          <input type="file" accept="image/*" multiple onChange={handleUpload} />
          <div className="gallery">
            {screenshots.map((img, i) => (
              <img key={i} src={img} alt={`screenshot-${i}`} />
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 2rem;
          font-family: monospace;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 2.5rem;
        }
        .login-icon {
          width: 40px;
          height: 40px;
          background: #222;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: bold;
        }
        .login-box {
          display: none;
          margin-top: 20px;
        }
        .login-box.show {
          display: block;
        }
        .login-box input {
          padding: 10px;
          margin-right: 10px;
          background: #111;
          color: #fff;
          border: 1px solid #333;
        }
        .login-box button {
          padding: 10px 20px;
          background: #222;
          color: #fff;
          border: 1px solid #444;
        }
        .admin-section {
          margin-top: 40px;
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
          border: 1px solid #333;
        }
      `}</style>
    </div>
  );
}
