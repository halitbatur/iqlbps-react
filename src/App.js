import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import MovieCard from "./components/MovieCard";
import { movies } from "./const";

// We will have to initalize a state with the movies array
// Create a state to keep track of the forms values
// When the form is submited, we take this data and add it to the
// movies array

function App() {
  const [newMovieInput, setNewMovieInput] = useState({});
  const [moviesList, setMoviesList] = useState(movies);

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    setNewMovieInput((prev) => {
      // Copy the previous object (state) and only change the keyName that I want
      // prev is aka newMovieInput
      return { ...prev, [keyName]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMoviesList((prev) => {
      return [newMovieInput, ...prev];
    });
    // Clear the form
    setNewMovieInput({
      title: "",
      year: "",
      director: "",
      rate: "",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            width: "500px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Movie Name"
            name="title"
            value={newMovieInput.title}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Movie Year"
            name="year"
            value={newMovieInput.year}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Movie Director"
            name="director"
            value={newMovieInput.director}
            onChange={handleOnChange}
          />
          <input
            type="number"
            placeholder="Movie Rate"
            name="rate"
            value={newMovieInput.rate}
            onChange={handleOnChange}
          />
          <Button type="submit" text={"Add new Movie"} />
        </form>
        {moviesList.map((movie) => {
          return <MovieCard {...movie} />;
        })}
      </header>
    </div>
  );
}

export default App;
