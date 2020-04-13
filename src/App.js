import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Phoenix, the Elixir of massive-scale WebDev</p>
        <a
          className="App-link"
          href="https://elixir-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Elixir
        </a>
      </header>
    </div>
  );
}

export default App;
