// src/App.js
import React from "react";
import "./App.css";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList />
    </div>
  );
}

export default App;
