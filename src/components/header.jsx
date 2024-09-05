import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars4, HiOutlineEllipsisVertical } from "react-icons/hi2";
import Favories from './../pages/favorites';
import { useGifContext } from '../context/createContext';
import SearchComp from './searchComp';


const Header = () => {
  const [categories,setCategories]=useState([]);
  const [showCategories,setShowCategories]=useState(false);

  const {gif,favorites,filter,setFilter,setGifs,setFavorites,}=useGifContext();

  const fetchApiCategories=async()=>{
    try{
      const {data}=await gif.categories();
      setCategories(data);
    }
    catch(err){
      console.log(err)
    }
  }

  const updatedFavs=favorites.filter((value)=>value);

 useEffect(()=>{
  fetchApiCategories();
 },[favorites])

  return (
    <nav>
       <div className='relative flex justify-between gap-4 items-center mb-2'>
         <Link className='flex gap-2' to='/'>
            <img src='/GIPHY.png' className='w-8' alt='gif image'/>
            <h1 className='text-3xl tracking-tighter font-bold cursor-pointer '>GIPHY</h1>
         </Link>
          {/* rendering categories */}

         <div className='flex justify-between items-center space-x-3 uppercase'>
          {categories?.slice(0,5).map((value)=>{
              return(
                <Link key={value.name} className='md:block hidden underline font-semibold text-lg' to={`/${value.name_encoded}`}>{value.name}</Link >
              )
            })}

            {/* <Link className='hidden lg:block font-bold text-lg underline' to=''>Reactions</Link> */}
            <button onClick={()=>setShowCategories(!showCategories)} className=''><HiOutlineEllipsisVertical className='py-2 underlined cursor-pointer hidden lg:block'size={40} /></button>
            <Link to="/liked">
           <button className='bg-slate-500 py-1 px-1 m-1 rounded-sm cursor-pointer'>Favorite GIF {updatedFavs.length}</button>
           </Link>
         </div>
      
           

            <button className='block lg:hidden'><HiMiniBars4 size={25}/></button>

      

         {showCategories && (<div className='absolute top-[65px] sm:top-[45px] md:top-[68px] lg:top-11 bg-slate-500 right-0 left-0 px-10 py-8 z-50'>
                <span className='font-bold'>
                  Categories
                </span>
                <hr className='mb-3 mt-3 opacity-40' />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-extralight'>
                {categories?.map((value,index)=>{
                  return(
                    <Link key={value.name} className='md:block hiddenunderline text-md ' to={`/${value.name_encoded}`}>{value.name}</Link >
                  )
                })}
                </div>
            </div>)}
       </div>
       {/* search bar */}

       <SearchComp/>
            
    </nav>
  )
}

export default Header