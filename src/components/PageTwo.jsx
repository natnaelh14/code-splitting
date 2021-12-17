import React from 'react';
import logo from '../logo.svg';

const PageTwo = ({ onRouteChange }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <button onClick={() => onRouteChange("PageOne")}>PageOne</button>
      <button onClick={() => onRouteChange("PageThree")}>PageThree</button>
    </div>
  );
};

export default PageTwo;
