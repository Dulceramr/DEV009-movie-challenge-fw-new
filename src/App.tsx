import React, { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList'
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import { SearchMovie } from './components/OrderBy/SearchMovie';
import { Pagination } from './components/Pagination/Pagination';

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
        <OrderByGenre setPeliculas={setPeliculas} />
        <SearchMovie setPeliculas={setPeliculas} />
      </div>
      <MovieList peliculas={peliculas.slice((currentPage - 1) * 10, currentPage * 10)} />
      <Pagination 
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}/>
    </>
  );
}

export default App; 