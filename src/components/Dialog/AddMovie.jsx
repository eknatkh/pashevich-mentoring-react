import React, {useState} from "react";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";

const AddMovie = ({title}) => {
    const [isActive, setIsActive] = useState(false);

    const handleButton = () => {
        setIsActive((previousState) => !previousState);
    }

    return (
        <div>
            <button className="dialog-button" onClick={handleButton}>{title}</button>
            {isActive && (
                <Dialog title="ADD MOVIE" onClose={() => setIsActive(false)} >
                    <MovieForm movieInfo={{}} />
                </Dialog>
            )}
        </div>
    )
}

export default AddMovie;
