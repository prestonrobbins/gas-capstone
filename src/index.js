//* This page is pulling in every single component (page) 
//* we create with in our app and displaying to the dom.

import { cleanup } from '@testing-library/react';
import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Gas } from "./components/Gas";
//TODO import css

//? is strict mode only there to say only do exactly what were telling it? wouldnt it be doing that already?
//? please explain where root comes from? is this just saying dig into each component?
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Gas />
        </Router>
    </React.StrictMode>,
    document.getElementById('root') 
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
