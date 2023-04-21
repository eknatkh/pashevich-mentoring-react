import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import MovieTile from "../components/MovieTile/MovieTile";

describe("MovieTile test", () => {

    const movieInfo = {
            id: 1,
            imageUrl: "./images/Pulp fiction.jpg",
            name: "Pulp fiction",
            releaseYear: 1995,
            rating: 7.2,
            genres: ["Action & Adventure", "Criminal"]
    };

    test("initial value must be equal to props value", () => {
        render(<MovieTile movieInfo={movieInfo} />);

        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();

        const year = screen.getByText(/1995/i);
        expect(year).toBeInTheDocument();
    });

})
