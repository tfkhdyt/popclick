import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import './fonts/stylesheet.css';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Goodbye />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();