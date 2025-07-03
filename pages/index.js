// pages/index.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const VALID_USERNAME = 'Cazrath';
  const VALID_PASSWORD = 'Cazaye45';

  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn');
    if (stored === 'true') setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid login');
    }
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <Head>
        <title>ℭ𝔞𝔷𝔯𝔞𝔱𝔥</title>
      </Head>
      <h1 style={{ fontSize: '3rem', letterSpacing: '4px' }}>ℭ𝔞𝔷𝔯𝔞𝔱𝔥</h1>

      {!isLoggedIn ? (
        <div style={{ marginTop: '40px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', marginRight: '10px', background: '#111', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', marginRight: '10px', background: '#111', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
          />
          <button
            onClick={handleLogin}
            style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '30px' }}>
          <p>Welcome, Cazrath. You are logged in.</p>
          <Link href="/screenshots" style={{ color: '#aaa', textDecoration: 'underline' }}>
            Go to Screenshot Manager
          </Link>
        </div>
      )}
    </div>
  );
}
