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
            <h1 className='text-center lg:text-[32px] text-lg lg:mt-64 mt-24'>Available On All Of your</h1>
            <h1 className='text-center lg:text-[64px] text-4xl mt-[-2%] font-bold '>Devices</h1>
            <motion.div 
            //  ref={ref}
            //  initial="hidden"
            //  animate={inView ? "visible" : "hidden"}
            //  variants={variants}
            //  transition={{ duration: 1, delay: delay }}
            className='flex flex-wrap justify-evenly lg:mt-28 mt-10'>
                <div className='box1 lg:w-[174px] w-[130px] h-[130px] lg:h-[174px]  text-center rounded-3xl'>
                    <img src='apple (4).png' className='lg:w-12 w-10 pt-4 w m-auto lg:pt-5' />
                    <p className='text-xs lg:mt-3'> Windows</p>
                    <button className='lg:w-36 lg:h-10 w-28 h-8 mt-5 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box2 lg:w-[174px] w-[130px] h-[130px] lg:h-[174px] text-center rounded-3xl'>
                    <img src='apple (1).png' className='lg:w-18 w-8 m-auto mt-4 lg:mt-4 ' />
                    <p className='text-xs  mt-0 lg:mt-3'> Mac os</p>
                    <button className='lg:w-36 lg:h-10 w-28 h-8 mt-6 text-xs rounded-full lg:mt-9  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box3 lg:w-[174px] lg:mt-0 mt-6  w-[130px] h-[130px] lg:h-[174px] text-center rounded-3xl'>
                    <img src='apple (2).png' className='lg:w-12 w-8 pt-3 m-auto lg:pt-5' />
                    <p className='text-xs lg:mt-3'> Linux</p>
                    <button className='lg:w-36 lg:h-10 w-28 h-8 mt-8 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box4 lg:w-[174px] w-[130px] lg:mt-0 mt-5  h-[130px] lg:h-[174px] text-center rounded-3xl'>
                    <img src='apple (3).png' className='lg:w-12 w-8 pt-4 m-auto lg:pt-5' />
                    <p className='text-xs lg:mt-3'> Android</p>
                    <button className='lg:w-36 lg:h-10 w-28 h-8 mt-7 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box5 lg:w-[174px] w-[130px] lg:mt-0 mt-6  h-[130px] lg:h-[174px]  text-center rounded-3xl'>
                    <img src='apple (1).png' className='lg:w-18 w-8 m-auto mt-4' />
                    <p className='text-xs lg:mt-3'> IOS</p>
                    <button className='lg:w-36 lg:h-10 w-28 h-8 mt-6 text-xs rounded-full lg:mt-9  bg-[#0000004D]'> Download</button>
                </div>
            </motion.div>
        </>

    )
}

export default Section3
