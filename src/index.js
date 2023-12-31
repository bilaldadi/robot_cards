import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StrictMode} from 'react';
import 'tachyons';
import App from './App';


const root = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
