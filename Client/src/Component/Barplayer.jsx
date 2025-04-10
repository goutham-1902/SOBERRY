import React, { useState, useEffect, useRef } from 'react';
import playIcon from "../assets/pause.png";
import pauseIcon from "../assets/play.png";
import { Link } from 'react-router-dom';
import next from "../assets/next-button.png";
import previous from "../assets/previous.png";
import disz from "../Icon/disc-com.png";
import usePlayingStore from '../State/playing';
import {IconHeart, IconHeartFilled} from '@tabler/icons-react';

const Barplayer = ({
  Adre,
  songInfo,
  setSongInfo,
  isPlaying,
	setIsPlaying
}) => {
  const { playing, playlist, play, popplaylist, Likeddata} = usePlayingStore((state) => ({ 
    playing: state.playing,
    playlist: state.playlist,
    play: state.play,
    popplaylist: state.popplaylist,
    Likeddata: state.playing.Likeddata
   }));
  const handleTimeSeek = (e) => {
    Adre.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      Adre.current.pause();
      setIsPlaying(false);
    } else {
      Adre.current.play();
      setIsPlaying(true);
    }
  };
  
  const handlenext = async () => {
    if(playlist[0]){
		await play(playlist[0]);
    popplaylist
		if (isPlaying) {
			Adre.current.play();
		}
    popplaylist();
  }
	};
  const handlenexd = () => {
    handlenext()
    handlenext()
	};

  useEffect(() => {
    if (isPlaying) {
      console.log("Effect triggered");
      Adre.current.play();
    }
  }, [playing]);


  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };



  const useridinfo = getCookie('userID');
  const handleLike = async () => {  
    try {
      const response = await axios.post(mainurl+'/likemusic', {
        user_id: useridinfo,
        song_id: props.img 
      });
      if(response.ok){
        setLiked(true); // Update liked state to true
      }
    } catch (error) {
      console.error('Error adding liked music:', error);
    }
  };
  
  const handledislike = async () => {  
    try {
      const response = await axios.post(mainurl+'/removelike', {
        user_id: useridinfo,
        song_id: props.img 
      });
      if(response.ok){
        setLiked(false);
      }
    } catch (error) {
      console.error('Error removing liked music:', error);
    }
  };


  return (
    <>
      <div className="barplayer">
      <div className="text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="py-4">
          <Link to="/" className="block py-2 text-gray-300 hover:text-white hover:bg-gray-800">Home</Link>
          <Link to="/explore" className="block py-2 text-gray-300 hover:text-white hover:bg-gray-800">Explore</Link>
          <Link to="/album" className="block  py-2 text-gray-300 hover:text-white hover:bg-gray-800">Playlist</Link>
        </div>
      </div>
    </div>
        <div className="imagebanner">
      <center>
        <img className="flex-player-banner mobileimagebp shadow-2xl" src={playing.img || "https://img.youtube.com/vi/RGY2gGafiGM/maxresdefault.jpg"} alt={playing.title} />
      </center>
      </div>
      <div className="otherdata">
        <div className="mobileinput">
          <div className="currenttimemobile">
        {formatTime(songInfo.currentTime)}
            </div>   
            <div className="mobildinputbar">
        <input
        className='audio-ragemobile'
        type="range"
        min={0}
        max={songInfo.duration || 0}
        value={songInfo.currentTime}
        onChange={handleTimeSeek}
      />
      </div>
      <div className="mobiletotal">
      {formatTime(songInfo.duration) || 0}
      </div>
        </div>
        <span className="titlemob">
      <h2 className='player-h1 text-2xl'>{playing.title || "Wish You Were Here"}</h2>
      </span>
      <ul className='meta-player'>
        <li className='meta-info text-sm'>{playing.artist || "Frappe Ash"}</li>
        <li className='meta-info text-sm'>{formatTime(songInfo.duration)|| 0}</li>
      </ul>
      {playing.album ?
        <div className="barplay-box box-border w-100 border-4 rounded-lg border-hidden flex m-1">
          <div className="icon m-2">
            <img src={disz} className={`disc-svg-ic ${isPlaying ? 'animate-spinn' : ''}`} id='disciconalb' alt="" />
          </div>
          <div className="data-alb text-lg m-1">
            {playing.album}
          </div>
        </div> : ""}
      <div className="operator flex">
        <img
          className="flex-control-player-ot"
          src={previous}
          alt=""
          onClick={handlePlayPause}
        />
        <img
          className="flex-control-player-img"
          src={isPlaying ? playIcon : pauseIcon}
          alt=""
          onClick={handlePlayPause}
        />
        <img
          className="flex-control-player-ot"
          src={next}
          alt=""
          onClick={handlenext}
        />
      </div>
      <div className="flex justify-between content-center">
      <p className='text-sm meta-player'>
        {formatTime(songInfo.currentTime)}/{formatTime(songInfo.duration) || 0}
      </p>
      </div>
      <input
        className='audio-rage'
        type="range"
        min={0}
        max={songInfo.duration || 0}
        value={songInfo.currentTime}
        onChange={handleTimeSeek}
      />
      </div>
      </div>
      {(playlist[0]) ? (
        <div className="border border-white my-3 p-2 rounded-full shadow-md" style={{ borderColor: 'orange' }} onClick={handlenext}>
          <h2 className="text-xl">{playlist[0].title}</h2>
        </div>
      ) : ""}
      {(playlist[1]) ? (
        <div className="border border-white my-3 p-2 rounded-full shadow-md" style={{ borderColor: 'orange' }} onClick={handlenexd}>
          <h2 className="text-xl">{playlist[1].title}</h2>
        </div>
      ) : ""}
    </>
  );
};

export default Barplayer;
