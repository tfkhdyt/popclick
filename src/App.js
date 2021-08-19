import audio from './kaget.wav'
import wah from './img/wah.png'
import u from './img/u.png'
import './App.css';
import React, { Component, Fragment } from 'react'
import Cookies from 'universal-cookie';
 
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
    cookies.set('count', parseInt(this.state.count) , { 
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
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

class Gambar extends Component {
  state = {
    pic : u
  }
  
  handleU = () => {
    this.setState({
      pic: wah
    })
  }
  
  // handleWah = () => {
  //   this.setState({
  //     pic: u
  //   })
  // }
  
  componentDidMount(){
    window.addEventListener('mousedown', this.handleU)
    document.body.onkeyup = function(e){
      if(e.keyCode === 32){
        this.handleU();
      }
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.pic === wah) {
      this.balikKeAwal = setTimeout(() => { 
        this.setState(() => ({pic: u}))
        console.log('uwah')
      }, 400);
    }
  }
  
  componentWillUnmount() {
    clearTimeout(this.balikKeAwal);
  }
  
  render(){
    return (
      <div className='row'>
        <div className='col-6 col-md-6 mx-auto'>
          <img src={this.state.pic} className="fixed-bottom mx-auto" alt="" id="img" height="55%"/>
        </div>
      </div>
    )
  }
}

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

export default App