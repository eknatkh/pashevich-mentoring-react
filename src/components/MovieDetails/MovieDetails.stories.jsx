import MovieDetails from "./MovieDetails";
import "./style.css";

export default {
    title: "MovieDetails",
    component: MovieDetails, 
    argTypes: {
        iimageUrl: {
            type: "string",
            description: "Image url"
        },
        name: {
            type: "string",
            description: "Movie name"
        },
        releaseYear: {
            type: "number",
            description: "Movie release year"
        },
        rating: {
            type: "number",
            description: "Movie rating"
        },
        duration: {
            type: "string",
            description: "Movie duration"
        },
        description: {
            type: "string",
            description: "Movie description"
        }
    },
    parameters: {
        controls: { expanded: true }
    },
}

// const movieInfo ={
//     id: 1,
//     imageUrl: "./images/Pulp fiction.jpg",
//     name: "Pulp fiction",
//     releaseYear: 1995,
//     rating: 7.2,
//     duration: "2 hours 34 minutes",
//     description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
//     genres: ["Action & Adventure", "Criminal"]
// }
// export const Default = () => <MovieDetails movieInfo={movieInfo} />

const Template = (args) => <MovieDetails {...args}/>

export const Default = Template.bind({});
Default.args = {
    id: 1,
    imageUrl: "./images/Pulp fiction.jpg",
    name: "Pulp fiction",
    releaseYear: 1995,
    rating: 7.2,
    duration: "2 hours 34 minutes",
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    genres: ["Action & Adventure", "Criminal"]
}
