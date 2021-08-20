import suara from './kaget.wav';
import './App.css';
import React, { Component, Fragment } from 'react';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
// import wah from './img/wah.png';
// import u from './img/u.png';
 
const cookies = new Cookies();

const Header = () => {
  return <h1>POPOWI</h1>
}

class Counter extends Component {
  state = {
    count : parseInt(cookies.get('count')) || 0,
    touch : 0
  }
  
  audio = new Audio(suara)
  
  popOut = () => {
    const element = document.getElementById('counter')
    element.classList.remove('popout')
    void element.offsetWidth
    element.classList.add('popout')
  }
  
  handlePress = () => {
    this.timer = setTimeout(() => {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.play().catch(err => console.log(err));
      this.popOut();
      this.setState({
        count: this.state.count + 1,
      });
      cookies.set('count', parseInt(this.state.count) , { 
        path: '/',
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      });
      this.setState({
        touch : this.state.touch + 1
      });
    }, 0);
  }
  
  handleRelease = () => {
    clearTimeout(this.timer);
  }
  
  componentDidMount(){
    console.log(`Jangan tangkep saya pak,
ini cuma buat lucu-lucuan aja
Saya lagi belajar React.js, 
berhubung popcat.click lagi ngetren yaudah saya bikin aja versi clonenya.
Saya bukan bermaksud makar 🙏🏼, 
saya waktu pemilu milih bapak Jokowi kok, hehe`);
    window.addEventListener('touchstart', this.handlePress);
    window.addEventListener('touchend', this.handleRelease);
    window.addEventListener('mousedown', this.handlePress);
    window.addEventListener('mouseup', this.handleRelease);
  }
  
  render () {
    return (
      <h2 id="counter" style={{marginTop:'-15px'}}>{this.state.count}</h2>
    )
  }
}

class Gambar extends Component {
  gambarU = "https://i.postimg.cc/JhTM6rh9/u.png";
  gambarWah = "https://i.postimg.cc/zXNV12qp/1629370112907.png";
  
  state = {
    pic : this.gambarU
  }
  
  handlePress = () => {
    this.timer = setTimeout(() => {
      this.setState({
        pic : this.gambarWah
      });
    }, 0);
  }
  
  handleRelease = () => {
    clearTimeout(this.timer);
    this.setState({
      pic : this.gambarU
    });
  }
  
  componentDidMount(){
    window.addEventListener('touchstart', this.handlePress);
    window.addEventListener('touchend', this.handleRelease);
    window.addEventListener('mousedown', this.handlePress);
    window.addEventListener('mouseup', this.handleRelease);
  }

  // handleU = () => {
  //   this.setState({
  //     pic: this.gambarWah
  //   })
  // }
  
  // handleWah = () => {
  //   this.setState({
  //     pic: u
  //   })
  // }
  
  // componentDidMount(){
  //   window.addEventListener('mousedown', () => {
  //     this.setState({
  //       pic: this.gambarWah
  //     })
  //   });
  //   window.onkeypress = function(event) {
  //     if (event.which === 32) {
  //       this.setState({
  //         pic: this.gambarWah
  //       })
  //     }
  //   }
  // }
  
  // componentDidUpdate(prevProps, prevState) {
  //     this.balikKeAwal = setTimeout(() => { 
  //   if (this.state.pic === this.gambarWah) {
  //       this.setState(() => ({pic: this.gambarU}))
  //   }
  //     }, 200);
  // }
  
  // componentWillUnmount() {
  //   clearTimeout(this.balikKeAwal);
  // }
  
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