import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/components/Test'
import Navbar from './assets/components/Navbar'
import Test from './assets/components/Test'
import Hero from './assets/components/Hero'
import Services from './assets/components/Services'
import About from './assets/components/About'
import FollowMe from './assets/components/FollowMe'
import Footer from './assets/components/Footer'
function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Footer/>
    </>
  )
}

export default App
