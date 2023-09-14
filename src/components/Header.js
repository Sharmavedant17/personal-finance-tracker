import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '/signup' && !userName) {
      navigate("/");
    }
  })

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  }

   const financeData = useSelector((state) => state.expenses);
  const filterData = financeData.financeList.filter((item, idx) => item.userName === userName);
  const calculateTotalExpensesAndIncome = (transactions) => {
    let totalExpenses = 0;
    let totalIncome = 0;
  transactions.forEach((transaction) => {
    if (transaction.type === "expense") {
      totalExpenses += transaction.amount;
    } else if (transaction.type === "income") {
      totalIncome += transaction.amount;
    }
  });

  return { totalExpenses, totalIncome };
  }

  const { totalExpenses, totalIncome} = calculateTotalExpensesAndIncome(filterData);

  return (
    <>
       <div className="header">
      <div className="app-name">
        Personal Finance Tracker
      </div>
       { location.pathname !== '/' && location.pathname !== '/signup' && <div className="nav-items">
        <ul>
          <li className={location.pathname === "/analytics" ? "active" : ""}>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li className={location.pathname === "/history" ? "active" : ""}>
            <Link to="/history">History</Link>
          </li>
           <li className={location.pathname === "/dashboard" ? "active" : ""}>
          
            <a href={`/dashboard/income=${totalIncome}_expense=${totalExpenses}_total=${totalIncome - totalExpenses}`}>Dashboard</a>
          </li>
        </ul>
        <div className="user-name">
          {`hi ${userName}`}
        </div>
        <div className="log-out">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>}
    </div>
    </>
    
  );
}

export default Header;
