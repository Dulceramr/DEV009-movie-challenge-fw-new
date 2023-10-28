import React, { useEffect, useState } from 'react';

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

export const OrderByGenre: React.FC<{
  setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>>,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number 
}> = ({ setPeliculas, setTotalPages, currentPage }) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");

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

  const handleByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
  };

  useEffect(() => {
    if (selectedGenre) {
      const fetchMoviesByGenre = async () => {
        try {
          const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${selectedGenre}&api_key=${API_KEY}&page=${currentPage}`);
          const data = await response.json();
          setPeliculas(data.results);
          setTotalPages(data.total_pages);
        } catch (error) {
          console.error("Error fetching movies by genre:", error);
        }
      };
      fetchMoviesByGenre();
    }
  }, [currentPage, selectedGenre]);

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
