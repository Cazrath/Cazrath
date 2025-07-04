// pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('hasAccess');
    if (stored === 'true') {
      setUnlocked(true);
    }
  }, []);

  const handleCode = (e) => {
    e.preventDefault();
    if (code === '2005') {
      localStorage.setItem('hasAccess', 'true');
      setUnlocked(true);
    } else {
      alert('Wrong code');
    }
  };

  if (!unlocked) {
    return (
      <div className="gate-container">
        <h1>you’ve reached a system forgotten on purpose</h1>
        <p>input the code to remember what was buried</p>
        <form onSubmit={handleCode}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
          />
          <button type="submit">Enter</button>
        </form>
        <style jsx>{`
          .gate-container {
            min-height: 100vh;
            background: #000;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-family: monospace;
            padding: 2rem;
          }
          input {
            margin-top: 20px;
            padding: 10px;
            background: #111;
            color: #fff;
            border: 1px solid #333;
          }
          button {
            margin-top: 10px;
            padding: 10px 20px;
            background: #111;
            color: #fff;
            border: 1px solid #555;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Head>
        <title>𝕮𝖆𝖟𝖗𝖆𝖙𝖍</title>
      </Head>
      <header>
        <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#achievements">Achievements</Link>
          <Link href="/Fragments">Fragments</Link>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I walk my own path.</p>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Divine Rank – Dota 2</li>
            <li>100% Completion – Sekiro</li>
            <li>10,000+ Hours – Mastered Gameplay</li>
          </ul>
        </section>
      </main>

      <style jsx>{`
        .main-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          font-family: monospace;
          padding: 2rem;
          text-align: center;
        }
        .logo {
          font-size: 3rem;
          letter-spacing: 8px;
          margin-bottom: 10px;
        }
        nav a {
          margin: 0 15px;
          color: #aaa;
          text-decoration: none;
        }
        nav a:hover {
          color: #fff;
        }
        section {
          margin: 60px 0;
        }
        h2 {
          border-bottom: 1px solid #444;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
