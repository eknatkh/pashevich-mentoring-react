import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } 
  if (!values.releaseDate) {
    errors.releaseDate = "Required";
  } 
  if (!values.url) {
    errors.url = "Required";
  }
  if (!values.rating) {
    errors.rating = "Required";
  } else if (!/^[0-9]{1}\.[0-9]{1,2}$/i.test(values.rating)) {
    errors.rating = 'Please use d.d or d.dd format';
  }
  if (!values.runtime) {
    errors.runtime = "Required";
  } else if (!/^[0-9]+$/i.test(values.runtime)) {
    errors.runtime = 'Please use only digits';
  }
  if (!values.overview) {
    errors.overview = "Required";
  } else if (values.overview.length > 200) {
    errors.overview = 'Must be 200 characters or less';
  }

  return errors;
};

const MovieForm = ({onSubmit, movieInfo}) => {
  const [selectedGenres, setSelectedGenres] = useState("");

  const submitHandler = (values) => {
    values.genres = selectedGenres;
    onSubmit(values);
    console.log("movie was saved")
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      releaseDate: "",
      url: "",
      rating: "",
      genres: [],
      runtime: "",
      overview: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("formik onSubmit:")
      console.log(values);
      submitHandler(values);
    },
  });

  const handleSelectChange = (event) => {
    let values = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedGenres(values);
  }

  return (
    <div className="movieForm">
      <form onSubmit={formik.handleSubmit} className="movieForm-box">
        <label for="title" className="movieForm-titles">
          TITLE
        </label>
        <input type="text" id="title" name="title" placeholder="Movie Title" 
          defaultValue={movieInfo.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}/>
        {formik.touched.title && formik.errors.title ? <div className="movieForm-errors">{formik.errors.title}</div> : null}

        <label for="releaseDate" className="movieForm-titles">
          RELEASE DATE
        </label>
        <input type="text" id="releaseDate" name="releaseDate" placeholder="Select Date"
          defaultValue={movieInfo.releaseYear} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.releaseDate}/>
        {formik.touched.releaseDate && formik.errors.releaseDate ? <div className="movieForm-errors">{formik.errors.releaseDate}</div> : null}

        <label for="url" className="movieForm-titles">
          MOVIE URL
        </label>
        <input type="url" id="url" name="url" placeholder="https://" 
          defaultValue={movieInfo.movieUrl} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.url}/>
        {formik.touched.url && formik.errors.url ? <div className="movieForm-errors">{formik.errors.url}</div> : null}

        <label for="rating" className="movieForm-titles">
          RATING
        </label>
        <input type="text" id="rating" name="rating" placeholder="7.7" 
          defaultValue={movieInfo.rating} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rating}/>
        {formik.touched.rating && formik.errors.rating ? <div className="movieForm-errors">{formik.errors.rating}</div> : null}

        <label for="genre" className="movieForm-titles">
          GENRE
        </label>
        <select multiple={true} id="genres" name="genres" placeholder="Select Genres" defaultValue={movieInfo.genre} onChange={handleSelectChange} required>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Family">Family</option>
          <option value="Comedy">Comedy</option>
        </select>

        <label for="runTime" className="movieForm-titles">
          RUNTIME
        </label>
        <input type="text" id="runtime" name="runtime" placeholder="Minutes"
           defaultValue={movieInfo.duration} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.runtime}/>
        {formik.touched.runtime && formik.errors.runtime ? <div className="movieForm-errors">{formik.errors.runtime}</div> : null}

        <label for="overview" className="movieForm-titles">
          OVERVIEW
        </label>
        <textarea id="overview" name="overview" placeholder="Overview" rows="5" cols="100"
           defaultValue={movieInfo.description} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.overview}/>
        {formik.touched.overview && formik.errors.overview ? <div className="movieForm-errors">{formik.errors.overview}</div> : null}

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
