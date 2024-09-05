import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const SearchComp = () => {
    const [query,setQuery]=useState("");
    const navigate=useNavigate();

    const searchGifs=()=>{
        if(query.trim()===""){
            return;
            
        }
        navigate(`/search/${query}`);
    }
  return (
    <div className='flex relative'>
        <input type='text' 
        placeholder='Enter something to related gifs' 
        className='w-full content-center py-5 rounded text-black pl-6 border-2 pr-10 border-gray-300 outline-none'
        onChange={(e)=>setQuery(e.target.value)}
        />
        {query && 
        <button onClick={()=>setQuery("")}
          className='absolute bg-gray-900 right-28 rounded-lg bg-gray-60 top-6 opacity-70'>
         <RxCross2 size={30}  />
         </button>}

        <button className='px-4 py-5 rounded bg-slate-600' onClick={searchGifs}>
           <IoSearchOutline size={40}/>
        </button>
    </div>
  )
}

export default SearchComp