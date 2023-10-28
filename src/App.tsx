import React, { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList';
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import SearchMovie from './components/OrderBy/SearchMovie';
import SortBy from './components/OrderBy/SortBy';
import Pagination from './components/Pagination/Pagination';  // Asegúrate de que el archivo exista en esta ubicación

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
};

function App() {
  const [peliculas, setPeliculas] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  return (
    <>
      <h1 className='main-title'>Movie Challenge</h1>
      <div className='select-container'>
        <OrderByGenre setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <SortBy setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <SearchMovie setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
      <MovieList peliculas={peliculas} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
}

export default App;

