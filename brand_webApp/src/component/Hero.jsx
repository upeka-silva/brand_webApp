import React from 'react'
import {AiFillDatabase,AiFillRocket,AiFillProfile} from 'react-icons/ai'

import bgImage from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <>
      <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between '>

        <div className='grid mx-w-[1240px] m-auto grid-col-2 '>

            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8   '>
                <p className='text-2xl '>Unique sequencing & production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management </h1>
                <p className='py-2 text-2xl '>This is our tech Brand </p>
                <button className='py-3 sm:w-[60%] my-4'>Get Started</button>
            </div>

            <div>
                <img className='w-full'  src={bgImage} alt="cyber-image" />
            </div>
            <div>
                <p>Data services </p>
                <div>
                    <p>Icon. App Secuirty</p>
                    <p>Icon. Dashboard Design</p>
                    <p>Icon. Cloud Data</p>
                    <p>Icon. API</p>
                </div>
            </div>
        </div>

      </div>
    
    
    
    
    
    </>
  )
}

export default Hero
