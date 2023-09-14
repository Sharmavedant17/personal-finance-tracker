// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Analytics from './pages/analytics/Analytics';
import Dashboard from './pages/dashboard/Dashboard';
import History from './pages/history/History';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";


function App() {
  return (
    <Router>
      { }
      <div className="">
        { <Header />}
        <Routes>          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/history" element={<History />} />
           <Route path="/dashboard/:slug" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
