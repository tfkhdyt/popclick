import React, { Component } from 'react';
import '../css/App.css';

class Gambar extends Component {
  gambarU = "https://i.postimg.cc/JhTM6rh9/u.png";
  gambarWah = "https://i.postimg.cc/sx9FSwjR/wah.png";
  
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
    setTimeout(() => {
      clearTimeout(this.timer);
      this.setState({
        pic : this.gambarU
      });
    }, 100);
  }
  
  componentDidMount(){
    window.addEventListener('touchstart', this.handlePress);
    window.addEventListener('touchend', this.handleRelease);
    window.addEventListener('mousedown', this.handlePress);
    window.addEventListener('mouseup', this.handleRelease);
    window.addEventListener('keydown', (e) => {
      if (e.repeat) { return }
      this.handlePress();
    });
    window.addEventListener('keyup', this.handleRelease);
  }

  render(){
    return (
      <div className='row'>
        <div className='col-6 col-md-6 mx-auto'>
          <img src={this.state.pic} className="fixed-bottom mx-auto" alt="" id="img" style={{marginBottom:'-5px'}}/>
        </div>
      </div>
    )
  }
}

export default Gambar;