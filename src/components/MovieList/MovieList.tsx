import '../../styles/MovieList.css';

type Movie = {
  id:number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

type MovieListProps  = {
  peliculas: Movie[];
}

export const MovieList: React.FC<MovieListProps> = ({peliculas}) => {
  return (
       <div className='movie-list'>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
            <h2>{pelicula.title}</h2>
            <p>{pelicula.release_date}</p>
          </div>
        ))}
      </div>
  )
}
