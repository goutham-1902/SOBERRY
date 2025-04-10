import React from 'react'
import { Link } from "react-router-dom";
const Cardart = (props) => {
  
    const linkval='/artist/'+props.link;
  return (
    <>
        <div className="card-art drop-shadow-2xl place-items-start">
        <Link to={linkval}>
            <img className='rounded-lg card-img-art' src={props.src} />
            <h3>{props.title}</h3>
          </Link>
        </div>
    </>
  )
}

export default Cardart