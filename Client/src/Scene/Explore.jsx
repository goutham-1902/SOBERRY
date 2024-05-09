import {useState, useEffect} from 'react'
import SearchBox from '../Component/SearchBox'
import Cardart from '../Component/Cardart'
import axios from 'axios'
import Headtitle from '../Component/Headtitle'

//const mainurl = "http://localhost:3000"
const mainurl = "https://soberry-2.onrender.com"

function artcreate(item){
    return <Cardart 
    key={item.artistkey}
    src={item.img}
    title={item.name}
    link={item.artistkey}
    />
  }

const Explore = () => {
    const [data, setartist] = useState([]);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
              const response = await axios.get(mainurl+'/artistlimit');
              setartist(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        fetchArtist();
      }, []);


  return (
    <>
    <SearchBox/>
    <div className="mt-5">
    <Headtitle 
    title="Hit Artists"
    />
    <div className="grid grid-cols-5 mobilecards mt-5">
    {(data[0])?data.map(artcreate):"Loading..."}
    </div>
    </div>
    </>
  )
}

export default Explore