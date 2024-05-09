import React from 'react'
import Headtitle2 from '../Component/Headtitle2'
import Card from '../Component/Card'
import usePlayingStore from '../State/playing';

const Recent = () => {
  const { recently } = usePlayingStore((state) => ({ recently: state.recently }));


function create(item){
  return <Card
  key={item.src}
  src={item.src}
  album={item.album}
  genre={item.genre}
  img={item.img}
  title={item.title}
  artist={item.artist}/>
}

  return (
    <>
    <Headtitle2 title="Recently Played" />
    <div className="grid grid-cols-5 gap-5 mobilecards">
    {recently.map(create)}
    </div>
    </>

  )
}

export default Recent