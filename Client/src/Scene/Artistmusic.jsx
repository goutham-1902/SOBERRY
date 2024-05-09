import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Headtitle2 from '../Component/Headtitle2';
import { all } from '../../Data/newalb.js';
import Card from '../Component/Card.jsx';
import axios from 'axios'

const mainurl = "http://localhost:3000"
//const mainurl = "https://api.contactsushil.me"

const Artistmusic = () => {
  const { id } = useParams();
  const [selart, setselart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(mainurl+'/allmusic/');
        setselart(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  function artcreate(item){
    if(item.artistkey && item.artistkey.includes(id)){
      return (
        <Card
          key={item.src}
          src={item.src}
          album={item.album}
          genre={item.genre}
          img={item.img}
          title={item.title}
          artist={item.artist}
        />
      );
    }
    return null;
  }
  const titlee = `Discography`;

  return (
    <>
      <Headtitle2 title={titlee} />
      <div className="grid grid-cols-5 gap-2 mobilecards">
      {(selart[0])?selart.map(artcreate):"Loading..."}
      </div>
    </>
  );
};

export default Artistmusic;
