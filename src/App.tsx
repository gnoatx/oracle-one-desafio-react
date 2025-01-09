// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element></Route>
            <Route index element></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
