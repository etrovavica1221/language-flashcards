import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Learn from './Learn';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import '../styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route path="/learn" component={Learn} />
          <Route path="/login" component={UserLogin} />
          <Route path="/register" component={UserRegister} />
          <Route path="/" component={Home} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
