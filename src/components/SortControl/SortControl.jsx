import React from "react";
import PropTypes from "prop-types";

class SortControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: this.props.sortOrder,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onSelect(event.target.value);
    this.setState({sortOrder: event.target.value})
  }

  render() {
    return (
        <>
            SORT BY
            <select value={this.state.sortOrder} onChange={this.onChange}>
                <option value="release_date">RELEASE DATE</option>
                <option value="title">TITLE</option>
            </select>
        </>);
  }
}

export default SortControl;

SortControl.propTypes = {
  sortOrder: PropTypes.string,
  onSelect: PropTypes.func,
}