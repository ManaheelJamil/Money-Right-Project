'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Section2 = () => {
    const [ref, inView] = useInView({ threshold: 1 });
    const variants = {
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      };
      const variant = {
        visible: { x: 0, opacity: 1 },
        hidden: { x: 100, opacity: 0 },
      };
      const variantss = {
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0.8, opacity: 0 },
      };
    return (
        <>
         <div className='flex  relative'>
                <div><img src='shade2.svg' className='shade2'  /></div>
                <div><img src='shade3.svg' className='shade3 xl:ml-72 2xl:ml-[30%]' /></div>
            </div>
            <div className='flex  justify-center lg:mt-20'>
                <img src='nut.png' className='w-60 ' />
                <div className='mt-40 2xl:ml-[-4%] lg:ml-[-10%]'>
                    <h1 className='text-6xl lg:mt-[-10%] 2xl:ml-[-10%] xl:mt-[-12%] font-bold'>Empower Your Wealth</h1>
                    <p className='text-center text-2xl'>Services we are providing</p>
                </div>
            </div>
           
            <div className='flex mt-44 w-[80%] justify-evenly m-auto'>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 1 }}
                className='border-4  border-white rounded-3xl h-72   w-60'>
                    <h1 className='text-center text-lg font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] text-sm px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-20 m-auto mt-[25%]' />
                    <img src='expense.png' className=' w-10 ml-24 mt-[-30%]'/>
                </motion.div>
                <motion.div
                 ref={ref}
                 initial="hidden"
                 animate={inView ? "visible" : "hidden"}
                 variants={variantss}
                 transition={{ duration: 1 }}
                className='border-4  border-white rounded-3xl h-72   w-60'>
                    <h1 className='text-center text-lg font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] text-sm px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-20 m-auto mt-[25%]' />
                    <img src='expense.png' className=' w-10 ml-24 mt-[-30%]'/>
                </motion.div>
                <motion.div
                 ref={ref}
                 initial="hidden"
                 animate={inView ? "visible" : "hidden"}
                 variants={variant}
                 transition={{ duration: 1 }}
                className='border-4  border-white rounded-3xl h-72   w-60'>
                    <h1 className='text-center text-lg font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] text-sm px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-20 m-auto mt-[25%]' />
                    <img src='expense.png' className=' w-10 ml-24 mt-[-30%]'/>
      
                </motion.div>
            </div>
        </>
    )
}

export default Section2
