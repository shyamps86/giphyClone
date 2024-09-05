import React, { useEffect, useState } from 'react'
import { useGifContext } from '../context/createContext'
import Gif from '../components/gif';

const Favorites = () => {
  const {gif,favorites,addToFav}=useGifContext();

  const [fav,setFav]=useState([]);

  const fetchingFavorites=async()=>{
     const {data}=await gif.gifs(favorites);
     setFav(data);
  }
  useEffect(()=>{
     fetchingFavorites();
  },[addToFav])

  return (
   
    <div>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4'>
          {fav.map((value)=>{
            return(
              <Gif key={value.id} gif={value}/>
              )
            })}
        </div>
    </div>
  )
}

export default Favorites