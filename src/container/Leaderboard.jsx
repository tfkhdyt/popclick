import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Provinsi from '../component/Provinsi';
import Indonesia from '../component/Indonesia';

class Leaderboard extends Component {
  state = {
    stat : [],
    total : '',
    max : []
  }
  
  getStatAPI = () => {
    axios.get('https://leaderboard-popowi.herokuapp.com/api/v1/leaderboards/')
    .then(res => {
      const data = res.data.data;
      console.log(data)
      this.setState({
        stat : res.data.data
      })
      let total = 0;
      data.forEach(data => {
        total += data.score;
      });
      this.setState({
        total : total
      })
    })
    axios.get('https://leaderboard-popowi.herokuapp.com/api/v1/leaderboards/max')
    .then(res => {
      const data = res.data.data;
      // console.log(data[0])
      this.setState({
        max : data[0]
      })
    })
  }
  
  convertToInternationalCurrencySystem = (labelValue) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1) + " miliar"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + " juta"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + " ribu"

    : Math.abs(Number(labelValue));

}
  
  componentDidMount(){
    this.getStatAPI();
    // setInterval(() => {
    //   this.getStatAPI();
    // }, 10000)
  }
  
  render () {
    return (
      <Fragment>
        <button className="btn btn-light btn-lg col-12 col-md-8 fixed-bottom unevent p-3 btnLeaderboard" type="button" onClick={this.getStatAPI} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" style={{width : '100%'}}>
          <div className="row unevent" style={{fontSize: '.7rem'}}>
            <div className="col-1 float-start unevent">🏆</div>
            <div className="col v-divider unevent">#1 {this.state.max.prov} - {this.convertToInternationalCurrencySystem(this.state.max.score)}</div>
            <div className="col-1 unevent">...</div>
            <div className="col unevent fw-bold">DKI Jakarta - 123,456</div>
          </div>
        </button>
        
        <div className="offcanvas offcanvas-bottom unevent" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="false" style={{height:'76.5vh'}}>
          <div className="offcanvas-header unevent p-3" style={{height: '6vh'}}>
            <b className="offcanvas-title unevent" id="offcanvasBottomLabel">Top Provinsi Pemakar</b>
            <button type="button" className="btn-close text-reset unevent" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body small unevent container" style={{marginTop : '-12.5px'}}>
            <Indonesia total={this.state.total}/>
            {
              this.state.stat.map((stat, i) => {
                return <Provinsi key={stat._id} nomor={++i} data={stat} flag={stat.flag}/>
              })
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Leaderboard;