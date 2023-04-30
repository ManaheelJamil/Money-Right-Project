'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface BoxProps {
    delay: number;
  }
const Section3 = ({ delay }: BoxProps) => { 
    const [ref, inView] = useInView({ threshold: 0.5 });
    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 150 },
    };
    return (
        <>
            <h1 className='text-center lg:text-2xl 2xl:text-2xl lg:mt-40'>Available On All Of your</h1>
            <h1 className='text-center lg:text-5xl 2xl:text-5xl font-bold '>Devices</h1>
            <motion.div 
             ref={ref}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={variants}
             transition={{ duration: 1, delay: delay }}
            className='flex justify-evenly lg:mt-28 '>
                <div className='box1 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (4).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Windows</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box2 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (1).png' className='w-18 m-auto mt-4 ' />
                    <p className='text-xs mt-2'> Mac os</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-6  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box3 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (2).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Linux</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box4 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (3).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Android</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box5 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (1).png' className='w-18 m-auto mt-4' />
                    <p className='text-xs mt-2'> IOS</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-6  bg-[#0000004D]'> Download</button>
                </div>
            </motion.div>
        </>

    )
}

export default Section3
