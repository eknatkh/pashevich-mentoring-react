import React from "react";
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import MovieList from "../components/MovieList/MovieList";

describe("MovieList test", () => {

    const onClick = jest.fn();
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

    test("initial value must be equal to props value", () => {
        render(<MovieList moviesInfo = {moviesInfo} onClick={onClick} />);

        const name = screen.getByText(/pulp fiction/i);
        expect(name).toBeInTheDocument();
    });

    test("movie tile was clicked", () => {
        render(<MovieList moviesInfo = {moviesInfo} onClick={onClick} />);

        const name = screen.getByText(/inception/i);
        fireEvent.click(name);
        expect(onClick).toHaveBeenCalled();
    })
})