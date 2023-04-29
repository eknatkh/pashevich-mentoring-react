import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../MovieForm/style.css";
import "../Dialog/style.css"
import { useState } from "react";

export default {
    title: "Add Movie",
    component: Dialog,
}

const Template = (args) => {
    const [isActive, setIsActive] = useState(false);

    const handleButton = () => {
        setIsActive((previousState) => !previousState);
    }

    return (
        <div>
            <button className="dialog-button" onClick={handleButton}>{args.title}</button>
            {isActive && (
                <Dialog title="ADD MOVIE" onClose={() => setIsActive(false)} >
                    <MovieForm movieInfo={{}} />
                </Dialog>
            )}
        </div>
    )
}

export const Default = Template.bind({});
Default.args = {
    title: "ADD MOVIE",
}