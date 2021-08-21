import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './component/Header';
import Counter from './container/Counter';
import Gambar from './container/Gambar';
import './css/App.css';

class App extends Component{
  render(){
    return (
      <Fragment>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-8 mt-4 mx-auto">
              <Header />
              <Counter />
              <Gambar />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;