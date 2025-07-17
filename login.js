// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '2005') {
      localStorage.setItem('cazrath-auth', 'true');
      router.push('/admin');
    } else {
      setError('wrong code');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="password"
          placeholder="Enter code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 text-black bg-white"
        />
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <button type="submit" className="bg-black text-white px-4 py-2">Enter</button>
      </form>
    </div>
  );
}
