import React, { useEffect, useState } from 'react'
import '../../styles/OrderByGenre.css';

type Movie = {
  id:number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

type Genre = {
  id: number;
  name: string;
};

type Props = {
  setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const OrderByGenre: React.FC<Props> = ({ setPeliculas }) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

const [genres, setGenres] = useState<Genre[]>([]);

useEffect(() => {
  const fetchGenres = async () => {
    try {
      const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres", error);
    }
  };

  fetchGenres();
}, []);

  const handleByChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = event.target.value;

        try {
          const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${selectedGenre}&api_key=${API_KEY}`);
          const data = await response.json();
          setPeliculas(data.results);
        } catch (error) {
          console.error("Error fetching movies by genre:", error);
        }
    };

  return (
    <div className='container'>
    <label htmlFor='orderByGenre'>Order by Genre </label>
    <select id='orderByGenre' onChange={handleByChange}>
      {genres.map((genre: Genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
    </div>
  );
};
 