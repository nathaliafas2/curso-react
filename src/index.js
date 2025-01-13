import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tag = <strong>Olá React!! </strong> 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    { tag }
  </div>
);


reportWebVitals();
