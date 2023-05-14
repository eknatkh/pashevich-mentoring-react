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
import { getAll } from "../../services/MoviesApi";
import axios from "axios";

function MovieListPage() {
  const [querySearch, setQuerySearch] = useState("");
  const [sortOrder, setSortOrder] = useState("title");
  const [genre, setGenre] = useState("All");
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const genres = [
    { id: 1, name: "All" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Action" },
    { id: 4, name: "Science Fiction" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Family" },
    { id: 7, name: "Comedy" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies")
      .then((response) => {
        const movies = response.data.data;
        setMoviesInfo(movies);
      })
      .catch((error) => {
        console.log("Error while getting movies :" + error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies", {
        params: {
          sortBy: sortOrder,
          sortOrder: "asc",
          searchBy: "title",
          search: querySearch.trim().toLowerCase(),
          filter: genre !== "All" ? genre : null,
        },
      })
      .then((response) => {
        const movies = response.data.data;
        setMoviesInfo(movies);
      });
  }, [querySearch, genre, sortOrder]);

  const searchMovie = (querySearch) => {
    setQuerySearch(querySearch);
    const movieInfo = moviesInfo.filter(
      (movie) => movie.title.toLowerCase() === querySearch.trim().toLowerCase()
    );
    if (typeof movieInfo[0] === "undefined") {
      setIsFound(false);
    } else {
      setIsFound(true);
      setMovieInfo(movieInfo[0]);
    }
  };

  const selectGenre = (genre) => {
    setGenre(genre);
  };

  const clickMovieTile = (id) => {
    setSelectedMovie(id);
    const movieUrl = "http://localhost:4000/movies/" + id;
    axios.get(movieUrl).then((response) => {
      const movie = response.data;
      setIsFound(true);
      setMovieInfo(movie);
    });
    if (isFound) {
      return showMovieDetails;
    }
  };

  const selectSortOrder = (sortOrder) => {
    setSortOrder(sortOrder);
  };

  const showMovieDetails = () => {
    if (isFound) {
      return (
        <Dialog title="MOVIE DETAILS" onClose={() => setIsFound(false)}>
          <MovieDetails movieInfo={movieInfo} />;
        </Dialog>
      );
    }
  };

  return (
    <div className="movieListPage">
      <AddMovie title="ADD MOVIE" />
      <SearchForm searchQuery={querySearch} onSearch={searchMovie} />
      {showMovieDetails()}
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <SortControl sortOrder="title" onSelect={selectSortOrder} />
      <MovieList moviesInfo={moviesInfo} onClick={clickMovieTile} />
    </div>
  );
}

export default MovieListPage;
