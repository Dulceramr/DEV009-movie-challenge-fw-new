import React from 'react';
import './MovieList.css';

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path?: string; // Lo hice opcional en caso de que no siempre venga una imagen
  overview: string;
};

type MovieListProps = {
  peliculas: Movie[];
};

export const MovieList: React.FC<MovieListProps> = ({ peliculas }) => {

  // Función para dividir el array en grupos de 5
  const dividedArray = (array: Movie[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const movieRows = dividedArray(peliculas, 5);

  return (
    <table className="movie-table">
      <tbody>
        {movieRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((movie) => (
              <td key={movie.id}>
                <div className="movie-item">
                  <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className='poster'/>
                  <h4 className='title'>{movie.title}</h4>
                  <p className='date'>{movie.release_date}</p>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
