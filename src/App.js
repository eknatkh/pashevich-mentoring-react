import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieList from "./components/MovieList/MovieList";
import "./css/Main.css";
import "./components/Counter/style.css";
import "./components/SearchForm/style.css";
import "./components/GenreSelect/style.css";
import "./components/MovieList/style.css";
import "./components/MovieTile/style.css";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./components/MovieDetails/style.css";
import SortControl from "./components/SortControl/SortControl";

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
      description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
      genres: ["Action & Adventure", "Criminal"]
    },
    {
      id: 2,
      imageUrl: "./images/Inception.jpg",
      name: "Inception",
      releaseYear: 2011,
      rating: 9.3,
      duration: "2 hours 46 minutes",
      description: "Sci-fi movie with Dicaprio",
      genres: ["Action & Adventure"]
    },
    {
      id: 3,
      imageUrl: "./images/Kill Bill.jpg",
      name: "Kill Bill",
      releaseYear: 1992,
      rating: 7.1,
      duration: "1 hours 53 minutes",
      description: "Another criminal movie by Tarantino",
      genres: ["Oscar winning Movie"]
    },
    {
      id: 4,
      imageUrl: "./images/Avengers.jpg",
      name: "Avengers",
      releaseYear: 2019,
      rating: 7.3,
      duration: "2 hours 26 minutes",
      description: "Movie by comics",
      genres: ["Action & Adventure"]
    }
  ]);
  const [sortOrder, setSortOrder] = useState("");


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

  const selectSortOrder = (selected) => {
    console.log("sort by " + selected);
  }

  return (
    <div className="App">
      <SortControl sortOrder="title" onSelect={selectSortOrder}/>
      <MovieDetails movieInfo={moviesInfo[0]}/>
      <Counter />
      <SearchForm searchQuery="" onSearch={searchMovie} />
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <MovieList moviesInfo={moviesInfo} onClick={clickMovieTile} />
    </div>
  );
}

export default App;
