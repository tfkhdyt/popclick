import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();