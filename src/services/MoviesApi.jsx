import React from "react";
import axios from "axios";

function getAll({sortOrder, querySearch, genre}) {
  let movies = [];
  axios
    .get("http://localhost:4000/movies", {
      params: {
        sortBy: sortOrder,
        sortOrder: "asc",
        searchBy: "title",
        search: querySearch.trim().toLowerCase(),
        filter: genre,
      },
    })
    .then((response) => {
      movies = response.data.data;
    })
    .catch((error) => {
      console.log("Error while getting movies :" + error);
    });
  return movies;
}

export default getAll;
