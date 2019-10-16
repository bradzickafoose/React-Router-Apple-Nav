import React from 'react';
// import logo from './logo.svg';
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
        <TopNav links={links}/>
        <SubNav />
      </NavWrapper>
    </div>
  );
}

export default App;
