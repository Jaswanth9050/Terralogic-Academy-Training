import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Card from './components/Card';
import ClassApp from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:'flex'}}>
          <Button name="JASWANTH"/>
        <Button name="B"/>
        <Button name="A"/>
        <Button name="A"/>
        </div>
        <div style={{display:'flex'}}>
          <Card name='Jas' age={20} course='MERN' company='Terralogic'/>
          <Card name='Jas' age={12} course='MERN' company='Terralogic'/>
        </div>
      <ClassApp/>
      </header>
    </div>
  );
}

export default App;
