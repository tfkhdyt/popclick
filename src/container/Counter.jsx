import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Howl } from 'howler';
import { toast } from 'react-toastify';
  
import suara from '../audio/kaget.wav';
import 'react-toastify/dist/ReactToastify.css';

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
  
  showNotif = (count) => {
    switch (count) {
      case 100:
        this.role = 'BuzzeRp';
        break;
      case 500:
        this.role = 'Kadrun';
        break;
      case 1000:
        this.role = 'Pemakar Handal';
        break;
      case 5000:
        this.role = 'Mahasiswa Jurusan Teknik Perdemoan';
        break;
      case 10000:
        this.role = 'Buronan';
        break;
      case 30000:
        this.role = 'Penjahat Kelas Kakap';
        break;
      case 999999:
        this.role = 'Cheater';
        break;
      default:
        this.role = undefined;
        break;
    }
    if(this.role !== undefined){
      toast.success(`Anda telah mencapai ${count}!
Anda adalah seorang ${this.role}`);
      this.role = undefined;
    }
  }
  
  handlePress = () => {
    this.timer = setTimeout(() => {
      this.playAudio();
      this.popOut();
      this.setState({
        count: this.state.count + 1,
      });
      this.setCookies(this.state.count);
      this.showNotif(this.state.count);
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
    /*window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);*/
  }
  
  render () {
    return (
      <div>
        <h2 id="counter" style={{marginTop:'-15px'}}>{this.state.count}</h2>
      </div>
    )
  }
}

export default Counter;