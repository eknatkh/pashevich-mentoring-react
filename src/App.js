import React, { useState } from "react";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import SearchForm from "./components/SearchForm";
import "./css/Main.css";

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const [genre, setGenre] = useState(1);
  const [genres, setGenres] = useState([
    { id: 1, name: "ALL" },
    { id: 2, name: "DOCUMENTARY" },
    { id: 3, name: "COMEDY" },
    { id: 4, name: "HORROR" },
    { id: 5, name: "CRIME" },
  ]);

  const searchMovie = (querySearch) => {
    console.log("search for " + querySearch);
    setQuerySearch(querySearch);
  };

  const selectGenre = (genre) => {
    setGenre(genre);
    console.log("genre = " + genre);
  };

  return (
    <div className="App">
      <Counter />
      <SearchForm searchQuery="" onSearch={searchMovie} />
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
    </div>
  );
}

export default App;
