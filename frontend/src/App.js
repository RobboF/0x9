import React from 'react';
import logo from './logo.svg'
import './App.css';
import Medium from './components/medium-container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className='heading'> 0<span style={{fontSize: "45pt", verticalAlign: "12px"}}>x</span>9 </h1>
        <Medium/>
        <p> Watch this space</p>
      </header>
    </div>
  );
}

export default App;
