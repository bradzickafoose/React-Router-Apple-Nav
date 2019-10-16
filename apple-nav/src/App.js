import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { NavWrapper, TopNav, SubNav } from './components/Navigation/';

const links = [
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "TV",
  "Music",
  "Support",
];

function App() {
  return (
    <div className="App">
      <NavWrapper>
        <h1>Apple</h1>
        <TopNav links={links}/>
        <SubNav />
      </NavWrapper>
    </div>
  );
}

export default App;
