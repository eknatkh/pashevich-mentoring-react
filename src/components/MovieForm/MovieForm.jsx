import React from "react";
import PropTypes from "prop-types";

const MovieForm = ({onSubmit, movieInfo}) => {

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const objectFromEntries = Object.fromEntries(formData);
    onSubmit(objectFromEntries);
  }

  return (
    <div className="movieForm">
      <form onSubmit={submitHandler} className="movieForm-box">
        <label for="title" className="movieForm-titles">
          TITLE
        </label>
        <input type="text" id="title" name="title" placeholder="Movie Title" defaultValue={movieInfo.name}/>
        <label for="releaseDate" className="movieForm-titles">
          RELEASE DATE
        </label>
        <input type="text" id="releaseDate" name="releaseDate" placeholder="Select Date" defaultValue={movieInfo.releaseYear}/>
        <label for="url" className="movieForm-titles">
          MOVIE URL
        </label>
        <input type="url" id="url" name="url" placeholder="https://" defaultValue={movieInfo.movieUrl}/>
        <label for="rating" className="movieForm-titles">
          RATING
        </label>
        <input type="number" id="rating" name="rating" placeholder="7.7" defaultValue={movieInfo.rating}/>
        <label for="genre" className="movieForm-titles">
          GENRE
        </label>
        <select id="genre" name="genre" placeholder="Select Genre" defaultValue={movieInfo.genre}>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </select>
        <label for="runTime" className="movieForm-titles">
          RUNTIME
        </label>
        <input type="text" id="runTime" name="runTime" placeholder="Minutes" defaultValue={movieInfo.duration}/>
        <label for="overview" className="movieForm-titles">
          OVERVIEW
        </label>
        <textarea id="overview" name="overview" placeholder="Overview" rows="5" cols="100" defaultValue={movieInfo.description}/>

        <input type="reset" value="RESET" />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func,
  movieInfo: PropTypes.object
};

MovieForm.defaultProps = {
  movieInfo: null,
  onSubmit: () => {},
};

export default MovieForm;
