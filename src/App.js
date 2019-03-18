import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <AppMain>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </AppLink>
        </AppHeader>
      </AppMain>
    );
  }
}

export default App;

const AppMain = styled.div`
  text-align: center;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
`;
