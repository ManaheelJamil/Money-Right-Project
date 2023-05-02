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
                <div><img src='shade3.svg' className='shade3 xl:ml-52 2xl:ml-[30%]' /></div>
            </div>
            <div className='flex  justify-center lg:mt-20'>
                <img src='nut.png' className='w-72 ' />
                <div className='mt-40 2xl:ml-[-4%] lg:ml-[-10%]'>
                    <h1 className='text-6xl lg:mt-[-8%] 2xl:ml-[-10%] xl:ml-[-4%] lg:ml-[-9%] xl:mt-[-8%] font-bold'>Empower Your Wealth</h1>
                    <p className='lg:ml-20  xl:ml-24 text-3xl'>Services we are providing</p>
                </div>
            </div>
           
            <div className='flex mt-20 w-[80%] justify-evenly m-auto'>
                <motion.div 
                
                >
                <img src='border.png' className='w-64 '/>
                <h1 className='text-center  absolute text-2xl font-semibold mt-[-22%] mx-10'>Expense Tracking</h1>
                    <p className='text-center absolute lg:text-[100%] xl:text-[110%] mt-[-17%] ml-5 xl:w-52 px-3 '>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute w-8 m-auto ml-28 mt-[-4%]'/>
                </motion.div>
               

                <motion.div 
             
                >
                <img src='border.png' className='w-64 relative'/>
                <h1 className='text-center  absolute text-2xl font-semibold xl:mt-[-22%] xl:mx-10'>Expense Tracking</h1>
                    <p className='text-center absolute lg:text-[100%] xl:text-[110%] xl:mt-[-17%] xl:ml-5 xl:w-52 px-3 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute w-8 m-auto ml-28 mt-[-4%]'/>
                </motion.div>
                <motion.div 
                
                >
                <img src='border.png' className='w-64 relative'/>
                <h1 className='text-center  absolute text-2xl font-semibold xl:mt-[-22%] xl:mx-10'>Expense Tracking</h1>
                    <p className='text-center absolute lg:text-[100%] xl:text-[110%] xl:mt-[-17%] xl:ml-5 xl:w-52 px-3 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute w-8 m-auto ml-28 mt-[-4%]'/>
                </motion.div>
            </div>
        </>
    )
}

export default Section2
