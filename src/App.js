import './App.css';
import React, { Component, Fragment } from 'react'
import Cookies from 'universal-cookie';
import audio from './uwah.m4a'
import u from './img/u.png'
import wah from './img/wah.png'

const cookies = new Cookies();

const Header = () => {
  return <h1>POPOWI</h1>
}

class Counter extends Component {
  state = {
    count : parseInt(cookies.get('count')) || 0
  }
  
  audio = new Audio(audio)
  
  popOut = () => {
    const element = document.getElementById('counter')
    element.classList.remove('popout')
    void element.offsetWidth
    element.classList.add('popout')
  }
  
  handleClick = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({
      count: this.state.count + 1,
    });
    cookies.set('count', parseInt(this.state.count), { path: '/' })
    this.audio.play()
    this.popOut()
  }
  
  componentDidMount(){
    window.addEventListener('mousedown', this.handleClick)
    document.body.onkeyup = function(e){
      if(e.keyCode === 32){
        this.handleClick()
      }
    }
  }
  
  render () {
    return (
      <h2 id="counter" style={{marginTop:'-15px'}}>{this.state.count}</h2>
    )
  }
}

class App extends Component{
  state = {
    pic : u
  }
  
  handleEvent = () => {
    this.setState({
      pic: wah
    })
    setTimeout(() => {
      this.setState({
        pic: u
      })
    }, 175)
  }
  
  componentDidMount(){
    document.body.addEventListener('mousedown', () => {
      this.handleEvent();
    })
    document.body.onkeyup = function(e){
      if(e.keyCode === 32){
        this.handleEvent()
      }
    }
  }
  
  render(){
    return (
      <Fragment>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-8 mt-4 mx-auto">
              <Header />
              <Counter />
              <img src={this.state.pic} className="fixed-bottom mx-auto img-fluid" alt="" id="img"/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App