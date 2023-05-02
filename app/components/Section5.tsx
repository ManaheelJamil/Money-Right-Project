import React from 'react'

const Section5 = () => {
  return (
 <>
 <div className='flex justify-center  mt-20'>
    <img src='circle.png ' className='relative w-60 inset-16  mr-32'/>
 </div>
 <div className=' z-10 w-[800px] h-[380px] text-center  m-auto rounded-[65px] ' style={{
background: '#050505'}} >
    <h1 className='text-6xl font-bold lg:pt-20'>Subscribe</h1>
    <p className='text-xl lg:mt-2 text-gray-200'>Stay in the know and Unlock Exclusive<br/> Benefits With Our Newsletter!</p>
    <div ><input type='text'placeholder='Enter Your Email Address' className=' rounded-full text-xs pl-6 mt-10 w-80 h-16' style={{background: '#121212'}}/>
    <button className='h-16 rounded-full w-40 ml-5 text-center text-xs lg:mb-14' style={{background: 'linear-gradient(0deg, rgba(9, 0, 113, 0.7) 0%, rgba(0, 102, 255, 0.7) 100%)'}}> Subscribe</button></div>
 </div>
 </>
  )
}

export default Section5
