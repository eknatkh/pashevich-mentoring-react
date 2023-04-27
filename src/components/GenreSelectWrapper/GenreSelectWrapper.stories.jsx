import GenreSelectWrapper from "./GenreSelectWrapper"
import "./style.css";

export default {
    title: "GenreSelect",
    component: GenreSelectWrapper,
};


const Template = (args) => <GenreSelectWrapper {...args} />

export const Default = Template.bind({});
Default.args = {
    genres: [
        { id: 1, name: "ALL" },
        { id: 2, name: "DOCUMENTARY" },
        { id: 3, name: "COMEDY" },
        { id: 4, name: "HORROR" },
        { id: 5, name: "CRIME" },
    ],
    initialGenreId: 1,
}
