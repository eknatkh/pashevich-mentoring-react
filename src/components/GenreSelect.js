import React from "react";

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
      <div>
        <ul className="genreSelect-ul">
          {this.props.genres.map((genre) => (
            <li key={genre.id} value={genre.id} className={genre.id === this.props.genre ? "genreSelect-li selected" : "genreSelect-li"} onClick={() => {
              this.handleChange(genre.id)
            }}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GenreSelect;
