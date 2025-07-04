import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Gate() {
  const router = useRouter();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (localStorage.getItem('hasAccess') === 'true') {
      router.push('/home');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === '2005') {
      localStorage.setItem('hasAccess', 'true');
      router.push('/home');
    } else {
      alert('wrong code');
    }
  };

  return (
    <div className="gate-container">
      <h1>you’ve reached a system forgotten on purpose</h1>
      <p>input the code to remember what was buried</p>

      <form onSubmit={handleSubmit}>
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
          font-family: monospace;
          text-align: center;
          padding: 20px;
        }
        input {
          margin-top: 20px;
          padding: 10px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
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
