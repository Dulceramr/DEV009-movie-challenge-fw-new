import React, { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList'
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import { OrderByVotes } from './components/OrderBy/OrderByVotes';
import { SearchMovie } from './components/OrderBy/SearchMovie';
import { Movie } from './components/OrderBy/SearchMovie';

function App() {
  const [peliculas, setPeliculas] = useState<Movie[]>([]);

  return (
    <div className="App">
      <h1 className='main-title'>Movie Challenge</h1>
      <div className='select-container'>
        <OrderByGenre setPeliculas={setPeliculas} />
        <OrderByVotes setPeliculas={setPeliculas} />
        <SearchMovie  setPeliculas={setPeliculas} />
      </div>
      <MovieList peliculas={peliculas} />
    </div>
  );
}

export default App; 