import React, { useState } from "react";
import GenreSelect from "../GenreSelect/GenreSelect";

const GenreSelectWrapper = (props) => {
    const[selectedGenreId, setSelectedGenreId] = useState(props.initialGenreId);

    const selectGenre = (id) => {
        setSelectedGenreId(id);
    }

    return (
        <GenreSelect genre={selectedGenreId} genres={props.genres} onSelect={selectGenre} />
    )
}

export default GenreSelectWrapper;
