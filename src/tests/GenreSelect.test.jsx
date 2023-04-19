import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import GenreSelect from "../components/GenreSelect/GenreSelect";

describe("GenreSelect test", () => {

    const genres = [
        { id: 1, name: "ALL" },
        { id: 2, name: "DOCUMENTARY" },
        { id: 3, name: "COMEDY" },
        { id: 4, name: "HORROR" },
        { id: 5, name: "CRIME" }
    ];

    const onSelect = jest.fn();

    test("renders all genres passed in props", () => {
        render(<GenreSelect genre={1} genres={genres} onSelect={onSelect} />);
        const list = screen.getByRole("list");
        expect(list).toContainHTML("ALL");
        expect(list).toContainHTML("DOCUMENTARY");
        expect(list).toContainHTML("COMEDY");
        expect(list).toContainHTML("HORROR");
        expect(list).toContainHTML("CRIME");
    })

    test("component highlights a selected genre", () => {
        render(<GenreSelect genre={3} genres={genres} onSelect={onSelect}/>);
        const genre = screen.getByText(/comedy/i);
        expect(genre.getAttribute("value")).toBe("3");
    })

    test("after click genre button callback onChange called with correct argument", () => {
        render(<GenreSelect genre={1} genres={genres} onSelect={onSelect}/>);
        const allButton = screen.getByText(/all/i);
        fireEvent.click(allButton);
        expect(onSelect).toHaveBeenCalled();
        expect(onSelect).toHaveBeenCalledWith(1);
    })
})