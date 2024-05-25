import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold '>Trusted by developers across the world</h2>
                <p className=' text-gray-500 text-3xl py-6 '>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Aliquam ipsum enim facilis
                     neque modi inventore aperiam nam quibusdam pariatur unde!</p>
            </div>

            <div className='grid  md:grid-cols-3 gap-2 text-center'>
                <div className='border py-8  font-bold rounded-xl shadow-xl'>
                    <p className='text-indigo-700  text-6xl'>100</p>
                    <p className='text-gray-400'>collection</p>
                </div>
                <div className='border py-8   font-bold   rounded-xl shadow-xl'>
                    <p  className='text-indigo-700  text-6xl'>24/7</p>
                    <p className='text-gray-400'>Delivery</p>
                </div>
                <div  className='border py-8    font-bold rounded-xl shadow-xl'>
                    <p className='text-indigo-700 text-6xl'>100</p>
                    <p className='text-gray-400'>Transactions</p>
                </div>
            </div>
        </div>
      
      </div>
    </>
  )
}

export default About
