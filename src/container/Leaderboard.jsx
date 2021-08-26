import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Provinsi from '../component/Provinsi';
import Indonesia from '../component/Indonesia';
import Team from '../container/Team';

const cookies = new Cookies();

class Leaderboard extends Component {
  state = {
    stat : [],
    total : '',
    max : [],
    userProv : cookies.get('userProv'),
    userProvScore : ''
  }
  
  getStatAPI = () => {
    axios.get(process.env.REACT_APP_API_GET)
    .then(res => {
      const data = res.data.data;
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
    axios.get(process.env.REACT_APP_API_GET_MAX)
    .then(res => {
      const data = res.data.data;
      // console.log(data[0])
      this.setState({
        max : data[0]
      })
    })
  }
  
  getUserProvScore = (prov) => {
    axios.get(`${process.env.REACT_APP_API_GET}${prov}`)
    .then(res => {
      const userProvScore = res.data.data.score;
      this.setState({
        userProvScore : userProvScore
      });
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
    this.getUserProvScore(this.state.userProv);
    setInterval(() => {
      this.getStatAPI();
      this.getUserProvScore(this.state.userProv);
    }, 2500)
  }
  
  render () {
    return (
      <Fragment>
        <button className="btn btn-light btn-lg col-12 col-md-8 fixed-bottom unevent p-3 btnLeaderboard" type="button" onClick={this.getStatAPI} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" style={{width : '100%'}}>
          <div className="row unevent" style={{fontSize: '.8rem'}}>
            <div className="col-1 float-start unevent">🏆</div>
            <div className="col v-divider unevent">#1 {this.state.max.prov} - {this.convertToInternationalCurrencySystem(this.state.max.score)}</div>
            <div className="col-1 unevent">...</div>
            <div className="col unevent fw-bold">{this.state.userProv} - {this.state.userProvScore}</div>
          </div>
        </button>
        
        <div className="offcanvas offcanvas-bottom unevent" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="false" style={{height:'76.5vh'}}>
          <div className="offcanvas-header unevent py-2">
            <b className="offcanvas-title unevent" id="offcanvasBottomLabel">🏆 Top Provinsi Pemakar</b>
            <button type="button" className="btn-close text-reset unevent" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body small unevent container pt-0">
            <Indonesia total={this.state.total}/>
            {
              this.state.stat.map((stat, i) => {
                return <Provinsi key={stat._id} nomor={++i} data={stat} flag={stat.flag}/>
              })
            }
            <Team />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Leaderboard;