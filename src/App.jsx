import React from 'react'
import Navbar from './Common/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden '>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
