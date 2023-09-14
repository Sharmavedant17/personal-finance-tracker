import { render, screen } from "@testing-library/react";
import TableBody from "../components/TableBody";

it("should load TableBody component", () =>{
    render(<TableBody />);

    const tableBody = screen.getByRole("rowgroup");
    expect(tableBody).toBeInTheDocument();
})