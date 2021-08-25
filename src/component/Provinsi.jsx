import React from 'react';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Provinsi = (props) => {
  let position;
  switch(props.nomor){
    case 1: position = '🥇'; break;
    case 2: position = '🥈'; break;
    case 3: position = '🥉'; break;
    default: position = props.nomor; break;
  }
  return (
    <div>
      <div className="row unevent" style={ { fontSize: '10pt' }}>
        <div className="col text-start unevent">
          <p className="unevent">
          {position}&nbsp; <img src={props.flag} height='17' style={{marginBottom : '2.5px'}}/>  {props.data.prov}
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