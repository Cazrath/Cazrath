import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('hasAccess');
    if (!access) {
      router.push('/Ecl1pse');
    } else {
      setHasAccess(true);
    }
  }, []);

  if (!hasAccess) return null;

  return (
    <div className="main-container">
      <header>
        <div className="topbar">
          <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
          <Link href="/login">
            <img
              src="/login-icon.png"
              alt="Login"
              className="login-icon"
            />
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
        .logo {
          font-size: 2.5rem;
          letter-spacing: 5px;
        }
        .login-icon {
          width: 28px;
          height: 28px;
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
        .nav-btn:hover {
          background: #222;
        }
      `}</style>
    </div>
  );
}
