import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HelloWorld from './project/Hello-World/helloWorld';
// import StatelessComp from './project/Stateless/stateless';
import StatefullComp from './project/Statefull/statefull';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Menampilkan komponen Hello World<HelloWorld />  */}

    {/* Menampilkan komponen Stateless Component <StatelessComp />   */}

    {/* Menampilkan komponen Statefull Component*/} <StatefullComp />   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
