import React from "react";

import Button from "../Button";
import "./style.css";

const MovieCard = (props) => {
  return (
    <div className="movieCard">
      <h3>{props.title}</h3>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w780${props.poster_path}`}
          alt={props.title}
        />
      </div>
      <p>Overview: {props.overview}</p>
    </div>
  );
};

export default MovieCard;
