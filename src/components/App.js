import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Learn from './Learn';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import '../styles/App.css';
import FlashcardList from './Flashcardlist';

const initialState = {
  user: {
    forename: "",
    surname: "",
    translateFrom: "",
    translateTo: "",
    email: "",
    loggedIn: false,
    userID: "",
  }, 

};


function App() {
  const [user, setUser] = useState(initialState.user);  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile" render={() => user.loggedIn ? <Profile userState={user} /> : <Redirect to="/" />} />
          <Route exact path="/learn" render={() => user.loggedIn ? <Learn userState={user} setUserState={setUser} /> : <Redirect to="/" />} />
          <Route exact path="/flashcard" render={() => user.loggedIn ? <FlashcardList userState={user} />: <Redirect to="/" />} />
          <Route exact path="/login" render={() => <UserLogin userState={user} setUserState={setUser} />} />
          <Route exact path="/register" render={() => <UserRegister userState={user} setUserState={setUser} />} />
          <Route exact path="/" render={() => <Home userState={user} setUserState={setUser} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  forename: PropTypes.string,
  surname: PropTypes.string,
  translateFrom: PropTypes.string,
  translateTo: PropTypes.string,
  email: PropTypes.string,
  loggedIn: PropTypes.bool,
  userID: PropTypes.string,
};

export default App;
