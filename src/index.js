import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App store={STORE} />
  </React.StrictMode>,
  document.getElementById('root')
);
