// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import './App.css'
import { createContext } from 'react'
import { Video } from './classes/video'
import DB from '../db.json'
import Home from './routes/Home'
import New from './routes/New'

export const VideosContext = createContext<Video[]>([])

function App() {
  const videos = DB.videos as Video[]

  return (
    <>
      <BrowserRouter>
        <VideosContext.Provider value={videos}>
          <Routes>
            <Route path='/' element={<DefaultLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/new" element={<New />}></Route>
            </Route>
          </Routes>
        </VideosContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
