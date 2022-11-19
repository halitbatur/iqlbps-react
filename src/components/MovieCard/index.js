import React from "react";
import Button from "../Button";

const MovieCard = (props) => {
  console.log(props, "PROPS");
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>Directed by: {props.director}</h4>
      <p>Produced at : {props.year}</p>
      <p>Genres:</p>
      <ul>
        {props.genre.map((genre) => {
          return <li>{genre}</li>;
        })}
      </ul>
      <p>Rating:{props.rate}</p>
      <Button link={props.link} text={props.title} color={props.buttonColor} />
    </div>
  );
};

export default MovieCard;
