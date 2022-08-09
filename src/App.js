import logo from './logo.svg';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect } from 'react';
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './Reducers';





const store = createStore(reducer, applyMiddleware(thunk, logger))

function App({ dispatch }) {


  return (
    <Provider store={store}>

    <div className="App">
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
    </Provider>

  );
}

export default App;
