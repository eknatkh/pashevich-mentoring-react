import React from "react";

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
    };

    this.selectGenre = this.selectGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  selectGenre(event) {
    this.props.onSelect(event.target.value);
  }

  handleChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <div>
        <p className="genreSelect-title">GENRE</p>
        <select
          className="genreSelect-select"
          onSelect={this.selectGenre}
          value={this.state.genre}
          onChange={this.handleChange}
        >
          {this.props.genres.map((genre) => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default GenreSelect;
