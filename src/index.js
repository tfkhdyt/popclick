import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import './css/index.css';

// import Goodbye from './component/Goodbye';
// import './css/Goodbye.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Goodbye />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();