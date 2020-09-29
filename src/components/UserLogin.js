/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/LoginRegister.css';
import Alert from './Alert';
import axios from "axios";

const alertState = {
  alert: {
    message: "",
    isSuccess: false,
  },
}
const UserLogin = ({ userState, setUserState }) => {
  const [Value, setCurrValue] = useState();
  const [alert, setAlert] = useState(alertState.alert);
  const history = useHistory();
  const handleChange = (e) => {
    setCurrValue({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://translation-app-mcrcodes.herokuapp.com/login", {
        email: Value.email,
        password: Value.password,
      })
      .then((response) => {
        console.log(response);
        setUserState({
          forename: response.data.forename,
          surname: response.data.surname,
          translateFrom: response.data.translateFrom,
          translateTo: response.data.translateTo,
          email: Value.email,
          loggedIn: true,
          userID: response.data._id,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          message: "Unable to log in please check log in details",
          isSuccess: false,
      })
      });
      console.log(setUserState)

  };
  console.log('VALUE', Value);

  return (
    <div className="UserLogin">
      <h1 className="titles">Log In</h1>
      <div className="hyperlink">{alert.message && (<Alert message={alert.message} success={alert.isSuccess} />)}</div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email Address" required name="email" onChange={handleChange} />
        <input id="password-input" type="password" placeholder="Password" required name="password" onChange={handleChange} />
        <button className="base-button" type="submit">Log in</button>
        <Link className="hyperlink" to="/register">Not a member? Register here.</Link>
      </form>
    </div>
  );
};

export default UserLogin;
