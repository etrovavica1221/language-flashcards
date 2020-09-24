import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Learn from './Learn';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import '../styles/App.css';
// import FlashcardList from './Flashcardlist';

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
}

function App() {
  const [user, setUser] = useState(initialState.user);
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile" render={() => <Profile userState={user} />} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/login" render={() => <UserLogin userState={user} setUserState={setUser} />} />
          <Route exact path="/register" render={() => <UserRegister userState={user} setUserState={setUser} />} />
          <Route exact path="/" render={() => <Home userState={user} setUserState={setUser} />} />
          {/* <Route exact path="/flashcard" render={() => <FlashcardList flashcards={flashcards} />} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    original: "this is a sentence",
    translation: "this is another sentence"
  }
]

export default App;
