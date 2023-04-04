import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchForm from "../components/SearchForm";
import userEvent from "@testing-library/user-event";

describe("SearchFrom test", () => {

    const searchParams = "cool film plz";
    const onSearch = jest.fn();

    test("initial value must be equal to props value", () => {
        render(<SearchForm searchQuery="search" onSearch={onSearch} />);
        const input = screen.getByPlaceholderText(/What do you want to watch?/i);
        const value = input.value;

        expect(value).toEqual("search");
    })

    test("onChange is called after typing to the input and clicking submit", () => {
        render(<SearchForm searchQuery="" onSearch={onSearch} />);
        const input = screen.getByPlaceholderText(/What do you want to watch?/i);
        userEvent.type(input, searchParams);
        const button = screen.getByText(/Search/);
        userEvent.click(button);

        expect(onSearch).toHaveBeenCalled();
        expect(onSearch).toHaveBeenCalledWith(searchParams);
    })

    test("onChange is called after typing to the input and pressing Enter", () => {
        render(<SearchForm searchQuery="" onSearch={onSearch} />);
        const input = screen.getByPlaceholderText(/What do you want to watch?/i);
        userEvent.type(input, searchParams);
        fireEvent.keyPress(input, {key: "Enter", code: "Enter", charCode: 13});
        expect(onSearch).toHaveBeenCalled();
        expect(onSearch).toHaveBeenCalledWith(searchParams);
    })
})