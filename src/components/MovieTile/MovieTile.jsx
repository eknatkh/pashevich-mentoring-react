import React, { useState } from "react";
import PropTypes from "prop-types";
import ContextMenu from "../ContextMenu/ContextMenu";
import EditMovie from "../Dialog/EditMovie";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
}

const MovieTile = ({movieInfo}) => {
  const [contextMenu, setContextMenu] = useState(initialContextMenu)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const {movieId} = useParams()

  const genresString = movieInfo.genres.join();
  
  const handleContextMenu = (e) => {
    e.preventDefault();
    const {pageX, pageY} = e
    setContextMenu({show: true, x: pageX, y: pageY})
  }

  const contextMenuClose = () => setContextMenu(initialContextMenu)

  const editMovie = () => {
    console.log("edit movie")
    console.log(movieInfo.id)
    console.log("movieId :" + movieId)

    const requestParams = `${createSearchParams(searchParams)}`
    navigate({
      pathname: `/${movieInfo.id}/edit`,
      search: requestParams
    })
  }

  const deleteMovie = () => {
    console.log("delete movie")
    contextMenuClose()
  }

  return (
    <div onContextMenu={(e) => handleContextMenu(e)}>
      {contextMenu.show && 
        <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose} editMovie={editMovie} deleteMovie={deleteMovie}/>}
      <img src={movieInfo.poster_path} alt={movieInfo.poster_path} />
      <p>{movieInfo.title} <span className="movieTile-year">{movieInfo.release_date}</span></p>
      <p>{genresString}</p>
    </div>
  );
}

export default MovieTile;

MovieTile.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  })
};