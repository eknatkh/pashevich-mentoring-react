import MovieTile from "./MovieTile";
import "./style.css";

export default {
  title: "MovieTile",
  component: MovieTile,
  argTypes: {
    imageUrl: {
      type: "string",
      description: "Url path to image",
    },
    name: {
      type: "string",
      description: "Name of the movie",
    },
    releaseYear: {
      type: "number",
      description: "Year of release",
    },
    genres: {
      type: "array",
      description: "Array of genres related to this movie",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "./images/Inception.jpg",
  name: "Inception",
  releaseYear: 2011,
  genres: ["Action & Adventure", "Sci-fi"],
};
