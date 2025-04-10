import React, { useState, useRef } from "react";
import "../App.css";
import Barplayer from '../Component/Barplayer';
import Headmenu from '../Component/Headmenu.jsx';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'
import usePlayingStore from '../State/playing';
import { useNavigate } from 'react-router-dom';


const Layout = () => {
  const musicRef = useRef(null);
  const { playing, playlist } = usePlayingStore((state) => ({ 
    playing: state.playing,
    playlist: state.playlist
   }));
   const play = usePlayingStore((state) => state.play);
  const {popplaylist} = usePlayingStore((state) => ({popplaylist: state.popplaylist}));
  const {setduration} = usePlayingStore((state) => ({setduration: state.setduration}));
	const [currentSong, setCurrentSong] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

  const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

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
  
	const songEndHandlerr = async () => {
    if(playlist[0]){
		await play(playlist[0]);
		if (isPlaying) {
			musicRef.current.play();
		}
    popplaylist();
  }
	};
  const useridinfo = getCookie('userID');
  if(!useridinfo){
    const navigate = useNavigate();
    navigate('/login');
  }
  function Preloader(){
    return (
      <>
      <div className="prelaoderdiv">
        <div className="heading">
        </div>
      <center className='animate-pulse'>
      <center> <h3 className="animate-pulse">Loading!!</h3></center> 
        <img src={logo} alt="" />
        <center> <h4 className="animate-pulse">"Click on Play after selecting music"</h4></center> 
      </center>
      <div className="heading">
        
        </div>
      </div>
      </>
    )
  }



  return (
   <>
  <audio
      src={playing.src || "https://ihhplayer.s3.ap-south-1.amazonaws.com/Wish+You+Were+Here.mp3"}
      ref={musicRef}
      onLoadedMetadata={updateTimeHandler}
			onTimeUpdate={updateTimeHandler}
      onEnded={songEndHandlerr}
      />
  <div className="maincontent">
    <div className="Headermenu">
      <Headmenu/>
    </div>
  <div className="box2">  
  <div className="sidecontent">
  <Barplayer
  Adre={musicRef}
  songInfo={songInfo}
	setSongInfo={setSongInfo}
  isPlaying={isPlaying}
	setIsPlaying={setIsPlaying}
  />
  </div>
  <div className="allaudio theme">
  <Outlet 
  isPlaying={isPlaying}
  />
  </div>
  </div>
  </div>
   </>
  )
}

export default Layout