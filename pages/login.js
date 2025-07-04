
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Cazaye45') {
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful');
      router.push('/Fragments');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <style jsx>{`
        .login-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: monospace;
        }
        input {
          margin: 10px;
          padding: 10px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
        }
        button {
          padding: 10px 20px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
        }
      `}</style>
    </div>
  );
}
