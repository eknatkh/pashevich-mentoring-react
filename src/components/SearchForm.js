import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: props.searchQuery };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.props.onSearch(this.state.query);
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSearch(this.state.query)}>
        <p className="searchForm-title">FIND YOUR MOVIE</p>
        <input
          className="searchForm-input"
          type="search"
          placeholder="What do you want to watch?"
          value={this.state.query}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <input className="searchForm-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
