import React from 'react'
import Home from './pages/Home'
import SingleGif from './pages/singleGif'
import Category from './pages/categories'
import Search from './pages/search'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './pages/appLayout'
import GifContextProvider from './context/createContext'
import Favorites from './pages/favorites'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    path:"/",
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/:category",
        element:<Category/>
      },
      {
        path:"/search/:query",
        element:<Search/>
      },
      {
        path:'/liked',
        element:<Favorites/>
      },
      {
        path:'/:type/:id',
        element:<SingleGif/>
      }
    ]
  }
])


const App = () => {
  return (
    <div> 
      <GifContextProvider>
         <RouterProvider router={router}/>
      </GifContextProvider>
    </div>
  )
}

export default App