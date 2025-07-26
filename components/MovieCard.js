
import Link from 'next/link';
export default function MovieCard({ movie }) {
  return (
    <div style={{ width: '200px' }}>
      <img src={movie.thumbnail} alt={movie.title} style={{ width: '100%' }} />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <Link href={movie.video}>
        <button style={{ marginRight: '1rem' }}>▶ Watch</button>
      </Link>
      <a href={movie.video} download>
        <button>⬇ Download</button>
      </a>
    </div>
  );
}
