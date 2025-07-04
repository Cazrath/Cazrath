
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('hasAccess');
    const login = localStorage.getItem('loggedIn');
    if (!access) {
      router.push('/Ecl1pse');
    } else {
      setHasAccess(true);
      setIsLoggedIn(login === 'true');
    }
  }, []);

  if (!hasAccess) return null;

  return (
    <div className="main-container">
      <header>
        <div className="topbar">
          <div className="logo-circle">
            <span className="logo-text">C</span>
          </div>
          <Link href="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>i walk my own path.</p>
        </section>
        <section>
          <Link href="/Fragments">
            <button className="nav-btn">View Fragments</button>
          </Link>
        </section>
      </main>

      <style jsx>{`
        .main-container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          font-family: monospace;
          padding: 40px;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #444;
        }
        .logo-text {
          font-size: 1.5rem;
          color: #fff;
        }
        .login-btn {
          background: transparent;
          color: #fff;
          border: 1px solid #444;
          padding: 5px 15px;
          cursor: pointer;
        }
        .about {
          margin-top: 80px;
        }
        .nav-btn {
          margin-top: 40px;
          padding: 10px 20px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
