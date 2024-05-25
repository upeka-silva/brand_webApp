import React from 'react'
import {AiFillDatabase,
    AiFillRocket,
    AiFillProfile
    ,AiFillSecurityScan,
    AiOutlineAim} from 'react-icons/ai'

import bgImage from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <>
      <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between '>

        <div className='grid mx-w-[1240px] m-auto  md:grid-cols-2 '>

            <div className='flex flex-col justify-center  md:items-start w-full px-4 py-8   '>
                <p className='text-2xl '>Unique sequencing & production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management </h1>
                <p className='py-2 text-2xl '>This is our tech Brand </p>
                <button className='py-3 sm:w-[60%] my-4'>Get Started</button>
            </div>

            <div>
                <img className='w-full'  src={bgImage} alt="cyber-image" />
            </div>
            <div className='absolute  py-8
             flex flex-col md:min-w-[760px]
             bottom-[-5%] mx-2 md:left-1/2
             transform md:-translate-x-1/2
            bg-zinc-200  text-center shadow-xl'>
                <p className='font-bold'>Data services </p>
                <div className=' flex justify-between flex-wrap   px-4'>
                    <p className='flex px-4 py-2 items-center text-slate-500 '><AiFillDatabase/> App Secuirty</p>
                    <p className='flex px-4 py-2 items-center text-slate-500 '><AiFillDatabase/> Design</p>
                    <p className='flex px-4 py-2 items-center text-slate-500 '><AiFillRocket/> Cloud Data</p>
                    <p className='flex px-4 py-2 items-center text-slate-500 '><AiOutlineAim/> API</p>
                </div>
            </div>
        </div>

      </div>
    
    
    
    
    
    </>
  )
}

export default Hero
