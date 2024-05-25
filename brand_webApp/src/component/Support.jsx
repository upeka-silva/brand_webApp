import React from 'react'

import{FaPhone } from 'react-icons/fa'
import{TiSupport} from 'react-icons/ti'
import { TfiLayoutMediaLeft } from "react-icons/tfi";

import suportImg from '../assets/support.jpg'

const Support = () => {

  return (

    <>
    
    
       <div className='w-full h-screen mt-24'>

            <div className='w-full h-[400px] bg-gray-700 absolute'>
                <img className=' w-full h-full object-cover mix-blend-overlay' src={suportImg} alt="" />
            </div>

        <div className='max-w-[1240px] mx-auto text-center
text-center  text-white relative '>
           <div className='px-4 py-12 '>
            <h2 className='pt-8 text-slate-300 uppercase '>Support</h2>
            <h3 className='text-5xl font-bold py-6 '>Finding the right team </h3>
            <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Nesciunt, veniam!</p>

           </div>

           <div className='grid grid-cols-1
            pt-12 sm:pt-20 lg:grid-cols-3 
            gap-y-16 gap-x-8 '>
               <div className='bg-white text-black rounded-xl shadow-xl'>
                  <div className='p-8'>
                     <FaPhone  size={30}/>
                     <h3>Sales </h3>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero praesentium maiores pariatur exercitationem natus, 
                        eum amet ducimus ipsa magni eligendi.</p>
                  </div>
               </div>
               <div className='bg-white text-black rounded-xl shadow-xl'>
                  <div className='p-8'>
                     <FaPhone  size={30}/>
                     <h3>Sales </h3>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero praesentium maiores pariatur exercitationem natus, 
                        eum amet ducimus ipsa magni eligendi.</p>
                  </div>
               </div>
              <div className='bg-white rounded-xl text-black shadow-xl'>
                  <div className='p-8'>
                     <FaPhone  size={30}/>
                     <h3>Sales </h3>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero praesentium maiores pariatur exercitationem natus, 
                        eum amet ducimus ipsa magni eligendi.</p>
                  </div>
                  </div>
           </div>
            
              

        </div>


       </div>
    
    
    </>
    
  )
}

export default Support
