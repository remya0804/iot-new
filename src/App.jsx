import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Plant from './pages/Plant'
import Profile from './pages/Profile'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='h-screen'>
      {/* <div className='top-20 w-full h-screen bg-slate-50/50 absolute'></div> */}
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/plant/:deviceId' element={<Plant />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      {/* <Hero /> */}
    </div>  
  )
}

export default App