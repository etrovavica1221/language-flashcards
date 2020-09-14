import React from 'react';
import '../styles/LoginRegister.css';

const userRegister = () => (
  <div className="UserRegister">
        <h1>Register</h1>
        <form action="submit">
            <input type="text" placeholder="Email Address" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Confirm Password" required/>
            <select defaultValue="Translate From" required>
                <option value="EN">Translate From</option>
                <option value="EN">English</option>
                <option value="RU">Russian</option>
                <option value="CH">Chinese</option>
            </select>
            <select defaultValue="Translate To" required>
                <option value="EN">Translate To</option>
                <option value="EN">English</option>
                <option value="RU">Russian</option>
                <option value="CH">Chinese</option>
            </select>
            <button type="submit">Register</button>
        
        </form>
  </div>
);

export default userRegister;