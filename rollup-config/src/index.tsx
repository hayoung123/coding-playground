import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/global.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl
);
