import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import GenreSelect from "../GenreSelect/GenreSelect";
import MovieList from "../MovieList/MovieList";
import SortControl from "../SortControl/SortControl";
import "../SearchForm/style.css";
import "../GenreSelect/style.css";
import "../MovieList/style.css";
import "../MovieTile/style.css";
import "../MovieDetails/style.css";
import "../MovieForm/style.css";
import "../Dialog/style.css";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";


function MovieListPage() {
  const [querySearch, setQuerySearch] = useState("Search film here");
  const [sortOrder, setSortOrder] = useState("");
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
      description:
        "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
      genres: ["Action & Adventure", "Criminal"],
    },
    {
      id: 2,
      imageUrl: "./images/Inception.jpg",
      name: "Inception",
      releaseYear: 2011,
      rating: 9.3,
      duration: "2 hours 46 minutes",
      description: "Sci-fi movie with Dicaprio",
      genres: ["Action & Adventure"],
    },
    {
      id: 3,
      imageUrl: "./images/Kill Bill.jpg",
      name: "Kill Bill",
      releaseYear: 1992,
      rating: 7.1,
      duration: "1 hours 53 minutes",
      description: "Another criminal movie by Tarantino",
      genres: ["Oscar winning Movie"],
    },
    {
      id: 4,
      imageUrl: "./images/Avengers.jpg",
      name: "Avengers",
      releaseYear: 2019,
      rating: 7.3,
      duration: "2 hours 26 minutes",
      description: "Movie by comics",
      genres: ["Action & Adventure"],
    },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const searchMovie = (querySearch) => {
    console.log("search for " + querySearch);
    setQuerySearch(querySearch);
  };

  const selectGenre = (genre) => {
    console.log("genre = " + genre);
    setGenre(genre);
  };

  const clickMovieTile = (id) => {
    console.log("You have clicked movie with id = " + id);
    setSelectedMovie(id);
  };

  const selectSortOrder = (sortOrder) => {
    console.log("sort by " + sortOrder);
    setSortOrder(sortOrder);
  };

  const onClose = () => {
    console.log(showModal);
    setShowModal(showModal => !showModal);
  };

  const submitMovieForm = (event) => {
    console.log("MovieForm submitted");
    Object.fromEntries(new FormData(event.target));
    // event.preventDefault();
  }

  return (
    <>
      <SearchForm searchQuery={querySearch} onSearch={searchMovie} />
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <SortControl sortOrder="title" onSelect={selectSortOrder} />
      <MovieList moviesInfo={moviesInfo} onClick={clickMovieTile} />
      
      <Dialog title="ADD MOVIE" active={showModal} setActive={setShowModal}>
        <MovieForm onSubmit={submitMovieForm}/>
      </Dialog>
    </>
  );
}

export default MovieListPage;
