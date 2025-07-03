import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>𝕮𝖆𝖟𝖗𝖆𝖙𝖍</title>
      </Head>

      <audio autoPlay loop hidden>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <header className="hero">
        <h1 className="logo">𝕮𝖆𝖟𝖗𝖆𝖙𝖍</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#achievements">Achievements</Link>
          <Link href="/screenshots">Screenshots</Link>
          <Link href="#socials">Socials</Link>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I walk my own path.</p>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Divine Rank – Dota 2</li>
            <li>100% Sekiro Completion</li>
            <li>10,000+ Hours Played</li>
          </ul>
        </section>

        <section id="socials">
          <h2>Socials</h2>
          <p>Coming soon...</p>
        </section>
      </main>

      <style jsx>{`
        body {
          background: #000;
          color: #fff;
          font-family: monospace;
        }
        .hero {
          text-align: center;
          padding: 40px;
        }
        .logo {
          font-size: 3rem;
          margin-bottom: 10px;
        }
        nav a {
          margin: 0 10px;
          color: #aaa;
          text-decoration: none;
        }
        nav a:hover {
          color: #fff;
        }
        main {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
        }
        section {
          margin-bottom: 60px;
        }
        h2 {
          border-bottom: 1px solid #444;
          padding-bottom: 5px;
        }
      `}</style>
    </div>
  );
}
