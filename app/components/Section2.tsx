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
                <div><img src='shade2.svg' className='shade2 ml-[-60%] md:ml-0 md:w-[272px] md:h-[472px] w-72 h-80' /></div>
                <div><img src='shade3.svg' className='shade3 xl:ml-52 2xl:ml-[30%] ml-[-3%] w-28  lg:h-[472px] ' /></div>
            </div>
            <div className='flex  justify-center mt-44'>
                <img src='nut.png' className='lg:w-72 w-32 lg:mt-2 h-32 lg:h-72 mt-32' />
                <div className='mt-40 2xl:ml-[-4%] lg:ml-[-10%]'>
                    <h1 className='lg:text-6xl ml-[-30%] mt-5 text-2xl lg:mt-[-8%] 2xl:ml-[-10%] xl:ml-[-4%] lg:ml-[-9%] xl:mt-[-8%] font-bold'>Empower Your Wealth</h1>
                    <p className='lg:ml-20  xl:ml-24 text-sm ml-[-4%] lg:text-3xl'>Services we are providing</p>
                </div>
            </div>

            {/* <div className='lg:flex mt-10 w-[80%] justify-between m-auto'>
                <motion.div
                //  ref={ref}
                //  initial="hidden"
                //  animate={inView ? "visible" : "hidden"}
                //  variants={variants}
                //  transition={{ duration: 1 }}
                >
                    <img src='border.png' className='lg:w-60 w-40 m-auto mt-12' />
                    <h1 className='text-center  absolute text-2xl  mx-7 font-semibold mt-[-17%] '>Expense Tracking</h1>
                    <p className='text-center absolute text-[110%] text-xs  mt-[-13%] ml-5 w-52 px-3'>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[37%] lg:ml-[105px]  mt-[-10%] lg:mt-[-5%] xl:mt-[-4%]' />
                </motion.div>
                <motion.div
                //  ref={ref}
                //  initial="hidden"
                //  animate={inView ? "visible" : "hidden"}
                //  variants={variantss}
                //  transition={{ duration: 1 }}
                >
                    <img src='border.png' className='lg:w-60 w-40 m-auto mt-12 ' />
                    <h1 className='text-center  absolute lg:text-2xl text-md mx-8 font-semibold mt-[-55%] xl:mt-[-22%] lg:mt-[-24%] '>Expense Tracking</h1>
                    <p className='text-center absolute lg:text-[100%] text-xs mt-[-45%]  w-40  xl:text-[90%] xl:mt-[-18%] lg:mt-[-18%] ml-12 lg:ml-5 lg:w-52 px-3  '>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[37%] lg:ml-[105px]  mt-[-10%] lg:mt-[-5%] xl:mt-[-4%]' />
                </motion.div>
                <motion.div
                //  ref={ref}
                //  initial="hidden"
                //  animate={inView ? "visible" : "hidden"}
                //  variants={variant}
                //  transition={{ duration: 1 }}
                >
                    <img src='border.png' className='lg:w-60 w-40 m-auto mt-12 ' />
                    <h1 className='text-center  absolute lg:text-2xl text-md mx-8 font-semibold mt-[-55%] xl:mt-[-22%] lg:mt-[-24%] '>Expense Tracking</h1>
                    <p className='text-center absolute lg:text-[100%] text-xs mt-[-45%]  w-40  xl:text-[90%] xl:mt-[-18%] lg:mt-[-18%] ml-12 lg:ml-5 lg:w-52 px-3  '>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[37%] lg:ml-[105px]  mt-[-10%] lg:mt-[-5%] xl:mt-[-4%]' />
                </motion.div>
            </div> */}
            <div className='md:grid md:grid-cols-3 gap-10 mx-20 place-items-center'>
                <div ><img src='border.png' className='relative  w-72 m-auto mt-12' />
               <h1 className='absolute z-20'>hello</h1>
                    {/* <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[125px] mt-[-3%] ' /> */}
                </div>
                <div><img src='border.png' className='w-72 m-auto mt-12' />
                    <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[125px] mt-[-3%]' />
                </div>
                <div><img src='border.png' className='w-72 m-auto mt-12' />
                    <img src='expense.png' className='absolute lg:w-8 w-5  m-auto ml-[125px] mt-[-3%]' />
                </div>
            </div>
        </>
    )
}

export default Section2
