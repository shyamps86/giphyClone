import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGifContext } from '../context/createContext';
import Gif from '../components/gif';
import FollowOn from '../components/followOn';

const Category = () => {

  const [results,setResults]=useState([]);
  const {gif}=useGifContext();



const {category}=  useParams();

const fetchSearchResults=async()=>{
  const {data}=await gif.gifs(category,category);
  setResults(data);
}
useEffect(()=>{
   fetchSearchResults();
},[category])


  return (
    <div className='flex flex-col sm:flex-row gap-5 my-4'>
      <div className='w-full sm:w-[50%]'>
        {results.length>0 && <Gif gif={results[1]}/>}
          <span className='text-sm pt-2'>here the {category} gif</span>
          {/* follow on */}
       <FollowOn size={20}/>
      </div>
     
     <div>
        <h1 className='font-bold text-2xl uppercase pt-2'> {category.split('-').join(' ')} Gifs </h1>
        <h1 className='font-bold mb-3'> @{category} </h1>
        <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4'>
          {results.slice(1).map((value)=>{
            return(
              <Gif key={value.id} gif={value}/>
              )
            })}
        </div>
       
      </div>
    </div>
  )
}

export default Category