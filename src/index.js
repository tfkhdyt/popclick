import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import Goodbye from './component/Goodbye';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/index.css';
// import './css/Goodbye.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Goodbye />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();