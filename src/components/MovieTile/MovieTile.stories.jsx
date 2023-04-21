import MovieTile from "./MovieTile";
import "./style.css";

export default {
  title: "MovieTile",
  component: MovieTile,
};

const info = {
  imageUrl: "./images/Inception.jpg",
  name: "Inception",
  releaseYear: 2011,
  genres: ["Action & Adventure", "Sci-fi"],
}

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
 movieInfo: info,
};
