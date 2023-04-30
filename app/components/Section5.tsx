import React from 'react'

const Section5 = () => {
  return (
 <>
 <div className='flex justify-center  mt-10'>
    <img src='circle.png ' className='relative inset-12 mr-20'/>
 </div>
 <div className=' z-10 w-[65%] text-center  m-auto rounded-3xl ' style={{background:' rgba(0, 1, 13, 0.7)'}}>
    <h1 className='text-5xl font-bold lg:pt-20'>Subscribe</h1>
    <p className='text-md lg:mt-2 text-gray-200'>Stay in the know and Unlock Exclusive<br/> Benefits With Our Newsletter!</p>
    <div ><input type='text'placeholder='Enter Your Email Address' className=' rounded-full text-xs pl-6 mt-10 w-80 h-14' style={{background: '#121212'}}/>
    <button className='h-14 rounded-full w-36 ml-5 text-center text-xs lg:mb-14' style={{background: 'linear-gradient(0deg, rgba(9, 0, 113, 0.7) 0%, rgba(0, 102, 255, 0.7) 100%)'}}> Subscribe</button></div>
 </div>
 </>
  )
}

export default Section5
