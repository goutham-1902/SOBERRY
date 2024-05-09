// Initialize all as an empty array if not provided in ../../Data/newalb
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { all} from '../../Data/newalb'; 
import Card from '../Component/Card';

const Sections = () => {
    const { id } = useParams();
    function rendersection(item){
        console.log(item)
        if(item.genre && item.genre.includes(id)){
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
  
  return (
    <>
    <div className="grid grid-cols-5 gap-2 mobilecards">
    {all.map(rendersection)}
    </div>
    </>
  )
}

export default Sections
