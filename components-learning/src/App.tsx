import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCheck from './components/buttoncheck';
import Counter from './components/Counter';
import Theam from './components/Theam';
import ClassCounter from './components/ClassCounter';
import DataBinding from './components/DataBinding';
import ParentComponent from './components/ParentComponent';
import WelcomeNote, { Greeting } from './components/WelcomeNote';
import ConditionRendering from './components/ConditionRendering';
import ListUseage from './components/ListUseage';
import ArrayTraversal from './components/ArrayTraversal';

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
        <ButtonCheck/>
        <Counter/>
        <Theam/>
        <DataBinding/>
        <ClassCounter/>
        <ParentComponent/>
      <WelcomeNote isLoggedin={true}/>
      <WelcomeNote isLoggedin={false}/>
      <Greeting isLoggedin={true} isAuthorized={true}/>
      <Greeting isLoggedin={false} isAuthorized={true}/>
      <Greeting isLoggedin={true} isAuthorized={false}/>
      <ConditionRendering isLoggedin={true} isDefaultprop="Hi"/>
      <ListUseage/>
      <ArrayTraversal/>
      </header>
    </div>
  );
}

export default App;
