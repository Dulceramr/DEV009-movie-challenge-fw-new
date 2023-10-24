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
    <table className='movie-table'>
      <tbody>
        {Array.from({ length: Math.ceil(peliculas.length / 10) }).map((_, pageIndex) => {
          const moviesForPage = peliculas.slice(pageIndex * 10, pageIndex * 10 + 10);
          return (
            <>
              <tr key={`${pageIndex}-1`}>
                {moviesForPage.slice(0, 5).map(pelicula => (
                  <td key={pelicula.id} className='movie-card'>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} className="movie-image"/>
                    <div className='title-date-container'>
                      <h4>{pelicula.title}</h4>
                      <p>{pelicula.release_date}</p>
                    </div>
                  </td>
                ))}
              </tr>
              <tr key={`${pageIndex}-2`}>
                {moviesForPage.slice(5).map(pelicula => (
                  <td key={pelicula.id} className='movie-card'>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} className="movie-image"/>
                    <div className='title-date-container'>
                      <h4>{pelicula.title}</h4>
                      <p>{pelicula.release_date}</p>
                    </div>
                  </td>
                ))}
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

