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
import AddMovie from "../Dialog/AddMovie";
import MovieDetails from "../MovieDetails/MovieDetails";
import { getAll } from "../../services/MoviesApi";
import axios from "axios";
import { Outlet, useSearchParams, useNavigate, createSearchParams, useParams } from "react-router-dom";

function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const sortBy = searchParams.get("sortBy") || "title";
  const activeGenre = searchParams.get("activeGenre") || "All";

  const [querySearch, setQuerySearch] = useState(query);
  const [sortOrder, setSortOrder] = useState(sortBy);
  const [genre, setGenre] = useState(activeGenre);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const navigate = useNavigate();

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
    setSearchParams({query: `${querySearch}`, sortBy: `${sortOrder}`, activeGenre: `${genre}`});
  }, [querySearch, sortOrder, genre]);

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
    
    if (typeof movieInfo[0] !== "undefined") {
      const requestParams = `${createSearchParams(searchParams)}`
      navigate({
        pathname: `/${movieInfo[0].id}`,
        search: requestParams
      })
    }
  };

  const selectGenre = (genre) => {
    setGenre(genre);
  };

  const clickMovieTile = (id) => {
    const requestParams = `${createSearchParams(searchParams)}`
    navigate({
      pathname: `/${id}`,
      search: requestParams
    })
  };

  const selectSortOrder = (sortOrder) => {
    setSortOrder(sortOrder);
  };

  let {movieId} = useParams();

  const showMovieDetails = () => {
    if (movieId) {
      return (
        <Outlet/>
      );
    } else {
      return (
        <SearchForm searchQuery={querySearch} onSearch={searchMovie} />
      )
    }
  };

  return (
    <div className="movieListPage">
      <AddMovie title="ADD MOVIE" />
      {showMovieDetails()}
      <GenreSelect genre={genre} genres={genres} onSelect={selectGenre} />
      <SortControl sortOrder={sortBy} onSelect={selectSortOrder} />
      <MovieList moviesInfo={moviesInfo} onClick={clickMovieTile} />
    </div>
  );
}

export default MovieListPage;
