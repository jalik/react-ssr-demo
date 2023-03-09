import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
console.log('hydrate');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
