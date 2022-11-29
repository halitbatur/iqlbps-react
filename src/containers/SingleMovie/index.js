import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { movies } from "../Home/const";

function SingleMovie() {
  const { id } = useParams();
  const currentMovie = movies.find((movie) => Number(movie.id) === Number(id));

  return (
    <div>
      This is the Single movie page of <MovieCard {...currentMovie} />
    </div>
  );
}

export default SingleMovie;
