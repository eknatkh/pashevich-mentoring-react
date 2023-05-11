import React from "react";
import PropTypes from "prop-types";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movieInfo;
    // let genresString;
    // if (typeof movie.genres === "undefined") {
    //   genresString = "";
    // } else {
    //   genresString = movie.genres.join();
    // }
    const genresString = movie?.genres?.length ? movie.genres.join() : ''

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
  }
}

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
  })
};
