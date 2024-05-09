import React from 'react';
import "../App.css";
const Men = (props) => {

  return (
    <>
    <div className="menuoption">
        <div className="menuicon"><img src={props.icon} alt="" className='menuiconimg' /></div>
        <div className="menutitle"><p className='menutitletext'>{props.title}</p></div>
    </div>
    </>
  )
}

export default Men