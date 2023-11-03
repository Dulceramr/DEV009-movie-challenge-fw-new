import React from "react";
import "./MovieDetail.css";

type MovieDetailProps = {
  movie: any;
  onReturn: () => void;
};

export const MovieDetail: React.FC<MovieDetailProps> = ({
  movie,
  onReturn,
}) => {
  return (
    <>
      <h2 className="movie-title">{movie.title}</h2>
      <button className="detail-button" onClick={onReturn}>Return to List</button>
      <div className="Movie-detail-container">
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </section>
        <aside className="Movie-text">
          <p>{movie.release_date}</p>
          <p>{movie.genres.map((genre: any) => genre.name).join(", ")}</p>
          <p>
            Average rating: {movie.vote_average} ({movie.vote_count} votes)
          </p>
          <p>{movie.overview}</p>
        </aside>
      </div>
    </>
  );
};
