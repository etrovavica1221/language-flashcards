/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import axios from "axios";

const UserLogin = () => {
  const [Value, setCurrValue] = useState();

  const handleChange = (e) => {
    setCurrValue({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: Value.email,
        password: Value.password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log('VALUE', Value);

  return (
    <div className="UserLogin">
      <h1>Log In</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email Address" required name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" required name="password" onChange={handleChange} />
        <button type="submit">Login</button>
        <Link className="hyperlink" to="/register">Not a member? Register here.</Link>
      </form>
    </div>
  );
};

export default UserLogin;
