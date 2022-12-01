import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Button from "../../components/Button";
import MovieCard from "../../components/MovieCard";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

// We will have to initalize a state with the movies array
// Create a state to keep track of the forms values
// When the form is submited, we take this data and add it to the
// movies array

function Home() {
  const [newMovieInput, setNewMovieInput] = useState({});
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          setMoviesList((prevMoviesList) => [
            ...prevMoviesList,
            docChange.doc.data(),
          ]);
        } else if (docChange.type === "removed") {
          setMoviesList(
            moviesList.filter((movie) => movie.id !== docChange.doc.id)
          );
        }
      });
    });
  }, []);

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    setNewMovieInput((prev) => {
      // Copy the previous object (state) and only change the keyName that I want
      // prev is aka newMovieInput
      return { ...prev, [keyName]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // instead of saving new items to our state
    // we will create a post request to add items to our database
    await addDoc(collection(db, "movies"), {
      ...newMovieInput,
    });
    // Clear the form
    setNewMovieInput({
      title: "",
      year: "",
      director: "",
      rating: "",
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
            placeholder="Movie rating"
            name="rating"
            value={newMovieInput.rating}
            onChange={handleOnChange}
          />
          <Button type="submit" text={"Add new Movie"} />
        </form>
        {moviesList.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard {...movie} />
            </Link>
          );
        })}
      </header>
    </div>
  );
}

export default Home;
