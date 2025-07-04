
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Gate() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === '2005') {
      localStorage.setItem('hasAccess', 'true');
      router.push('/');
    } else {
      alert('Incorrect code');
    }
  };

  return (
    <div className="container">
      <h1>you’ve reached a system forgotten on purpose</h1>
      <p>input the code to remember what was buried</p>
      <form onSubmit={handleSubmit}>
        <input type="password" value={code} onChange={(e) => setCode(e.target.value)} />
        <button type="submit">Enter</button>
      </form>
      <style jsx>{`
        .container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: monospace;
        }
        input {
          background: #111;
          color: #fff;
          border: 1px solid #333;
          padding: 10px;
          margin: 10px;
        }
        button {
          background: #111;
          color: #fff;
          border: 1px solid #444;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
}
