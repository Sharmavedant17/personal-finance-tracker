import { render, screen } from "@testing-library/react";
import TableHead from "../components/TableHead";

it("should load TableHead component", () =>{
    render(<TableHead />);

    const button = screen.getAllByRole("button");
    expect(button.length).toBe(4);
})