import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sign from './Sign'
import Home from './Home'
// 73
//import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import Login from './Components/login.component';

ReactDOM.render(
  <React.StrictMode>
    {/* <Sign /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();