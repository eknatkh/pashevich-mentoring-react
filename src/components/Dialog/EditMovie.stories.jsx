import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../MovieForm/style.css";
import "../Dialog/style.css"
import { useState } from "react";

export default {
    title: "Edit Movie",
    component: Dialog,
}

const info = {
    id: 1,
    imageUrl: "./images/Pulp fiction.jpg",
    name: "Pulp fiction",
    releaseYear: 1995,
    movieUrl: "https://movies.com/pulpfiction.html",
    rating: 7.2,
    genre: "Criminal",
    duration: "2 hours 34 minutes",
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
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
                <Dialog title={args.title} onClose={() => setIsActive(false)} >
                    <MovieForm movieInfo={info} />
                </Dialog>
            )}
        </div>
    )
}

export const Default = Template.bind({});
Default.args = {
    title: "EDIT MOVIE",
    movieInfo: info,
}
