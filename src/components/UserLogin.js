/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';

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
    console.log('User Signed in');
  };

  console.log('VALUE', Value);

  return (
    <div className="UserLogin">
      <h1>Log In</h1>
      <form action="submit">
        <input type="text" placeholder="Email Address" required name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" required name="password" onChange={handleChange} />
        <button type="submit" onSubmit={handleSubmit}>Login</button>
        <Link className="hyperlink" to="/register">Not a member? Register here.</Link>
      </form>
    </div>
  );
};

export default UserLogin;
