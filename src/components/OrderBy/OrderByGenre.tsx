import React from 'react'
import '../../styles/OrderByGenre.css';
import { Movie } from './SearchMovie';

type Props = {
  setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const OrderByGenre: React.FC<Props> = ({ setPeliculas }) => {
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  const handleByChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = event.target.value;

  try {
    const response = await fetch(`${BASE_URL}?with_genres=${selectedGenre}&api_key=${API_KEY}`);
    const data = await response.json();
    setPeliculas(data.results);
  } catch (error) {
    console.error("Error fetching movies by genre: ", error);
  }
  }
  return (
    <div className='container'>
    <label htmlFor='orderByGenre'>Order by Genre </label>
    <select id='orderByGenre' onChange={handleByChange}>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
    </select>
    </div>
  )
}