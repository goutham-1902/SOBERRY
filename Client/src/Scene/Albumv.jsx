import React from 'react'
import { useParams } from 'react-router-dom';
import './Scene.css'
import {album} from '../../Data/newalb'
import Listitem from '../Component/Listitem';
import Play from "../assets/play.png"
import usePlayingStore from '../State/playing';

const Albumv = () => {
    const { id } = useParams();
    const {addbplay} = usePlayingStore((state) => ({addbplay: state.addbplay}));
    const {cleanplaylist} = usePlayingStore((state) => ({cleanplaylist: state.cleanplaylist}));
    const play = usePlayingStore((state) => state.play);
    function findElementByKeyValue(array, key, value) {
      return array.find(item => item[key] === value);
    }

    const element = findElementByKeyValue(album, 'key', id);

    const listitem = (item) => {
      return (
        <Listitem 
        key={item.sq}
        title={item.title}
        img={item.img}
        src={item.src}
        />
      )
    }

    const addtoplay = (item) => {
      addbplay(item);
    }
    function addplaylist(){
      play(element.songs[0])
      cleanplaylist
      element.songs.map(addtoplay)
    }

    return (
      <div className="albumboxlist">
        <div className="leftsidealb">
          <div className="layer">
            <center>
              <img src={element.img} className='albumbannerse' alt="" />
            </center>
            <div className="albumtitle">
              <h2 className='albumtitleh'>{element.title}</h2>
              <div className="flexboxplay">
                <div className="flexboxh3">
              <h3 className='albumartisth'>{element.Artist}</h3>
              </div>
              <div className="flexboxplay" onClick={addplaylist}>
                <div className="circleplayf">
                  <img className='circleplayimagee' src={Play} alt="" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightsidealb">
          {element.songs.map(listitem)}
        </div>
      </div>
    )
}

export default Albumv
