import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import PropTypes from "prop-types";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ul className="movieList-ul">
          {this.props.moviesInfo.map((movieInfo) => (
            <li className="movieList-li" key={movieInfo.id} value={movieInfo.id} onClick={() => {this.props.onClick(movieInfo.id)}}>
              <MovieTile movieInfo={movieInfo} />
           </li>
          ))}
        </ul>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  moviesInfo: PropTypes.array,
  onClick: PropTypes.func,
}
