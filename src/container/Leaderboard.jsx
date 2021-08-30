import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Provinsi from '../component/Provinsi';
import Indonesia from '../component/Indonesia';
import Team from '../container/Team';
import Donate from '../component/Donate';
// import Bug from '../component/Bug';

const cookies = new Cookies();

class Leaderboard extends Component {
  state = {
    stat : [],
    total : '',
    max : [],
    userProv : cookies.get('userProv'),
    userProvScore : '',
    userProvFlag : ''
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
      const userProvFlag = res.data.data.flag;
      this.setState({
        userProvScore : userProvScore,
        userProvFlag : userProvFlag
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

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  componentDidMount(){
    setInterval(() => {
      this.getStatAPI();
      this.getUserProvScore(this.state.userProv);
    }, 2500)
  }
  
  render () {
    return (
      <Fragment>
        <button className="btn btn-light btn-lg col-12 col-md-6 fixed-bottom unevent px-3 py-2 btnLeaderboard mx-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
          <div className="row unevent" style={{fontSize: '.7rem', marginTop : '1.5px'}}>
            <div className="col-1 float-start unevent mt-2">🏆</div>
            <div className="col v-divider unevent" style={{marginTop : '1px'}}>#1 <img className='unevent mt-2' src={this.state.max.flag} height='15' style={{margin:'0 2px', marginBottom : '10.5px'}} alt=''/> {this.convertToInternationalCurrencySystem(this.state.max.score)}</div>
            <div className="col-1 unevent mt-2">...</div>
            <div className="col unevent bold" style={{fontSize:'.9rem', marginTop : '5.5px'}}><img className='unevent' src={this.state.userProvFlag} height='15' style={{margin:'0 2px', marginBottom : '5px'}} alt=''/> {this.formatNumber(this.state.userProvScore)}</div>
          </div>
        </button>
        
        <div className="offcanvas offcanvas-bottom unevent col-12 col-md-6 mx-auto" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="false" style={{height:'76.5vh'}}>
          <div className="offcanvas-header unevent py-2">
            <b className="offcanvas-title unevent" id="offcanvasBottomLabel">🏆 Top Provinsi Pemakar</b>
            <button type="button" className="btn-close text-reset unevent" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body small container unevent pt-0">
            <Indonesia total={this.state.total}/>
            {
              this.state.stat.map((stat, i) => {
                return <Provinsi key={stat._id} nomor={++i} data={stat} flag={stat.flag}/>
              })
            }
            <div className='row mx-auto'>
              <div className='col'>
                <Donate />
                {/*<Bug />*/}
                <Team />
              </div>
            </div>
            <div className='row mx-auto fw-lighter mt-2 unevent'>
              <div className="col-12 unevent">
                Kalau Leaderboardnya gak muncul berarti servernya meninggal
              </div>
              <div className="col-12 unevent">
                Provinsi yang ketauan curang/memiliki score yang gak masuk akal. Scorenya akan dikurangi!
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Leaderboard;