import React, { useState } from 'react';

type Movie = {
    id:number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
  };

type Props = {
  setPeliculas: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const SortBy: React.FC<Props> = ({ setPeliculas }) => {
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;

    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&sort_by=${sortByValue}`);
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error fetching sorted movies:", error);
    }
  };

  return (
    <div>
      <label htmlFor="sortBy">Sort by: </label>
      <select id="sortBy" onChange={handleChange}>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="original_title.asc">Title Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
      </select>
    </div>
  );
};

export default SortBy;

