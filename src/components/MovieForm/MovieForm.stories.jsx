import MovieForm from "./MovieForm";    
import "./style.css";

export default {
    title: "MovieForm",
    component: MovieForm,
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

const Template = (args) => <MovieForm {...args} />

export const Default = Template.bind({});
Default.args = {
    movieInfo: info,
    title: "ADD MOVIE",
}