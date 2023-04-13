import React from "react";
import MovieTile from "../MovieTile/MovieTile";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ul className="moviesList-ul">
          {this.props.moviesInfo.map((movieInfo) => (
            <li className="moviesList-li" key={movieInfo.id} value={movieInfo.id} onClick={() => {this.props.onClick(movieInfo.id)}}>
              <MovieTile movieInfo={movieInfo} />
           </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesList;
