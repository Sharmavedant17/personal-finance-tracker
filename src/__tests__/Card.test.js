import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

it("should load Card component", () =>{
    render(<Card />);

    const div = screen.getByTestId('card-element')
    expect(div).toBeInTheDocument();
})