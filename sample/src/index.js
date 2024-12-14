import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import Module1 from './module1';
import Home from './Home/home';
import Condition from './Conditional_Styling/condition';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Module1/>
    <Home/>
<Condition/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
