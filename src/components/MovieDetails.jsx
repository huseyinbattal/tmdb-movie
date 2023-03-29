import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = ({ id, setId, setSearchText, searchText }) => {
  console.log("id", id);
  const [movie, setMovie] = useState(null);
  console.log("movie", movie);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b8fceb84aab95d8f1e97b266e1e4d655`
      )
      .then((response) => setMovie(response.data));

    setId(null);
    setSearchText("");

    if (searchText !== "") {
      setMovie(null);
    }
  }, [id, movie]);

  if (!movie) {
    return <div>No Result...</div>;
  }

  return (
    <div className="w-50">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetails;
