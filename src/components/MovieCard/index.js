import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>Directed by: {props.director}</h4>
      <p>Produced at : {props.year}</p>
      <p>Rating:{props.rate}</p>
    </div>
  );
};

export default MovieCard;
