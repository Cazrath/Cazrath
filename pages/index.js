
import { movies } from '../movies';
import MovieCard from '../components/MovieCard';
export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem' }}>
      <h1 style={{ color: 'red', fontSize: '3rem' }}>CAZCO</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
