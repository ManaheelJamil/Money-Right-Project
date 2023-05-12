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
            <h1 className='text-center lg:text-[32px] text-lg lg:mt-64 2xl:text-5xl mt-24'>Available On All Of your</h1>
            <h1 className='text-center lg:text-[64px] text-4xl mt-[2%] 2xl:text-8xl font-bold '>Devices</h1>
            <motion.div 
            //  ref={ref}
            //  initial="hidden"
            //  animate={inView ? "visible" : "hidden"}
            //  variants={variants}
            //  transition={{ duration: 1, delay: delay }}
            className='flex flex-wrap gap-4 justify-evenly lg:mt-28 mt-10'>
                <div className='box1 lg:w-[174px] w-[130px] h-[130px] lg:h-[174px] 2xl:w-[220px] 2xl:h-[210px] text-center rounded-3xl'>
                    <img src='apple (4).png' className='lg:w-12 w-10 2xl:w-16 pt-4 w m-auto lg:pt-5' /> 
                    <p className='text-xs lg:mt-3 2xl:text-lg'> Windows</p>
                    <button className='lg:w-36 2xl:w-48 2xl:text-lg 2xl:h-12 lg:h-10 w-28 h-8 mt-5 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box2 lg:w-[174px] w-[130px] h-[130px] lg:h-[174px] 2xl:w-[220px] 2xl:h-[210px] text-center rounded-3xl'>
                    <img src='apple (1).png' className='lg:w-18 w-8 m-auto xl:mt-6 2xl:w-16 mt-4 lg:mt-4 ' />
                    <p className='text-xs  mt-0  2xl:mt-1 xl:mt-3 lg:mt-3 2xl:text-lg'> Mac os</p>
                    <button className='lg:w-36 lg:h-10 2xl:w-48 2xl:text-lg 2xl:h-12 w-28 h-8 mt-6 text-xs rounded-full lg:mt-9  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box3 lg:w-[174px] lg:mt-0 mt-0  w-[130px] h-[130px] 2xl:w-[220px] 2xl:h-[210px] lg:h-[174px] text-center rounded-3xl'>
                    <img src='apple (2).png' className='lg:w-12 w-8 pt-3 2xl:w-16 m-auto lg:pt-5' />
                    <p className='text-xs lg:mt-3 2xl:text-lg'> Linux</p>
                    <button className='lg:w-36 lg:h-10 2xl:w-48 2xl:text-lg 2xl:h-12 w-28 h-8 mt-8 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box4 lg:w-[174px] w-[130px] lg:mt-0 mt-0  h-[130px] 2xl:w-[220px] 2xl:h-[210px] lg:h-[174px] text-center rounded-3xl'>
                    <img src='apple (3).png' className='lg:w-12 w-8 pt-4 2xl:w-16 m-auto lg:pt-5' />
                    <p className='text-xs lg:mt-3 2xl:text-lg'> Android</p>
                    <button className='lg:w-36 lg:h-10  2xl:w-48 2xl:text-lg 2xl:h-12 w-28 h-8 mt-7 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box5 lg:w-[174px] w-[130px] lg:mt-0 mt-0  h-[130px] 2xl:w-[220px] 2xl:h-[210px] lg:h-[174px]  text-center rounded-3xl'>
                    <img src='apple (1).png' className='lg:w-18 w-8 m-auto xl:mt-6 2xl:w-16 mt-4' />
                    <p className='text-xs lg:mt-3 2xl:mt-1 2xl:text-lg'> IOS</p>
                    <button className='lg:w-36 lg:h-10 2xl:w-48 2xl:text-lg 2xl:h-12 w-28 h-8 mt-6 text-xs rounded-full lg:mt-9  bg-[#0000004D]'> Download</button>
                </div>
            </motion.div>
        </>

    )
}

export default Section3
