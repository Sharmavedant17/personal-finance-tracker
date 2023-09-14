import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";
import { Provider } from 'react-redux';
import store from "../redux/store";
import { BrowserRouter as Router } from 'react-router-dom';


it("should render Modal component", () =>{
    render(
        <Router>
            <Provider store={store}>
                <Modal />
            </Provider>
        </Router>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it("should render Modal component with props Data", () =>{
    render(
        <Router>
            <Provider store={store}>
                <Modal setIsModalOpen={true}/>
            </Provider>
        </Router>
    );

    const heading = screen.getByText("Add Expense or Income");
    expect(heading).toBeInTheDocument();
})