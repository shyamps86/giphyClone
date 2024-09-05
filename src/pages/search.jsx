import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGifContext } from '../context/createContext';
import FilterCom from '../components/filter';
import Gif from '../components/gif';

const Search = () => {
  const {query}=useParams();
  const [searchResults,setSearchResults]=useState([]);

  const {gif,filter}=useGifContext();

  const fetchSearchResults=async()=>{
    const {data}=await gif.search(query,{
      sort:"relevant",
      type:filter,
      limit:20,
    });
    setSearchResults(data);
  }

  useEffect(()=>{
    fetchSearchResults();
  },[filter])

  console.log(searchResults)

  return (
    <div>
       <h1 className='text-3xl text-center'>{query}</h1>

       <div className='flex justify-end'><FilterCom/></div>

       <div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
          {searchResults?.map((value)=>{
              return (
                  <Gif gif={value} key={value.id}/>
                  )
                })}
        </div>

       
    </div>
  )
}

export default Search