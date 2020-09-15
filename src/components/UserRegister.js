/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import axios from "axios";

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
    if (Value.password === Value.confirmPassword) {
      console.log('passwords match');

      axios
        .post("http://localhost:5000", {
          forename: Value.forename,
          surname: Value.surname,
          translateFrom: Value.translateFrom,
          translateTo: Value.translateTo,
          email: Value.email,
          password: Value.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      //update the state to show user is logged in and hold their details
    }
  };

  console.log('VALUE', Value);
  return (
    <div className="UserRegister">
      <h1>Register</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" required name="forename" onChange={handleChange} />
        <input type="text" placeholder="Surname" required name="surname" onChange={handleChange} />
        <input type="text" placeholder="Email Address" required name="email" onChange={handleChange} />
        <input type="password" placeholder="Password" required name="password" onChange={handleChange} />
        <input type="password" placeholder="Confirm Password" required name="confirmPassword" onChange={handleChange} />
        <select defaultValue="Translate From" name="translateFrom" onChange={handleChange}>
          <option value="">Translate From</option>
          <option value="EN">English</option>
          <option value="RU">Russian</option>
          <option value="CH">Chinese</option>
        </select>
        <select defaultValue="Translate To" name="translateTo" onChange={handleChange}>
          <option value="">Translate To</option>
          <option value="EN">English</option>
          <option value="RU">Russian</option>
          <option value="CH">Chinese</option>
        </select>
        <button type="submit">Register</button>
        <Link className="hyperlink" to="/login">Already a member? log in here.</Link>
      </form>
    </div>
  );
};

export default UserRegister;
