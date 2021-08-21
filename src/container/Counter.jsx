import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Howl } from 'howler';
import Swal from 'sweetalert2';

import suara from '../audio/kaget.wav';

const cookies = new Cookies();

class Counter extends Component {
  state = {
    count : parseInt(cookies.get('count')) || 0
  }
  
  audio = new Howl({
    src: [suara]
  });
  
  playAudio = () => {
    this.audio.stop();
    this.audio.play();
    this.audio.fade(0, 1, 100);
  }
  
  popOut = () => {
    const element = document.getElementById('counter')
    element.classList.remove('popout')
    void element.offsetWidth
    element.classList.add('popout')
  }
  
  setCookies = (data) => {
    cookies.set('count', parseInt(data) , { 
      path: '/',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
  }
  
  handlePress = () => {
    this.timer = setTimeout(() => {
      this.playAudio();
      this.popOut();
      this.setState({
        count: this.state.count + 1,
      });
      this.setCookies(this.state.count);
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
    document.body.addEventListener('touchstart', this.handlePress);
    document.body.addEventListener('touchend', this.handleRelease);
    document.body.addEventListener('mousedown', this.handlePress);
    document.body.addEventListener('mouseup', this.handleRelease);
    /*window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);*/
  }
  
  render () {
    return (
      <h2 id="counter" style={{marginTop:'-15px'}}>{this.state.count}</h2>
    )
  }
}

export default Counter;