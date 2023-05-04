import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import GenreSelect from "../GenreSelect/GenreSelect";
import MovieList from "../MovieList/MovieList";
import SortControl from "../SortControl/SortControl";
import "./style.css";
import "../SearchForm/style.css";
import "../GenreSelect/style.css";
import "../MovieList/style.css";
import "../MovieTile/style.css";
import "../MovieDetails/style.css";
import "../MovieForm/style.css";
import "../Dialog/style.css";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import AddMovie from "../Dialog/AddMovie";
import MovieDetails from "../MovieDetails/MovieDetails";
import axios from "axios";

function MovieListPage() {
  const [querySearch, setQuerySearch] = useState("");
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
      poster_path: "./images/Pulp fiction.jpg",
      title: "Pulp fiction",
      release_date: "1995",
      vote_average: 7.2,
      runtime: "2 hours 34 minutes",
      overview:
        "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
      genres: ["Action & Adventure", "Criminal"],
    },
    {
      id: 2,
      poster_path: "./images/Inception.jpg",
      title: "Inception",
      release_date: "2011",
      vote_average: 9.3,
      runtime: "2 hours 46 minutes",
      overview: "Sci-fi movie with Dicaprio",
      genres: ["Action & Adventure"],
    },
    {
      id: 3,
      poster_path: "./images/Kill Bill.jpg",
      title: "Kill Bill",
      release_date: "1992",
      vote_average: 7.1,
      runtime: "1 hours 53 minutes",
      overview: "Another criminal movie by Tarantino",
      genres: ["Oscar winning Movie"],
    },
    {
      id: 4,
      poster_path: "./images/Avengers.jpg",
      title: "Avengers",
      release_date: "2019",
      vote_average: 7.3,
      runtime: "2 hours 26 minutes",
      overview: "Movie by comics",
      genres: ["Action & Adventure"],
    },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/movies")
    .then((response) => {
      // console.log(response.data);
      const movies = response.data.data;
      // console.log(movies.length);
      setMoviesInfo(movies);
    })
    .catch((error) => {
      console.log("Error while getting movies :" + error);
    });
  })

  const searchMovie = (querySearch) => {
    console.log("querySearch: " + querySearch);
    setQuerySearch(querySearch);
    const movieInfo = moviesInfo.filter(
      movie => movie.title.toLowerCase() === querySearch.trim().toLowerCase()
    );
    console.log(movieInfo[0]);
    if (typeof movieInfo[0] === "undefined") {
      console.log("movie not found");
      setIsFound(false);
    } else {
      console.log("movie found");
      setIsFound(true);
      setMovieInfo(movieInfo[0]);
    }
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


  const topElement = () => {
    if (isFound) {
      return (
        <Dialog title="MOVIE DETAILS" onClose={() => setIsFound(false)} >
          <MovieDetails movieInfo={movieInfo} />;
        </Dialog>);
    } else {
      return <SearchForm searchQuery={querySearch} onSearch={searchMovie} />;
    }
  };

  return (
    <div className="movieListPage">
      <AddMovie title="ADD MOVIE" />
      {topElement()}
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <SortControl sortOrder="title" onSelect={selectSortOrder} />
      <MovieList moviesInfo={moviesInfo} onClick={clickMovieTile} />
    </div>
  );
}

export default MovieListPage;
