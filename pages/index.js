import { useEffect, useState } from 'react';

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
      alert('wrong code');
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
      <header>
        <h1>𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
      </header>
      <main>
        <p>Welcome to the real system.</p>
        {/* You can build your real sections here: About, Screenshots, etc */}
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
      `}</style>
    </div>
  );
}
