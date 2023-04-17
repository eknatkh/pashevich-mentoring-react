import GenreSelect from "./GenreSelect";
import "./style.css"

export default {
    title: "GenreSelect",
    component: GenreSelect,
    argTypes: {
        genre : {
            type: "number",
            description: "Number which describes id of selecred genre",
        },
        genres : {
            type: "array",
            description: "Array which contains all genres provided for component"
        }
    },
    parameters: {
        controls: { expanded: true }
    },
};


const Template = (args) => <GenreSelect {...args} />

export const Default = Template.bind({});
Default.args = {
    genre: 1,
    genres: [
        { id: 1, name: "ALL" },
        { id: 2, name: "DOCUMENTARY" },
        { id: 3, name: "COMEDY" },
        { id: 4, name: "HORROR" },
        { id: 5, name: "CRIME" },
    ]
}

export const Shortened = Template.bind({});
Shortened.args = {
    genre: 2,
    genres: [
        {id: 1, name: "ALL"},
        {id: 2, name: "FILM"},
        {id: 3, name: "CARTOON"},
    ]
}