import React from "react";
import PropTypes from "prop-types";

class MovieTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movieInfo;
    const genresString = movie.genres.join();

    return (
      <>
        <img src={movie.imageUrl} alt={movie.imageUrl} />
        <p>{movie.name} <span className="movieTile-year">{movie.releaseYear}</span></p>
        <p>{genresString}</p>
      </>
    );
  }
}

export default MovieTile;

MovieTile.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  releaseYear: PropTypes.number,
  genres: PropTypes.array,
}