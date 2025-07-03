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
