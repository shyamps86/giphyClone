import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";


const gifContext=createContext();

export const useGifContext=()=>{
    return useContext(gifContext);
}

const GifContextProvider=({children})=>{
   const gif=new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
   const [gifs,setGifs]=useState([]);
   const [favorites,setFavorites]=useState([]);
   const [filter,setFilter]=useState("gifs");

   const addToFav=(id)=>{
      if(favorites.includes(id)){
        const updateFav=favorites.filter((value)=>value!==id);
        localStorage.setItem("favGifs",JSON.stringify(updateFav));
    }
    else{
        const updateFav=[...favorites];
        updateFav.push(id);
        localStorage.setItem("favGifs",JSON.stringify(updateFav));
        setFavorites(updateFav);
      } 
   }
   useEffect(()=>{
    const favorites=JSON.parse(localStorage.getItem("favGifs")) || [];
    const updatedNew=favorites.filter((value)=>value);
    setFavorites(updatedNew);
  },[])


    return (
        <gifContext.Provider value={{gif,favorites,filter,setFilter,setGifs,gifs,setFavorites,addToFav} }>{children}</gifContext.Provider>
    )
}

export default GifContextProvider;