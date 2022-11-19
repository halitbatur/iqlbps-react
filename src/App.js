import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [increamentValue, setIncreamentValue] = useState(1);
  const [showMainText, setShowMainText] = useState(false);

  const increaseCounter = () => {
    setCounter(counter + increamentValue);
  };

  const decreaseCounter = () => {
    if (counter - increamentValue < 0) {
      return;
    }
    if (counter > 0) {
      setCounter(counter - increamentValue);
    }
  };

  const handleInputChange = (e) => {
    setIncreamentValue(parseInt(e.target.value));
  };

  const handleMainText = () => {
    setShowMainText(!showMainText);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showMainText ? (
          <p onClick={() => console.log("YOU CLICKED ON ME")}>
            HELLO WELCOME TO YOUR Second lesson OF REACT.
          </p>
        ) : (
          <p>:( the main text is hidden</p>
        )}
        <h2>REACT useState</h2>
        <p>Counter: {counter}</p>
        <Button text="Increment" onClick={increaseCounter} />
        <input
          type="number"
          placeholder="Increament value"
          onChange={handleInputChange}
        />
        {counter > 10 && <h2>Congrats your counter has passed 10</h2>}
        <Button text="Decreament" onClick={decreaseCounter} />
        <Button
          text={showMainText ? "Hide Main Text" : "Show main text"}
          onClick={handleMainText}
        />
        {/* {movies.map((movie) => {
          return <MovieCard {...movie} />;
        })}
        <Button link="localhost3000" text="Hello there" color="red" /> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
