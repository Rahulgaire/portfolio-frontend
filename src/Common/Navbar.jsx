import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [menu,openMenu]=useState(false)
    const [showMenu,setShowmenu]=useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 '>
        <span className="text-xl font-bold tracking-wide">
            Portfolio
        </span>
            <ul className={` ${menu ? 'block':'hidden'} mx-4 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}>
                <a href="/home">
                <li className='text-medium  transition-all duration-300 p-1 md:p-0 hover:text-amber-300'>Home</li>
                </a>
                <a href="/about">
                <li className='text-medium  transition-all duration-300 p-1 md:p-0 hover:text-amber-300'>About</li>
                </a>
                <a href="/experience">
                <li className='text-medium  transition-all duration-300 p-1 md:p-0 hover:text-amber-300'>Experience</li>
                </a><a href="/projects">
                <li className='text-medium  transition-all duration-300 p-1 md:p-0 hover:text-amber-300'>Projects</li>
                </a><a href="/contact">
                <li className='text-medium  transition-all duration-300 p-1 md:p-0 hover:text-amber-300'>Contact</li>
                </a>
            </ul>
            {showMenu ? (<RiMenu2Line size={30} className='md:hidden absolute right-10 top-6  transition-all duration-300 '  onClick={()=>{openMenu(!menu); setShowmenu(!showMenu)}}  />  )
            :<RiCloseLine size={30} className='md:hidden absolute right-10 top-6  transition-all duration-300 '  onClick={()=>{openMenu(!menu); setShowmenu(!showMenu)}}/>
            }
    </nav>
  )
}

export default Navbar
