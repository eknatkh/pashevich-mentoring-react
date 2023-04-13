import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import SearchForm from "./components/SearchForm/SearchForm";
import MoviesList from "./components/MoviesList/MoviesList";
import "./css/Main.css";
import "./components/Counter/style.css";
import "./components/SearchForm/style.css";
import "./components/GenreSelect/style.css";
import "./components/MoviesList/style.css";

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
  const [moviesInfo, setMoviesInfo] = useState([
    {
      id: 1,
      imageUrl: "./images/Pulp fiction.jpg",
      name: "Pulp fiction",
      releaseYear: 1995,
      rating: 7.2,
      duration: "2 hours 34 minutes",
      description: "Criminal movie by Tarantino"
    },
    {
      id: 2,
      imageUrl: "./images/Inception.jpg",
      name: "Inception",
      releaseYear: 2011,
      rating: 9.3,
      duration: "2 hours 46 minutes",
      description: "Sci-fi movie with Dicaprio"
    },
    {
      id: 3,
      imageUrl: "./images/Kill Bill.jpg",
      name: "Kill Bill",
      releaseYear: 1992,
      rating: 7.1,
      duration: "1 hours 53 minutes",
      description: "Another criminal movie by Tarantino"
    },
    {
      id: 4,
      imageUrl: "./images/Avengers.jpg",
      name: "Avengers",
      releaseYear: 2019,
      rating: 7.3,
      duration: "2 hours 26 minutes",
      description: "Movie by comics"
    }
  ])

  const searchMovie = (querySearch) => {
    console.log("search for " + querySearch);
    setQuerySearch(querySearch);
  };

  const selectGenre = (genre) => {
    setGenre(genre);
    console.log("genre = " + genre);
  };

  const clickMovieTile = (id) => {
    console.log("You have clicked movie with id = " + id);
  }

  return (
    <div className="App">
      <Counter />
      <SearchForm searchQuery="" onSearch={searchMovie} />
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <MoviesList moviesInfo={moviesInfo} onClick={clickMovieTile} />
    </div>
  );
}

export default App;
