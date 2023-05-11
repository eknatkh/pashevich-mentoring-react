import MovieTile from "./MovieTile";
import "./style.css";

export default {
  title: "MovieTile",
  component: MovieTile,
};

const info = {
  poster_path: "./images/Inception.jpg",
  title: "Inception",
  release_date: 2011,
  genres: ["Action & Adventure", "Sci-fi"],
}

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
 movieInfo: info,
};
