import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: props.searchQuery };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSearch(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="searchForm-title">FIND YOUR MOVIE</p>
        <input
          className="searchForm-input"
          type="search"
          placeholder="What do you want to watch?"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <input className="searchForm-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
