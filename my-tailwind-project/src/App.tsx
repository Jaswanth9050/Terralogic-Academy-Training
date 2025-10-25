import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='bg-red-400 p-3'> 
          it is the tailwind container
        <p className='text-blue-600 font-bold'>Tailwind Css Text</p>
        </div>
      </header>
    </div>
  );
}

export default App;
