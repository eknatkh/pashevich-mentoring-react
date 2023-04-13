import React from "react";
import PropTypes from "prop-types";

class MovieTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movieInfo;

    return (
      <>
        <img src={movie.imageUrl} alt={movie.imageUrl} />
        <p>{movie.name} {movie.releaseYear}</p>
        <p>{movie.rating} {movie.duration}</p>
        <p>{movie.description}</p>
      </>
    );
  }
}

export default MovieTile;

MovieTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}