import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from "../Contact";

//group tests
describe("Contact Us Test Cases",() => {
    it("Load contact component",()=>{
        render(<Contact />);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("Load and check two input in contact component",()=>{
        render(<Contact />);
        const input=screen.getAllByRole("textbox");
        expect(input.length).toBe(2);
    })
})