import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import DemoApp2 from './DemoApp2';
// import DemoApp3 from './DemoApp3';
import DemoApp4 from './DemoApp4';


// let data = {
//   "firstName": "Hieu",
//   "lastName": "Nguyen",
//   "gender" : "Nam",
// }
ReactDOM.render(
  <React.StrictMode>
    <DemoApp4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
