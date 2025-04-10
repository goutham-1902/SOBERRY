import React from 'react'
import { Link } from 'react-router-dom'

const Headtitle = (props) => {
  var link='/';
  if(props.title=="Popular Artist"){
    link='/artist'
  }
  else if(props.title=="Latest Songs"){
    link='/latest'
  }
  else if(props.title=="Recently Played"){
    link='/recent'
  }
  else if(props.title=="Hit Artists"){
    link='/artist'
  }
  else if(props.title=="Recently Played Hits"){
    link='/recent'
  }

  return (
    <>
    <div className="bar">
        <div className="headline">
            <h2 className='text-2xl pl-2.5'>{props.title}</h2>
        </div>
        <div className="all">
            <p className='showall pr-2.5'><Link to={props.Link || link}>Show All</Link></p>
        </div>
    </div>
    </>
  )
}

export default Headtitle