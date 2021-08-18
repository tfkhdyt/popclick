import './App.css';
import React, { Component, Fragment } from 'react'

const Header = () => {
  return <h1>POPCLICK</h1>
}

class Counter extends Component {
  state = {
    count : 0
  }
  
  popOut = () => {
    const element = document.getElementById('counter');
    element.classList.remove('popout'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('popout'); // start animation
  }
  
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    this.popOut()
  }
  
  componentDidMount(){
    window.addEventListener('click', this.handleClick)
    document.body.onkeyup = function(e){
      if(e.keyCode === 32){
        this.handleClick()
      }
    }
  }
  
  render () {
    return (
      <h2 id="counter">{this.state.count}</h2>
    )
  }
}

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-8 mt-5 mx-auto">
            <Header />
            <Counter />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
