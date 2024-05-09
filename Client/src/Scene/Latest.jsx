import {useState, useEffect} from 'react'
import {all} from '../../Data/newalb.js'
import Card from "../Component/Card.jsx"
import Headtitle2 from '../Component/Headtitle2.jsx'
import axios from 'axios'

//const mainurl = "http://localhost:3000"
const mainurl = "https://soberry-2.onrender.com"

function artcreate(item){
    return <Card
key={item.src}
src={item.src}
album={item.album}
genre={item.genre}
img={item.img}
title={item.title}
Likeddata={item.is_liked}
artist={item.artist}/>
}

const Latest = () => {
  const [data, setData] = useState([]);


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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(mainurl + '/allmusic');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
<Headtitle2
      title="Latest Tracks"
      />
    <div className="grid grid-cols-5 gap-2 mobilecards">
    {(data[0])?data.map(artcreate):"Loading..."}
    </div>
    </>
  )
}

export default Latest