import React from 'react';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Indonesia = (props) => {
  return (
    <div>
      <div className="row unevent" style={ { fontSize: '10pt' }}>
        <div className="col text-start unevent">
          <p className="unevent">
            🇮🇩 Indonesia
          </p>
        </div>
        <div className="col unevent text-end">
          <b className="unevent">{formatNumber(props.total)}</b>
        </div>
      </div>
      <div className="h-divider"></div>
    </div>
  );
}

export default Indonesia;