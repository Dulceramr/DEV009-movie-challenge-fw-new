import React from "react";

type MovieDetailProps = {
  movie: any;
  onReturn: () => void;
};

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onReturn }) => {
  return (
    <div>
      <button onClick={onReturn}>Return to List</button>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.genres.map((genre: any) => genre.name).join(", ")}</p>
      <p>Average rating: {movie.vote_average} ({movie.vote_count} votes)</p>
      <p>{movie.overview}</p>
    </div>
  );
};
