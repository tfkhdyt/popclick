import React, { Component } from 'react';

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
    setTimeout(() => {
      clearTimeout(this.timer);
      this.setState({
        pic : this.gambarU
      });
    }, 100);
  }
  
  componentDidMount(){
    document.body.addEventListener('touchstart', this.handlePress);
    document.body.addEventListener('touchend', this.handleRelease);
    document.body.addEventListener('mousedown', this.handlePress);
    document.body.addEventListener('mouseup', this.handleRelease);
    /*window.addEventListener('keydown', this.handlePress);
    window.addEventListener('keyup', this.handleRelease);*/
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

export default Gambar;