// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import './App.css'
import { createContext } from 'react'
import { Video, Category } from './classes/video'
import DB from '../db.json'
import Home from './routes/Home'

function App() {
  const VideosContext = createContext<Video[]>([])
  const videos = DB.videos.map((video): Video => (
    new Video(
      video.title,
      Category[video.category],
      video.imagePath,
      video.videoUrl,
      video.description
    )
  ))

  return (
    <>
      <BrowserRouter>
        <VideosContext.Provider value={videos}>
          <Routes>
            <Route path='/' element={<DefaultLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/new" element></Route>
            </Route>
          </Routes>
        </VideosContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
