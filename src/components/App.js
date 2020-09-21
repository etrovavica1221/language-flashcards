import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Learn from './Learn';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import '../styles/App.css';

const initialState = {
  user: {
    loggedIn: false,
    userName: '',
    translateFrom: '',
    translateTo: '',
  },
};

function App() {
  const [user, setUser] = useState(initialState.user);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/login" render={() => <UserLogin userState={user} setUserState={setUser} />} />
          <Route exact path="/register" render={() => <UserRegister userState={user} setUserState={setUser} />} />
          <Route exact path="/" render={() => <Home userState={user} setUserState={setUser} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
