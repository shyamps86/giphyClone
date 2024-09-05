import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
    <div className='min-h-screen bg-gray-800 text-white'>
        <div className='container px-6 py-4 content-end mx-auto'>
          <Header/> 
          <main>
              <Outlet/>
          </main>
        </div>
    </div>
  )
}

export default AppLayout