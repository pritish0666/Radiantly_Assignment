import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
