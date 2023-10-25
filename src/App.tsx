import React, { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList'
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import { SearchMovie } from './components/OrderBy/SearchMovie';
import SortBy from './components/OrderBy/SortBy';

type Movie = {
  id:number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

function App() {

  const [peliculas, setPeliculas] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(peliculas.length / 10);

  return (
    <>
      <h1 className='main-title'>Movie Challenge</h1>
      <div className='select-container'>
        <OrderByGenre setPeliculas={setPeliculas} currentPage={currentPage} />
        <SortBy setPeliculas={setPeliculas} />
        <SearchMovie setPeliculas={setPeliculas} currentPage={currentPage} />
      </div>
      <MovieList peliculas={peliculas} />
    </>
  );
}

export default App;
