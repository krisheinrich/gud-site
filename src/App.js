import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/thankyou">
          <ThankYouPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
