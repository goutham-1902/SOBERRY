import React from 'react'
import ReactDOM from 'react-dom/client'
import Latest from './Scene/Latest.jsx'
import Album from './Scene/Album.jsx'
import App from './App.jsx'
import Home from "./Scene/Home.jsx"
import Artistmusic from './Scene/Artistmusic.jsx'
import { Analytics } from '@vercel/analytics/react';
import Recent from './Scene/recent.jsx'

import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Artist from "../src/Scene/Artist.jsx"
import Albumv from './Scene/Albumv.jsx'
import Sections from './Scene/Sections.jsx'
import Login from './Scene/Login.jsx'
import Internal from './Scene/Internal.jsx'
import {
  Artistform, MusicForm
} from "./Component/Internalforms.jsx"
import Explore from './Scene/Explore.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
     <>
     <Route path='/login' element={<Login/>}/>
     <Route path='/internal' element={<Internal/>}>
      <Route path='/internal/artist' element={<Artistform/>}/>
      <Route path='/internal/music' element={<MusicForm/>}/>
    </Route>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='artist' element={<Artist/>}/>
      <Route path='recent' element={<Recent/>}/>
      <Route path='latest' element={<Latest/>}/>
      <Route path='album' element={<Album/>}/>
      <Route path='artist/:id' element={<Artistmusic/>}/>
      <Route path='album/:id' element={<Albumv/>}/>
      <Route path='s/:id' element={<Sections/>}/>
      <Route path="explore" element={<Explore/>}/>
    </Route>
    </>
      )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
