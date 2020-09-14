import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';

const userLogin = () => (
  <div className="UserLogin">
    <h1>Log In</h1>
    <form action="submit">
        <input type="text" placeholder="Email Address" required/>
        <input type="password" placeholder="Password" required/>
        <button type="submit">Login</button>
        <Link className="hyperlink" to="/register">Not a member? Register here.</Link>
    </form>
  </div>
);

export default userLogin;