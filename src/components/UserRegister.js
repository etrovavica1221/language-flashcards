/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';

const UserRegister = () => {
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
    <div className="UserRegister">
      <h1>Register</h1>
      <form action="submit">
        <input type="text" placeholder="Email Address" required name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" required name="password" onChange={handleChange} />
        <input type="password" placeholder="Confirm Password" required name="confirmPassword" onChange={handleChange} />
        <select defaultValue="Translate From" name="translateFrom" onChange={handleChange}>
          <option value="EN">Translate From</option>
          <option value="EN">English</option>
          <option value="RU">Russian</option>
          <option value="CH">Chinese</option>
        </select>
        <select defaultValue="Translate To" name="translateTo" onChange={handleChange}>
          <option value="EN">Translate To</option>
          <option value="EN">English</option>
          <option value="RU">Russian</option>
          <option value="CH">Chinese</option>
        </select>
        <button type="submit" onSubmit={handleSubmit}>Register</button>
        <Link className="hyperlink" to="/login">Already a member? log in here.</Link>
      </form>
    </div>
  );
};

export default UserRegister;
