import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Learn from './Learn';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import '../styles/App.css';
import FlashcardList from './Flashcardlist';
import axios from 'axios';

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
  savedFlashcards: [{
    id: 1,
    original: "hello",
    translation: "goodbye"
   }]
};

/*useEffect (() => {
  axios
    .get("https://translation-app-mcrcodes.herokuapp.com")
    .then((response) => response.json())
    .then((data) => {
        setState({
            quoteData: data.quotes
            })
      })
      .catch(error => console.log('Error', error));

    randomFlashcard();
      initialPhrase: Value.initialPhrase,
      translatedPhrase: Value.translatedPhrase
});

  randomFlaschard() {
    const randomNumber = Math.floor(Math.random() * this.quoteData.length);
    return this.quoteData[randomNumber];
  }*/

function App() {
  const [user, setUser] = useState(initialState.user);
  const [flashcards, setFlashcards] = useState(initialState.savedFlashcards);

  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile" render={() => user.loggedIn ? <Profile userState={user} /> : <Redirect to="/" />} />
          <Route exact path="/learn" render={() => user.loggedIn ? <Learn userState={user} setUserState={setUser} /> : <Redirect to="/" />} />
          <Route exact path="/login" render={() => <UserLogin userState={user} setUserState={setUser} />} />
          <Route exact path="/register" render={() => <UserRegister userState={user} setUserState={setUser} />} />
          <Route exact path="/" render={() => <Home userState={user} setUserState={setUser} />} />
          <Route exact path="/flashcard" render={() => <FlashcardList flashcards={flashcards} />} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
