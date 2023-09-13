// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { signUp } from '../../api';

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()


  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    setError()
    e.preventDefault();
    console.log('Sign-Up submitted:', userName, email, password);
    signUp({
      username: userName, email, password
    }).then((res) => {
      console.log(res);
       localStorage.setItem("username", res.data.result.name);
      navigate("/analytics");
    }).catch((err) => {
      console.log("Error" , err)
      if(err && err.response && err.response.data && err.response.data.message){
        setError(err.response.data.message)
      }else{
        setError("Something went wrong!")
      }
    })
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="err">{error}</p>}
        <button type="submit" className="signup-btn">Sign Up</button>
        <div className="login-link">
        Already an user? <span onClick={() => navigate("/")}>LogIn</span>
      </div>
      </form>
    </div>
  );
};

export default SignUp;
