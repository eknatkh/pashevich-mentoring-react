import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Counter from "../components/Counter";

describe('Counter test', () => {

    test('initial value must be 0', () => {
        render(<Counter />);
        const value = screen.getByText(/value/i);
        expect(value).toHaveTextContent("Value: 0");
    });

    test('click increment button', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/increment/i);
        fireEvent.click(incrementButton);
        const after = screen.getByText(/value/i);
        expect(after).toHaveTextContent('Value: 1');
    })

    test('click decrement button', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/decrement/i);
        fireEvent.click(decrementButton);
        const after = screen.getByText(/value/i);
        expect(after).toHaveTextContent('Value: -1');
    })
})