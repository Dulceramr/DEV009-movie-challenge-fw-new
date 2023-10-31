import React, { useState, useEffect } from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList';
import { MovieDetail } from './components/MovieDetail/MovieDetail'; 
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import SearchMovie from './components/OrderBy/SearchMovie';
import SortBy from './components/OrderBy/SortBy';
import Pagination from './components/Pagination/Pagination';  

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
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  const API_KEY = '03d8479e6ac8e870c3ef0fea7b1b15c3';

  useEffect(() => {
    if (selectedMovieId) {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieId}?api_key=${API_KEY}`);
          const movieDetails = await response.json();
          setSelectedMovie(movieDetails);
        } catch (error) {
          console.error("Error obteniendo detalles de la película:", error);
        }
      };
      fetchMovieDetails();
    }
  }, [selectedMovieId]);
  

  return (
    <>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} onReturn={() => setSelectedMovie(null)} />
      ) : (
        <>
          <h1 className='main-title'>Movie City</h1>
          <div className='select-container'>
            <OrderByGenre setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <SortBy setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <SearchMovie setPeliculas={setPeliculas} setTotalPages={setTotalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          <MovieList peliculas={peliculas} onSelectMovie={setSelectedMovieId} /> 
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </>
  );
}

export default App;


