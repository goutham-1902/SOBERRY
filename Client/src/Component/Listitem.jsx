import React from 'react'
import playIcon from "../assets/play.png";
import usePlayingStore from '../State/playing';

const Listitem = (props) => {
  const play = usePlayingStore((state) => state.play);
  const handleclick = () => {
    play(props);
  };
  return (
   <>
   <div className="listitemlayer" onClick={handleclick}>
    <div className="playlistitem">
      <img src={playIcon} className='playiconlist' alt="" />
    </div>
    <div className="imaget">
      <img src={props.img} className='listitemimage' alt="" />
    </div>
    <div className="titleitem">
    <h3 className='albumtitleh'>{props.title}</h3>
    </div>
   </div>
   </>
  )
}

export default Listitem