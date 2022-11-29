import React from "react";
import "./App.css";
import Home from "./containers/Home";
import { Routes, Route, Link } from "react-router-dom";
import About from "./containers/About";
import SingleMovie from "./containers/SingleMovie";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">about</Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
