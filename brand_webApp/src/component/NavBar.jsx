import React from 'react'

const NavBar = () => {
  return (
   <>
    <div className='w-screen h-[80px] bg-zinc-200  z-10 drop-shadow-lg'>

             <div className='px-2 flex  justify-between items-center w-full h-full'>
              <div className='flex items-center'>
                <h1 className='text-3xl mr-4 font-bold  sm:text-4xl'>BRAND.</h1>
                 <ul className='hidden gap-4 md:flex'>
                   <li><a href="">Home</a></li>
                   <li><a href="">About</a></li>
                    <li><a href="">Support</a></li>
                   <li><a href="">Platforms</a></li>
                    <li><a href="">Pricing</a></li>
                 </ul>
         </div>
           </div>

             </div>
   </>
  )
}

export default NavBar
