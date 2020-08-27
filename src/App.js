import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App col">
      <NavBar />
      <header className="App-header">
        <div className="darken-cover"></div>
        <div className="container">
          <p className="hero-text col">
            <h1>The fastest path to a career in web development</h1>
            <button className="cta"> Sign Up for Early Access &gt; </button>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
