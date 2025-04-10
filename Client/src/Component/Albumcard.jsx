import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Albumcard = (props) => {
  const tlink='/album/'+props.link;
  return (
    <Link to={tlink}>    
    <div
      className="card-outer drop-shadow-2xl place-items-start overflow-hidden" 
    >
      <span className="image-card-m">
      <img className='card-img w-40'  src={props.src} alt="" height="600px" />
      </span>
      <span className="btnplusfl">
      </span>
      <span className="cardtitlearea">
      <h3 className="cardtitle text-lg">{props.title}</h3>
      </span>
     <span className="cardsubtitlearea">
      <h4 className="cardsubtitle">{props.artist}</h4>
     </span>
    </div>
    </Link>

  );
};


export default Albumcard