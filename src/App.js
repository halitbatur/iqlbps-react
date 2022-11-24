import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Button from "./components/Button";

function App() {
  const [listName, setListName] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  // const [time, setTime] = useState(0);
  const listNames = ["popular", "top_rated", "now_playing"];
  const handleClick = (e) => {
    setListName(e.target.text);
  };

  const fecthMovies = async (param) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${param}?api_key=542003918769df50083a13c415bbc602`
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  };

  // setTimeout(() => setListName("top_rated"), 5000);

  useEffect(() => {
    setTimeout(() => fecthMovies(listName), 5000);
  }, [listName]);

  console.log("render outside", listName);

  if (!!movies.length <= 0) {
    return <h2>...Loading</h2>;
  }

  return (
    <div className="App">
      <h2>Movie App</h2>
      <div>
        {listNames.map((listName) => (
          <Button text={listName} onClick={handleClick} />
        ))}
      </div>
      <div>{movies && movies.map((movie) => <MovieCard {...movie} />)}</div>
    </div>
  );
}

export default App;
