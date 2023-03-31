import React from "react";

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {previousValue : 0}

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.props.onSelect(event.target.value);
  }

  onClick(event) {
    if (event.target.tagName !== "LI") {
      return;
    } 
   
    let value = event.target.value;
    if (value !== this.state.previousValue) {
      let ul = document.getElementById('ul');
      let selected = ul.querySelectorAll('.selected');
      for(let elem of selected) {
          elem.classList.remove('selected');
      }
    }
    this.setState({previousValue : event.target.value});
    event.target.classList.toggle("selected");
  }

  render() {
    return (
      <div>
        <ul
          className="genreSelect-ul"
          id="ul"
          value={this.props.genre}
          onClick={this.handleChange}
        >
          {this.props.genres.map((genre) => (
            <li key={genre.id} value={genre.id} className="genreSelect-li" onClick={this.onClick}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GenreSelect;
