// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [screenshots, setScreenshots] = useState([]);
  const [timeAlive, setTimeAlive] = useState('');
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const birthDate = new Date('2005-07-28T00:00:00Z');

    const update = () => {
      const now = new Date();
      let diff = now - birthDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= years * (1000 * 60 * 60 * 24 * 365.25);

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      diff -= months * (1000 * 60 * 60 * 24 * 30.44);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      setTimeAlive(`${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
    const urls = files.map(file => URL.createObjectURL(file));
    setScreenshots([...screenshots, ...urls]);
  };

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <div>
      <Head>
        <title>𝕮𝖆𝖟𝖗𝖆𝖙𝖍</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="music-bar">
        <button onClick={togglePlayback}>{isPlaying ? '⏸' : '▶️'}</button>
        <span className="time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <audio ref={audioRef} src="https://files.catbox.moe/1b2vl7.mp3" autoPlay loop />
      </div>

      <header className="hero">
        <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#achievements">Achievements</Link>
          <Link href="#screenshots">Fragments</Link>
          <Link href="#social">Socials</Link>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p><strong>Name:</strong> Noman-AAA</p>
          <p><strong>Age:</strong> {timeAlive}</p>
          <p><strong>Line:</strong> Even if the sky falls, the soul it feared most — Cazrath — will still be standing where gravity ends.</p>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Divine Rank – Dota 2</li>
            <li>100% Completion – Sekiro</li>
            <li>10,000+ Hours – Mastered Gameplay</li>
          </ul>
        </section>

        <section id="screenshots">
          <h2>Fragments</h2>
          <input type="file" accept="image/*" multiple onChange={handleUpload} />
          <div className="gallery">
            {screenshots.map((img, i) => (
              <img key={i} src={img} alt={`screenshot-${i}`} />
            ))}
          </div>
        </section>

        <section id="social">
          <h2>Socials</h2>
          <p>Coming soon...</p>
        </section>
      </main>

      <style jsx>{`
        body {
          margin: 0;
          font-family: monospace;
          background: #000;
          color: #fff;
        }
        .music-bar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 10px 20px;
          background: #111;
          border-bottom: 1px solid #333;
        }
        .music-bar button {
          background: none;
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }
        .music-bar .time {
          margin-left: 15px;
          font-size: 14px;
        }
        .hero {
          text-align: center;
          padding: 60px 20px;
        }
        .logo {
          font-size: 3rem;
          margin: 0 0 20px;
          letter-spacing: 10px;
        }
        nav a {
          margin: 0 10px;
          color: #aaa;
          text-decoration: none;
        }
        nav a:hover {
          color: #fff;
        }
        main {
          max-width: 800px;
          margin: auto;
          padding: 40px 20px;
        }
        section {
          margin-bottom: 80px;
        }
        h2 {
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .gallery img {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #444;
        }
      `}</style>
    </div>
  );
}