import React, { Component, Fragment } from 'react';

import Header from './component/Header';
import Counter from './container/Counter';
import Gambar from './container/Gambar';
import './css/App.css';

class App extends Component{
  render(){
    return (
      <Fragment>
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