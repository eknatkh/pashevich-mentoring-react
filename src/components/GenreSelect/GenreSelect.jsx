import React from "react";
import PropTypes from "prop-types";

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(genreId) {
    this.props.onSelect(genreId);
  }

  render() {
    return (
      <>
        <ul className="genreSelect-ul">
          {this.props.genres.map((genre) => (
            <li key={genre.id} value={genre.id} className={genre.id === this.props.genre ? "genreSelect-li selected" : "genreSelect-li"} onClick={() => {
              this.handleChange(genre.id)
            }}>
              {genre.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GenreSelect.propTypes = {
  genre: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
}

GenreSelect.defaultProps = {
  genre: 1,
  genres: [
    { id: 1, name: "ALL" },
    { id: 2, name: "DOCUMENTARY" },
    { id: 3, name: "COMEDY" },
    { id: 4, name: "HORROR" },
    { id: 5, name: "CRIME" },
  ]
}

export default GenreSelect;
