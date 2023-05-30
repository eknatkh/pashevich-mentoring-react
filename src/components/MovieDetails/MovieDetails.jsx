import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const movieUrl = "http://localhost:4000/movies/" + movieId;
    axios
      .get(movieUrl)
      .then((response) => {
        const movie = response.data;
        setMovie(movie);
      });
  }, [movieId]);

  const genresString = movie?.genres?.length ? movie.genres.join() : "";
  if (!movie) return null;

  return (
    <div className="movieDetails">
      <img
        src={movie.poster_path}
        alt={movie.poster_path}
        className="movieDetails-picture"
      />
      <p className="movieDetails-name-rating">
        {movie.title} <span>{movie.vote_average}</span>
      </p>
      <p className="movieDetails-genres">{genresString}</p>
      <p className="movieDetails-year-duration">
        {movie.release_date} <span>{movie.runtime}</span>
      </p>
      <p className="movieDetails-description">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};
