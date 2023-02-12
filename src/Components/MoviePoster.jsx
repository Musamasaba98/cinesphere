import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = ({ movie }) => {
  console.log(movie);
  return (
    <div className="m-2 w-48 transition-all hover:scale-125">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.name}
        />
      </Link>
    </div>
  );
};

export default MoviePoster;