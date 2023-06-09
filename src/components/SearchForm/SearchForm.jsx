import React from "react";
import PropTypes from "prop-types";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearch(event.target.value);
  }

  handleSubmit(event) {
    this.props.onSearch(this.props.searchQuery);
    event.preventDefault();
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <p className="searchForm-title">FIND YOUR MOVIE</p>
        <div className="searchForm-main">
          <input
            className="searchForm-input"
            type="search"
            placeholder="What do you want to watch?"
            value={this.props.searchQuery}
            onChange={this.handleChange}
          />
          <input className="searchForm-button" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  onSearch: PropTypes.func,
}

export default SearchForm;
