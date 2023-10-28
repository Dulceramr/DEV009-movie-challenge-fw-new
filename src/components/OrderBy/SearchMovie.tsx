import React, { useState, useEffect } from 'react';

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

const SearchMovie: React.FC<{
  setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>>,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number 
}> = ({ setPeliculas, setTotalPages, currentPage }) => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    if (searchTerm) {
      const fetchMoviesBySearch = async () => {
        try {
          const response = await fetch(`${BASE_URL}?query=${searchTerm}&api_key=${API_KEY}&page=${currentPage}`);
          const data = await response.json();
          setPeliculas(data.results);
          setTotalPages(data.total_pages);
        } catch (error) {
          console.error("Error fetching movies by search:", error);
        }
      };
      fetchMoviesBySearch();
    }
  }, [searchTerm, currentPage]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchMovie;
