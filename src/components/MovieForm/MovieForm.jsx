import React from "react";

const MovieForm = (props) => {

    return (
        <div className="movieForm">
            <form onSubmit={props.onSubmit} className="movieForm-box">
                <label for="title" className="movieForm-titles">TITLE</label>
                <input type="text" id="title" placeholder="Movie Title"/>
                <label for="releaseDate" className="movieForm-titles">RELEASE DATE</label>
                <input type="date" id="releaseDate" placeholder="Select Date"/>
                <label for="url" className="movieForm-titles">MOVIE URL</label>
                <input type="url" id="url" placeholder="https://"/>
                <label for="rating" className="movieForm-titles">RATING</label>
                <input type="number" id="rating" placeholder="7.7"/>
                <label for="genre" className="movieForm-titles">GENRE</label>
                <select type="range" id="genre" placeholder="Select Genre">
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>       
                </select>
                <label for="runTime" className="movieForm-titles">RUNTIME</label>
                <input type="text" id="runTime" placeholder="Minutes"/>
                <label for="overview" className="movieForm-titles">OVERVIEW</label>
                <textarea id="overview" placeholder="Overview" rows="5" cols="100" />

                <input type="reset" value="RESET" />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}

export default MovieForm;
