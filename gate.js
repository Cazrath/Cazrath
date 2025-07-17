// pages/gate.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Gate() {
  const [code, setCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const valid = localStorage.getItem('unlocked');
    if (valid === 'true') {
      router.replace('/');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === '2005') {
      localStorage.setItem('unlocked', 'true');
      router.replace('/');
    } else {
      alert('wrong code');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center relative">
      <div className="absolute top-5 left-5 text-xl font-bold">Cazrath</div>
      <h1 className="text-2xl font-mono mb-6 animate-flicker">
        you’ve reached a system forgotten on purpose<br />
        input the code to remember what was buried
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-black px-4 py-2 font-mono"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white font-mono"
        >
          Enter
        </button>
      </form>

      <style jsx>{`
        .animate-flicker {
          animation: flicker 0.2s infinite alternate;
        }

        @keyframes flicker {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
