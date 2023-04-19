import React from "react";
import '@testing-library/jest-dom'
import {screen} from "@testing-library/react";
import MovieTile from "../components/MovieTile/MovieTile";
import { render } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails/MovieDetails";

describe("MovieList test", () => {

    const onClick = jest.fn();
    const moviesInfo = [
        {
            id: 1,
            imageUrl: "./images/Pulp fiction.jpg",
            name: "Pulp fiction",
            releaseYear: 1995,
            rating: 7.2,
            // duration: "2 hours 34 minutes",
            // description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
            genres: ["Action & Adventure", "Criminal"]
        },
        {
            id: 2,
            imageUrl: "./images/Inception.jpg",
            name: "Inception",
            releaseYear: 2011,
            rating: 9.3,
            // duration: "2 hours 46 minutes",
            // description: "Sci-fi movie with Dicaprio",
            genres: ["Action & Adventure"]
        },
    ]

    const info = {
        id: 1,
        imageUrl: "./images/Pulp fiction.jpg",
        name: "Pulp fiction",
        releaseYear: 1995,
        rating: 7.2,
        // duration: "2 hours 34 minutes",
        // description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
        genres: ["Action & Adventure", "Criminal"]
    };

    // test("renders correct info", () => {
    //     render(<MovieDetails movieInfo={movieInfo} />);

    //     const genre = screen.getByText(/action/i);
    //     expect(name).toContainHTML("Inception")
    // });

    test("MovieTile is clicked", () => {
        render(<MovieDetails moviesInfo={info} />);

        expect(screen.getByText(/Pulp fiction/i)).toBeInTheDocument();
    })
})