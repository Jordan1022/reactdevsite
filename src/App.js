import React from 'react';
import goodlyLogo from './goodlyLogo.svg';
import './App.css';
import './LoginForm.js';
import {Switch, Route} from 'react-router-dom'
import landingPage from './pages/LandingPage/landingPage';
import contact from './pages/ContactPage/contactPage'

const App = () => {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={landingPage}/>
        <Route exact path="contact" component={contact}/>
      </Switch>
    </div>
  );
}

export default App;
