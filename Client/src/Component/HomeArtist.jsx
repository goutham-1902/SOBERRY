import { useState, useEffect } from 'react'
import "../Scene/Scene.css"
import Cardart from './Cardart';
import Headtitle from './Headtitle';

const HomeArtist = () => {
    const [artistdata, setartistData] = useState(null);
  const [loadingartist, setLoadingartist] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://ihhpserver.onrender.com/artist');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setartistData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoadingartist(false);
      }
    };

    fetchData();
  }, [])

  function artcreate(item){
    return <Cardart 
    key={item.key}
    src={item.img}
    link={item.key}
    title={item.name}/>
  }

  return (
    <>
<Headtitle
      title="Popular Artist"
      />
    {loadingartist ? "Loading" : (
  <div className="artist flex">
    {artistdata && artistdata.map(artcreate)}
  </div>
)}
    </>
  )
}

export default HomeArtist