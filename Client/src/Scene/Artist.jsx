import { useState, useEffect } from 'react'
import {artist} from "../../Data/newalb.js"
import Cardart from '../Component/Cardart'
import './Scene.css'
import axios from 'axios'

const mainurl = "http://localhost:3000"
//const mainurl = "https://api.contactsushil.me"

function artcreate(item){
  return <Cardart 
  key={item.artistkey}
  src={item.img}
  title={item.name}
  link={item.artistkey}
  />
}

const Artist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(mainurl+'/artist');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <div className="grid grid-cols-5 mobilecards">
    {(data[0])?data.map(artcreate):"Loading..."}
    </div>
    </>
  )
}

export default Artist;