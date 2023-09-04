import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Question_1 from './pages/Question_1'
import Question_2 from './pages/Question_2'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Question_1 />} />
        <Route path='/q2' element={<Question_2 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
