import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../MovieForm/style.css";
import "../Dialog/style.css"

export default {
    tittle: "Add Movie",
    component: Dialog,
}

const submitMovieForm = (event) => {
    event.preventDefault();
}

const Template = (args) => 
    <Dialog {...args}>
        <MovieForm onSubmit={submitMovieForm}/>
    </Dialog>

export const Default = Template.bind({});
Default.args = {
    title: "ADD MOVIE",
    active: true,
}