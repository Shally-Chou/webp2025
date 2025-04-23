import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const styleArgument = { fontSize: '100px', color: 'red'};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  /*<h1 style={styleArgument}>hello world !</h1>,
  document.getElementById('root')*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
