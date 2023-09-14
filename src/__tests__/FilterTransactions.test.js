import { render, screen } from "@testing-library/react";
import FilterTransactions from "../components/FilterTransactions";

it("should load FilterTransactions component", () =>{
    render(<FilterTransactions />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})