import React, { useState } from "react";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditMovie = ({ isShowed }) => {
  const [isActive, setIsActive] = useState(isShowed);
  const {movieId} = useParams()

  const editMovie = () => {
    console.log("api call to edit movie");
  };

  const getMovieById = () => {
    console.log("getMovieById")
    axios
      .get(`http://localhost:4000/movies/${movieId}`)
      .then((movieInfo) => {
        console.log(movieInfo)
        return movieInfo
      })
      .catch((error) => {
        console.log("error fetching movie by id: " + movieId)
        return null;
      });
  };

  return (
    <div>
      {isActive && (
        <Dialog title="EDIT MOVIE" onClose={() => setIsActive(false)}>
          <MovieForm movieInfo={getMovieById} onSubmit={editMovie} />
        </Dialog>
      )}
    </div>
  );
};

export default EditMovie;
