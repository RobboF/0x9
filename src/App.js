import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class='heading'> 0<span style={{fontSize: "30pt", verticalAlign: "10px"}}>x</span>9 </h1>
        <p> Watch this space</p>
      </header>
    </div>
  );
}

export default App;
