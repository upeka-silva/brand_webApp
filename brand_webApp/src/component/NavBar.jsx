import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {


        const[nav,setNav] =useState(false);

        const handleNavigation=()=>{
           
           setNav(!nav)

        }



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

                <div className='md:hidden' onClick={handleNavigation}>
                    {!nav ? <AiOutlineMenu className='w-5'/> : <AiOutlineClose className='w-5'/> }
                </div>



           </div>


           <div>


            
           <div className= {nav==true ? ' md:hidden absolute w-screen text-center  bg-zinc-200 ' : 'hidden'}  >
                  <ul >
                     <li className='border-b-2 border-zinc-300'><a href="">Home</a></li>
                      <li className='border-b-2 border-zinc-300'><a href="">About</a></li>
                      <li className='border-b-2 border-zinc-300'><a href="">Support</a></li>
                      <li className='border-b-2 border-zinc-300'><a href="">Platforms</a></li>
                     <li className='border-b-2 border-zinc-300'><a href="">Pricing</a></li>
                 </ul>

            
          
               <div className='flex flex-col my-2'>


                <button className='bg-transparent mx-2' >Sign Up</button>
                <button className='mx-2 my-2'>Sign In</button>
    
               </div>
                  

           </div>


           </div>


    </div>
   </>
  )
}

export default NavBar
