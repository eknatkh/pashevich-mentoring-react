import React from "react";
import PropTypes from "prop-types";

class MoviedDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movieInfo;

        return (
            <>
                {movie.imageUrl}
                {movie.name}
                {movie.releaseYear}
                {movie.rating}
                {movie.duration}
                {movie.description}
            </>
        );
    }
}

export default MoviedDetails;

MoviedDetails.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}