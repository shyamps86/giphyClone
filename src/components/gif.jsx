import React from 'react'
import { Link } from 'react-router-dom'



const Gif = ({gif,hover=true}) => {
   
  return (
    <div>
      <Link to={`/${gif.type}s/${gif.id}`}>
        <div className='w-full mb-2 relative cursor-pointer group'>
              <img className='w-full object-cover rounded transition-all duration-300' src={gif?.images?.fixed_width.webp} alt="gif image"/>
        </div>
        
        {/* {hover && 
        <div className='inset-0 opacity-0 rounded absolute group-hover:opacity-100 flex items-end gap-2 p-2'>
        <img src={gif?.user?.avatar_url} alt={gif?.user?.display_name} className='h-8'/>
        <span>{gif?.user?.display_name}</span>
        </div>} */}
      </Link>
      
      </div>
  )
}

export default Gif