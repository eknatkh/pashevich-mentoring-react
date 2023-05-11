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
        <img src={movie.poster_path} alt={movie.poster_path} />
        <p>{movie.title} <span className="movieTile-year">{movie.release_date}</span></p>
        <p>{genresString}</p>
      </>
    );
  }
}

export default MovieTile;

MovieTile.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  })
};