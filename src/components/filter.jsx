import React from 'react'
import { useGifContext } from '../context/createContext'

const FilterCom = () => {

    const filters=['gifs','stickers','text']

    const {filter,setFilter}=useGifContext();
    
        
    
  return (
    <div className='flex min-w-80 rounded-full text-black bg-gray-500 '>
        {filters.map((value,index)=>{
            return(
                <button className='hover:bg-gray-900 text-white rounded-full w-1/3' key={index} 
                 onClick={()=>setFilter(value)}>{value}</button>
            )
        })}
    </div>
  )
}

export default FilterCom