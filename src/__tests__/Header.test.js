import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from 'react-redux';
import store from "../redux/store";
import { BrowserRouter as Router } from 'react-router-dom';


it("should render Header component", () =>{
    render(
        <Router>
            <Provider store={store}>
                <Header />
            </Provider>
        </Router>
    );

    const appName = screen.getByText("Personal Finance Tracker");
    expect(appName).toBeInTheDocument();
})