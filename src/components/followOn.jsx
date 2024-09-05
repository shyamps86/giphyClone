import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const FollowOn = ({size}) => {
  return (
    <div className='flex space-x-4 my-4'>  
        <FaInstagram size={size}/>
        <FiTwitter size={size} />
        <BsTwitterX size={size}/>


    </div>
  )
}

export default FollowOn