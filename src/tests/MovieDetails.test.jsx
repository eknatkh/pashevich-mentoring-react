import React from "react";
import '@testing-library/jest-dom'
import {screen} from "@testing-library/react";
import { render } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails/MovieDetails";

describe("MovieDetails test", () => {

    const moviesInfo = [
        {
            id: 1,
            imageUrl: "./images/Pulp fiction.jpg",
            name: "Pulp fiction",
            releaseYear: 1995,
            rating: 7.2,
            genres: ["Action & Adventure", "Criminal"]
        },
        {
            id: 2,
            imageUrl: "./images/Inception.jpg",
            name: "Inception",
            releaseYear: 2011,
            rating: 9.3,
            genres: ["Action & Adventure"]
        },
    ]


    test("renders correct info", () => {
        render(<MovieDetails movieInfo={moviesInfo[0]} />);

        const genres = screen.getByText(/action/i);
        expect(genres).toContainHTML("Criminal");
    });

    test("MovieTile is clicked", () => {
        render(<MovieDetails movieInfo={moviesInfo[1]} />);

        expect(screen.getByText(/inception/i)).toBeInTheDocument();
    })
})