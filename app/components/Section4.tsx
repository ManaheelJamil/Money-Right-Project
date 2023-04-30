'use client'
import React from 'react'
import { motion} from 'framer-motion'
import { useInView  } from 'react-intersection-observer';
const Section4 = () => {
  const [ref, inView] = useInView({ threshold: 1 });
  const variants = {
      visible: { x: 0, opacity: 1 },
      hidden: { x: -100, opacity: 0 },
    };
    const variant = {
      visible: { x: 0, opacity: 1 },
      hidden: { x: 100, opacity: 0 },
    };
  return (
    <>
      <h1 className='text-center lg:text-5xl 2xl:text-5xl font-bold lg:mt-48'>Reviews</h1>
      <h1 className='text-center lg:text-lg '>Hear What Our Satisfied Users Have to Say!</h1>
      <div className='flex relative justify-between'>
        <div> <img src="shade4.svg" alt="shade4" className='shade4' /> </div>
        <div> <img src="shade5.svg" alt="shade5" className='shade5 xl:ml-64 2xl:ml-[40%]' /> </div>
        <div className='flex absolute mt-32 2xl:ml-72 2xl:mt-40 mx-10 xl:mx-52  m-auto'>
          <motion.div 
           ref={ref}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           variants={variants}
           transition={{ duration: 1 }}
          className=' border border-white rounded-3xl w-56'>
            <div className='flex mx-5 mt-5 '>
              <img src='star (2).png' alt="icon" className='h-10 w-10' />
              <h1 className='ml-3'>Sarah123<p className='text-xs text-gray-600'>Sarah123@gmail.com</p></h1>

            </div>
            <p className='text-xs mx-5 mt-10'>I love how easy and intuitive
              this app is to use. The autom
              ated investing feature has
              helped me grow my investm
              ents effortlessly, and the
              social investing community
              has provided valuable insig
              hts. Highly recommended!"</p>
            <div className='flex justify-between mx-5 mt-5'>
              <img src='star (1).png' alt='star' className='w-20 h-5' />
              <p className='text-xs text-gray-700'>01/03/2023</p>
            </div>
          </motion.div>
          <div className='lg:mx-24 '>
            <div className='w-40 relative rounded-full bg-[#373737] flex lg:ml-32'>
              <img src='icon2.png' alt="icon" className='m-2 h-8 w-8' />
              <h1 className='text-[80%] ml-1 mt-2' >JaneDoe<p className='text-[70%] text-gray-500'>Janedoe@gmail.com</p></h1>
            </div>
            <div className='w-40 mt-[-7%] ml-5 absolute rounded-full lg:ml-36 bg-[#121212] flex'>
              <img src='star (2).png' alt="icon" className='m-2 h-8 w-8' />
              <h1 className='text-[80%] ml-1 mt-2'>Sarah123<p className='text-[70%] text-gray-500'>Sarah123@gmail.com</p></h1>
            </div>
            <img src="new.png"  className='w-64 h-40 mt-10'/></div>
          <motion.div 
           ref={ref}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           variants={variant}
           transition={{ duration: 1 }}
          className='border border-white rounded-3xl w-56 pb-5'>
            <div className='flex mx-5 mt-5 '>
              <img src='icon2.png' alt="icon" className='h-10 w-10' />
              <h1 className='ml-3'>JaneDoe<p className='text-xs text-gray-600'>Janedoe@gmail.com</p></h1>
            </div>
            <p className='text-xs mx-5 mt-10'>I have been using this app for
              a while now, and I'm impressed
              with its performance. The custo
              mizable alerts keep me inform
              ed of market changes, and the
              exclusive investment opportun
              ities have allowed me to diver
              sify my portfolio. Great app!</p>
            <div className='flex justify-between mx-5 mt-4'>
              <img src='star (1).png' alt='star' className='w-20 h-5' />
              <p className='text-xs text-gray-700'>01/03/2023</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className='flex justify-center lg:mt-[50%] xl:mt-[40%] 2xl:mt-[35%]'> 
          <div className='w-4 h-3  rounded-full' style={{backgroundColor: 'rgba(20, 0, 255, 0.7)',opacity: 0.23}}></div>
          <div className='w-8 h-3 bg-[#1400FFB2] rounded-full lg:ml-2'></div>
          <div className='w-4 h-3  rounded-full lg:ml-2' style={{backgroundColor: 'rgba(20, 0, 255, 0.7)',opacity: 0.23}}></div>
        </div>
      </div>
    </>
  )
}

export default Section4
