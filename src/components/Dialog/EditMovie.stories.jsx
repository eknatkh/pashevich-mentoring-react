import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../MovieForm/style.css";

export default {
    tittle: "Edit Movie",
    component: Dialog,
}

const info = {
    id: 1,
    imageUrl: "./images/Pulp fiction.jpg",
    name: "Pulp fiction",
    releaseYear: 1995,
    rating: 7.2,
    duration: "2 hours 34 minutes",
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    genres: ["Action & Adventure", "Criminal"]
}

const submitMovieForm = (event) => {
    event.preventDefault();
}

const Template = (args) => 
    <Dialog {...args} >
        <MovieForm movieInfo={info} onSubmit={submitMovieForm} />
    </Dialog>

export const Default = Template.bind({});
Default.args = {
    title: "EDIT MOVIE",
    show: true,
    movieInfo: info,
}