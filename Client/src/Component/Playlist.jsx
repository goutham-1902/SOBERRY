import React from 'react'
//ADD TITLE META DATA & PLAY BUTTON
const Playlist = (props) => {
  return (
    <div className="playbox">
        <div className="img">
            <img src={props.img} alt="" />
        </div>
        <div className="content">
            
        </div>
    </div>
  )
}

export default Playlist