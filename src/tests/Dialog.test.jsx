import React from "react";
import '@testing-library/jest-dom'
import {fireEvent, screen} from "@testing-library/react";
import { render } from "@testing-library/react";
import Dialog from "../components/Dialog/Dialog";

describe("Dialog test", () => {

    const setShowModal = jest.fn();

    test("render closed modal", () => {
        render(<Dialog title="Dialog" active={false} setActive={setShowModal}>Hello</Dialog>);
        const children = screen.queryByText(/Hello/i);
        expect(children).toBeNull();
        expect(children).not.toBeInTheDocument();
    });

    test("render opened modal window", () => {
        render(<Dialog title="Dialog" active={true} setActive={setShowModal}>Hello</Dialog>);
        const children = screen.queryByText(/Hello/i);
        expect(children).toBeInTheDocument();
    });

    test("button is clicked and modal is opened", () => {
        // render(<Dialog title="Dialog" active={false} setActive={() => {return true}}>Hello</Dialog>);
        // const button = screen.getByText(/dialog/i);
        // const children = screen.queryByText(/Hello/i);
        // expect(children).not.toBeInTheDocument();
        // fireEvent.click(button);
        // const childrenAfterClick = screen.queryByText(/Hello/i);
        // expect(childrenAfterClick).toBeInTheDocument();
    });
})