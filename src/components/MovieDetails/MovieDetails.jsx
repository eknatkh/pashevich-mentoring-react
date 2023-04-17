import React from "react";
import PropTypes from "prop-types";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movieInfo;
    const genres = movie.genres.join();

    return (
      <div className="movieDetails">
        <img
          src={movie.imageUrl}
          alt={movie.imageUrl}
          className="movieDetails-picture"
        />
        <p className="movieDetails-name-rating">
          {movie.name} <span>{movie.rating}</span>
        </p>
        <p className="movieDetails-genres">{genres}</p>
        <p className="movieDetails-year-duration">
          {movie.releaseYear} <span>{movie.duration}</span>
        </p>
        <p className="movieDetails-description">{movie.description}</p>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  releaseYear: PropTypes.number,
  rating: PropTypes.number,
  duration: PropTypes.string,
  description: PropTypes.string,
};
