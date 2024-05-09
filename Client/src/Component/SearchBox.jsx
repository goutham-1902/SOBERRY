import React, { useState } from 'react';
import axios from 'axios';
import Headtitle2 from './Headtitle2';
import Card from './Card';
import Cardart from './Cardart';

const mainurl = "http://localhost:3000"
//const mainurl = "https://api.contactsushil.me"

const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artistSearch, setArtistSearch] = useState([]); // Changed default value to empty array
  const [musicSearch, setMusicSearch] = useState([]); // Changed default value to empty array
  const [show, setShow] = useState(false); 

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
        try {
            const response = await axios.post(mainurl+'/search', { searchQuery });
            console.log(response.data); 
            
            if (response.status === 404) {
                console.log('No results found.');
                setArtistSearch([]);
                setMusicSearch([]);
                
            } else {
                setArtistSearch(response.data.artist || []);
                setMusicSearch(response.data.music || []);
                setShow(true); 
            }
        } catch (error) {
          window.alert("No music found");
            console.error('Error searching:', error);
        }
    }
};


  function create(item){
    return (
      <Card
        key={item.src}
        src={item.src}
        album={item.album}
        genre={item.genre}
        Likeddata={item.is_liked}
        img={item.img}
        title={item.title}
        artist={item.artist}
      />
    );
  }

  function artcreate(item){
    return (
      <Cardart 
        key={item.artistkey}
        src={item.img}
        link={item.artistkey}
        title={item.name}
      />
    );
  }

  function Rendermusic(){
    return (
      <>
        <Headtitle2 
          title="Searched Music"
        />
        <div className="grid grid-cols-5 mobilecards mt-5">
          {(musicSearch.length > 0) ? musicSearch.map(create) : "Loading..."}
        </div>
      </>
    );
  }

  function Renderart(){
    return (
      <>
        <Headtitle2 
          title="Searched Artist"
        />
        <div className="grid grid-cols-5 mobilecards mt-5">
          {(artistSearch) ? artistSearch.map(artcreate) : "Loading..."}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-start">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      {(show) && (
        <>
          <Rendermusic />
        </>
      )}
    </>
  );
}

export default SearchBox;
