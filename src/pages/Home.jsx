import React, { useEffect } from 'react'
import { useGifContext } from '../context/createContext'
import Gif from '../components/gif';
import { IoMdTrendingUp } from 'react-icons/io';
import FilterCom from '../components/filter';

const Home = () => {
  const {gif,gifs,favorites,filter,setFilter,setGifs,setFavorites}=useGifContext();

  const fetchTrandingGifs=async()=>{
    try{
     const {data}=await gif.trending({
      limit:30,
      type:filter,
      rating:'g',
     });
     setGifs(data);
    }
    catch(err){
      console.log(err)
    }
  
  }
  useEffect(()=>{
    fetchTrandingGifs();
  },[filter])

  
  return (

  <div>
     <div className='mb-5'>
      <img src="/banner.jpeg" alt="banner image" 
       className='w-full h-[185px] mt-2 border-red-500 rounded mb-3'  />
        {/* filter and trending */}
         <div className='flex flex-col md:flex-row justify-between mb-3'>
            <IoMdTrendingUp size={30} />
            <FilterCom/>
         </div>

        
       <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
         {gifs?.map((value)=>{
          return <Gif key={value.id} gif={value}/>
         })}
        </div>
      home
    </div>
  </div> 
  )
}
 
export default Home