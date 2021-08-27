import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Howl } from 'howler';
import { toast } from 'react-toastify';
import axios from 'axios';
  
import suara from '../audio/kaget.wav';
import 'react-toastify/dist/ReactToastify.css';

const cookies = new Cookies();

class Counter extends Component {
  state = {
    count : parseInt(cookies.get('count')) || 0,
    userProv : cookies.get('userProv'),
    userProvScore : ''
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
  
  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
      toast.success(`Anda telah mencapai ${this.formatNumber(count)}!
Anda adalah seorang ${this.role}`);
      this.role = undefined;
    }
  }
  
  
  putDataToAPI = () => {
    axios.patch(`${process.env.REACT_APP_API_GET}${this.state.userProv}`, {})
    .then((res) => {
      // console.log(`Success : ${this.state.userProv} = ${this.state.userProvScore + 1}`);
    }, (err) => {
      console.log('error: ', err)
    })
  }
  
  handlePress = () => {
    this.timer = setTimeout(() => {
      this.playAudio();
      this.popOut();
      this.setState({
        count: this.state.count + 1,
      });
      this.setCookies(this.state.count);
      this.putDataToAPI();
      this.showNotif(this.state.count);
    }, 0);
  }
  
  handleRelease = () => {
    clearTimeout(this.timer);
  }
  
  componentDidMount(){
    console.log('Jangan ciduk saya pak. Saya sedang belajar React.js, berhubung popcat.click sedang ngetren saat ini, ya sudah saya buat saja versi clonenya. Saya bukan bermaksud untuk makar 🙏🏼, saya saat pilpres saja memilih Pak Jokowi kok, hehe');
    window.addEventListener('touchstart', (e) => {
      if (!e.target.classList.contains('unevent') && !e.target.classList.contains('swal2-timer-progress-bar-container')) {
        this.handlePress();
      }
    });
    window.addEventListener('touchend', this.handleRelease);
    window.addEventListener('mousedown', (e) => {
      if (!e.target.classList.contains('unevent') && !e.target.classList.contains('swal2-timer-progress-bar-container')) {
        this.handlePress();
      }
    });
    window.addEventListener('mouseup', this.handleRelease);
    window.addEventListener('keydown', (e) => {
      if (e.repeat) { return }
      this.handlePress();
    });
    window.addEventListener('keyup', this.handleRelease);
  }
  
  render () {
    return (
      <div>
        <h2 id="counter" style={{marginTop:'-15px'}}>{this.formatNumber(this.state.count)}</h2>
      </div>
    )
  }
}

export default Counter;