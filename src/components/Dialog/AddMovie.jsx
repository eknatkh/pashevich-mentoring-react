import React, {useState} from "react";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import axios from "axios";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";

const AddMovie = ({title, isShowed}) => {
    const [isActive, setIsActive] = useState(isShowed);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleButton = () => {
        setIsActive((previousState) => !previousState);
    }

    const handleSubmit = (formData) => {
        console.log("Addmovie: " + formData.rating + ", " + formData.genres + ", " + formData.runtime)
        axios
            .post("http://localhost:4000/movies", {
                title: formData.title,
                vote_average: Number(formData.rating),
                release_date: formData.release_date,
                poster_path: formData.url,
                overview: formData.overview,
                runtime: Number(formData.runtime),
                genres: formData.genres
            })
            .then((response) => {
                console.log(response)
                console.log(response.data.id)
                const requestParams = `${createSearchParams(searchParams)}`
                navigate({
                    pathname: `/${response.data.id}`,
                    search: requestParams
                })
                setIsActive(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <button className="dialog-button" onClick={handleButton}>{title}</button>
            {isActive && (
                <Dialog title="ADD MOVIE" onClose={() => setIsActive(false)} >
                    <MovieForm movieInfo={{}} onSubmit={handleSubmit} />
                </Dialog>
            )}
        </div>
    )
}

export default AddMovie;
