// pages/Ecl1pse.js (GATE PAGE)
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Gate() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleAccess = () => {
    if (code === '2005') {
      localStorage.setItem('hasAccess', 'true');
      router.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <div className="gate-container">
      <p className="gate-line">you’ve reached a system forgotten on purpose</p>
      <p className="gate-line">input the code to remember what was buried</p>
      <input
        className="gate-input"
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="enter code"
      />
      <button onClick={handleAccess}>enter</button>
      {error && <p className="error">incorrect code</p>}

      <style jsx>{`
        .gate-container {
          background: #000;
          color: #fff;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: monospace;
          text-align: center;
        }
        .gate-line {
          margin-bottom: 10px;
          font-size: 1rem;
          color: #aaa;
        }
        .gate-input {
          background: #111;
          color: #fff;
          border: 1px solid #333;
          padding: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
        }
        button {
          padding: 8px 20px;
          background: #222;
          color: #fff;
          border: 1px solid #444;
          cursor: pointer;
        }
        button:hover {
          background: #333;
        }
        .error {
          color: #f00;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}


// pages/index.js (MAIN PAGE)
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('hasAccess');
    if (!access) {
      router.push('/Ecl1pse');
    } else {
      setHasAccess(true);
    }
  }, []);

  if (!hasAccess) return null;

  return (
    <div className="main-container">
      <header>
        <div className="topbar">
          <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
          <Link href="/login">
            <img
              src="/login-icon.png"
              alt="Login"
              className="login-icon"
            />
          </Link>
        </div>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>i walk my own path.</p>
        </section>
        <section>
          <Link href="/Fragments">
            <button className="nav-btn">View Fragments</button>
          </Link>
        </section>
      </main>

      <style jsx>{`
        .main-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          font-family: monospace;
          padding: 40px;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 2.5rem;
          letter-spacing: 5px;
        }
        .login-icon {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
        .about {
          margin-top: 80px;
        }
        .nav-btn {
          margin-top: 40px;
          padding: 10px 20px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
          cursor: pointer;
        }
        .nav-btn:hover {
          background: #222;
        }
      `}</style>
    </div>
  );
}


// pages/Fragments.js (SCREENSHOT PAGE)
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
