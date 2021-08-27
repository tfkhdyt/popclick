import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Provinsi = (props) => {
  let position;
  switch(props.nomor){
    case 1: position = <span className='unevent' style={{marginLeft : '-2.5px'}}>🥇</span>; break;
    case 2: position = <span className='unevent' style={{marginLeft : '-2.5px'}}>🥈</span>; break;
    case 3: position = <span className='unevent' style={{marginLeft : '-2.5px'}}>🥉</span>; break;
    default: position = props.nomor; break;
  }
  let provinsi;
  switch(props.data.prov){
    case cookies.get('userProv') : provinsi = <b className='unevent'>{props.data.prov}</b>; break;
    default: provinsi = props.data.prov; break;
  }
  return (
    <div>
      <div className="row unevent" style={ { fontSize: '10pt' }}>
        <div className="col text-start unevent">
          <p className="unevent">
          {position}<img src={props.flag} height='17' style={{marginBottom : '2.5px'}} alt='bendera provinsi' className='unevent mx-2'/>{provinsi}
          </p>
        </div>
        <div className="col unevent text-end">
          <b className="unevent">{formatNumber(props.data.score)}</b>
        </div>
      </div>
      <div className="h-divider"></div>
    </div>
  );
}

export default Provinsi;