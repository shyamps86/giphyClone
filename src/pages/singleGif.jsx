import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGifContext } from '../context/createContext';
import Gif from '../components/gif';
import { BiLike } from 'react-icons/bi';
import { IoShareSocialOutline, IoUnlinkOutline } from 'react-icons/io5';
import FollowOn from './../components/followOn';
import { LuExternalLink } from 'react-icons/lu';
import { FcLikePlaceholder } from 'react-icons/fc';

const SingleGif = () => {

  const [showMore, setShowMore] = useState(false);

  const { type, id } = useParams();
  const { gif, favorites, setFavorites,addToFav } = useGifContext();
  const [related, setRelated] = useState([]);
  const [image, setImage] = useState({})


  const fetchSingleGif = async () => {

    const { data } = await gif.gif(id);
    setImage(data);
    const { data: closeRelated } = await gif.related(id);
    setRelated(closeRelated);

  }



  useEffect(() => {
    fetchSingleGif();
  }, [])

 
  
  return (
    <div className='mt-5'>
      <div className='flex w-full space-x-11 gap-5 '>
        <div className='w-1/3'>
          <div className='my-7'>
            <center className='font-bold underline'>Description</center>
            <span className=' text-white'>

              {showMore ? image?.alt_text : image?.alt_text?.substring(0, 35)}

              <button className='font-bold text-pink-600 underline cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? " read Less .." : " read More .."}</button>


            </span>
          </div>

          <div className='mt-3'>
             
            Follow On: <br />
            <FollowOn />
          </div>
          <hr className='opacity-0.5' />
          <div className='divider'>
            <span className=' text-white capitalize'> source:</span>
            <div className='flex items-center text-sm font-bold gap-1'>

              <LuExternalLink size={25} />

              <a className='truncate' target='_blank' href={image?.url}>{image?.url}</a>
            </div>
          </div>
          <div>

          </div>
        </div>
       

        <div className='w-1/3'>
          <div className='flex flex-col w-full '>
            <img className='w-full h-full' src={image?.images?.fixed_width?.webp} alt="image" />
          </div>
        </div>

        <div className='flex flex-col space-y-10 py-20'>  
           <button  onClick={()=>addToFav(image.id)} ><FcLikePlaceholder className={`${favorites.includes(image.id)?"bg-black":""}`} size={30}/></button>
           <button><IoShareSocialOutline size={30}/></button>
           <button> <IoUnlinkOutline size={30}/></button>

        </div>
      </div>
      <span className='font-bold text-center block mt-4'> Related: {type}</span>
      <div className='columns-2 md:columns-5 mt-2'>
         
          <div className='mt-5'>
            {related?.map((value) => {
              return (
                <Gif key={gif.id} gif={value} />
              )
            })}
          </div>
        </div>


    </div>
  )
}

export default SingleGif