import { render, screen } from "@testing-library/react"
import { DataForm } from "./DataForm";

const setup = () => render(<DataForm />);

describe("Query Function Suffixes", () => {
  it("selecting different elements", () => {
    setup();

    const elements = [
      screen.getByText('Enter data'),
      screen.getByAltText('data'),
      screen.getByTestId('image wrapper'),
      screen.getByLabelText('Email'),
      screen.getByDisplayValue('jammie@gmail.com'),
      screen.getByPlaceholderText('Red'),
      screen.getByRole('button'),
      screen.getByTitle('Click when ready to submit'),
    ];

    for (let element of elements) {
      expect(element).toBeInTheDocument();
    }
  })
});