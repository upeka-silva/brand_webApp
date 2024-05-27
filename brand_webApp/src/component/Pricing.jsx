import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'> 
        <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay absolute '></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-3xl '>The right price for you</h3>
                <p className='text-4xl'>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Id, reprehenderit.</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white py-4 m-4 p-8 text-center  text-slate-500 rounded-xl  shadow-xl '>
                    <span className='uppercase px-3 py-1 rounded-xl text-indigo-950 bg-indigo-600'>Standard</span>
                    <div><p>$49<span>mo/</span></p></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, rerum.</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className='my-4 w-full rounded-md '>Get Started</button>
                    </div>
                </div>
                <div className='bg-white py-4  m-4 p-8   text-center text-slate-500 rounded-xl  shadow-xl '>
                    <span className='uppercase px-3 py-1 rounded-xl text-indigo-950 bg-indigo-600'>Standard</span>
                    <div><p>$49<span>mo/</span></p></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, rerum.</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className='my-4 w-full rounded-md' >Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
