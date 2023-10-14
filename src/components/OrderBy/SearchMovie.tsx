import React, { useState } from 'react';

type Movie = {
  id:number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

export const SearchMovie: React.FC<{setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>> }> = ({ setPeliculas }) => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  const [busqueda, setBusqueda] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMovies();
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}?query=${busqueda}&api_key=${API_KEY}`);
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search by Name'
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
    </div>
  );
};