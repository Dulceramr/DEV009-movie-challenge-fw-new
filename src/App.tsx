import React from 'react';
import './App.css';
import { MovieList } from './components/MovieList/MovieList'
import { OrderByGenre } from './components/OrderBy/OrderByGenre';
import { OrderByVotes } from './components/OrderBy/OrderByVotes';
import { SearchMovie } from './components/OrderBy/SearchMovie';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Movie Challenge</h1>
      <div className='select-container'>
        <OrderByGenre />
        <OrderByVotes />
        <SearchMovie  />
      </div>
      <MovieList /> 
    </div>
  );
}

export default App; 