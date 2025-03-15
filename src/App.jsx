
import './App.css'
import { BeyondTheOffice } from './components/BeyondTheOffice'
import { Connect } from './components/Connect'
import Hero from './components/Hero'
import { MyPhilosophy } from './components/MyPhilosopy'
import Navbar from './components/Navbar'
import { WhatIDo } from './components/WhatIDo'
import { WhoAmI } from './components/WhoAmI'

function App() {

  return (
      <div className='w-full flex flex-col bg-gradient-to-r from-blue-50 to-white'>
        <Navbar/>
        <Hero/>
        <WhoAmI/>
        <WhatIDo/>
        <MyPhilosophy/>
        <BeyondTheOffice/>
        <Connect/>
        
      </div>
  )
}

export default App
