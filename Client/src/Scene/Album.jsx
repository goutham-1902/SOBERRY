import { useState, useEffect } from 'react'
import {album} from "../../Data/newalb.js"
import Albumcard from '../Component/Albumcard'


function create(item){
  return <Albumcard 
  key={item.key}
  src={item.img}
  title={item.title}
  link={item.key}
  />
}

const Album = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

 
  //{loading? "Loading" : <div className="grid grid-cols-5 gap-5 mobilecards">
  //  {data.map(create)}
  //  </div>}
  return (
    <>
     <div className="grid grid-cols-5 mobilecards">
    {album.map(create)}
    </div>
    </>
  )
}

export default Album