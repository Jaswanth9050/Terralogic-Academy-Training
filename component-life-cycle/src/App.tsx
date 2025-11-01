import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import LifecycleDemo from './component/ClasslifeCycleDemo';
import FunctionalLifeCycle from './component/FunctionalLifeCycleDemo';
import PostList from './component/PostList';
import PhotoList from './component/Photo';

function App() {
  return (
    // <PhotoList/>
    <div className="App">
      <header className="App-header">
        {/* <LifecycleDemo/> */}
        {/* <FunctionalLifeCycle/> */}
        <PostList/>
        {/* <PhotoList/> */}
      </header>
    </div>
  );
}

export default App;
