import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import { logIn } from '../../api';

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', userName, password);
    logIn({username: userName, password})
    .then((res) => {
      console.log("login::", res);
      localStorage.setItem("username", res.data.user.username);
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
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit"  className="submit-button">Login</button>
        <div className="sign-up-link">
        Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
      </div>
      </form>
      
    </div>
  );
};

export default Login;
