import logo from './logo.svg';
import './App.css';
import {renderToStaticMarkup} from 'react-dom/server.js';
import React from 'react';
import Content from './example.mdx';

function App() {
  return (
    <div className="App">
      {renderToStaticMarkup(React.createElement(Content))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
