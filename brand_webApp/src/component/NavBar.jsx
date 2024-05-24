import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  return (
   <>
    <div className='w-screen h-[80px] bg-zinc-200  z-10 drop-shadow-lg'>

             <div className='px-2 flex  justify-between items-center w-full h-full'>
              <div className='flex items-center'>
                <h1 className='text-3xl mr-4 font-bold  sm:text-4xl'>BRAND.</h1>
                 <ul className='hidden  md:flex'>
                   <li><a href="">Home</a></li>
                   <li><a href="">About</a></li>
                    <li><a href="">Support</a></li>
                   <li><a href="">Platforms</a></li>
                    <li><a href="">Pricing</a></li>
                 </ul>
   
                </div>

                <div className='hidden md:flex gap-5 text-black mr-4'>
                              <button className='border-none  bg-transparent' >Sign In</button>
                              <button>Sign Up</button>
                </div>

                <div className='md:hidden'>

                    <AiOutlineMenu className='mr-4'  size={20}/>
                </div>

           </div>


    </div>
   </>
  )
}

export default NavBar
