import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.movie}</h3> 
      <p>Rating: {movie.rating}</p>

      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
        View on IMDb
      </a>
    </div>
  );
};

export default MovieCard;
