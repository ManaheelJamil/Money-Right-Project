'use client'
import React from 'react'
import Image from 'next/image';
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
            <div className='grid grid-cols-12 lg:mt-52 mt-[140%]  md:mt-0'>
                <div className='col-span-5'>
                    <Image src="shade2.svg" alt='image' width="872" height="1372" className='shade2  md:block hidden top-[1800px] 2xl:top-[3000px] md:w-[300px]  md:h-[300px] xl:top-[2300px] lg:top-[2200px] md:top-[1600px]' />
                </div>
                <div className='col-span-2'></div>
                <div className='col-span-5'>
                    <Image src="shade3.svg" alt='image' width="872" height="1372" className='shade3 md:block hidden  top-[1800px] 2xl:top-[3000px] xl:top-[2300px] md:w-[200px]  md:h-[300px] lg:top-[2200px] md:top-[1600px]' /></div>
            </div>
            <div >
                <Image src="shade2copy.svg" alt={''} className='md:hidden block shade2copy' width="372" height="272" />
                <Image src="shade3copy.svg" alt={''} className='md:hidden block shade3copy' width="372" height="272"/>
            </div>
            <div className='flex  justify-center  '>
                <img src='nut.png' className='lg:w-72 w-32 md:w-52 md:h-52 lg:mt-2 h-32 2xl:w-[600px] 2xl:h-[600px] lg:h-72 mt-32' />
                <div className='mt-40 2xl:ml-[-4%] lg:ml-[-10%]'>
                    <h1 className='lg:text-6xl 2xl:text-9xl md:text-5xl md:ml-[-24%] md:mt-10 2xl:mt-20 ml-[-30%] mt-4 text-2xl lg:mt-[-8%] 2xl:ml-[-17%] xl:ml-[-4%] lg:ml-[-9%] xl:mt-[-8%] font-bold'>Empower Your Wealth</h1>
                    <p className='lg:ml-20  xl:ml-24 2xl:text-5xl md:text-lg text-sm ml-[-4%] lg:text-3xl'>Services we are providing</p>
                </div>
            </div>
            <div className='md:grid md:grid-cols-3 gap-10 mt-20 mx-20 place-items-center'>
            <div className="relative">
                <img src="border.png" alt="Your Image" className="w-full max-w-[300px] max-h-[700px] h-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex lg:my-10 md:my-7 my-5 xl:my-14 justify-center">
                <h1 className='text-center  absolute lg:text-2xl md:text-lg  xl:text-3xl font-semibold  '>Expense Tracking</h1>
                <p className='text-center absolute  text-xs mt-10 lg:text-lg xl:text-lg 2xl:text-md md:px-3 md:text-xs lg:mt-14 md:mt-10 xl:px-7 lg:px-5'>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                        <img src='expense.png' className=' lg:w-8 lg:h-10 w-6 h-6 mt-[90%] flex lg:mt-56 2xl:mt-64 xl:mt-64 md:mt-[87%]  justify-center' />
                </div>
            </div>
            <div className="relative  md:mt-0 mt-10">
                <img src="border.png" alt="Your Image" className="w-full max-w-[300px] max-h-[700px] h-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex lg:my-10 md:my-7  my-5 xl:my-14 justify-center">
                <h1 className='text-center  absolute lg:text-2xl md:text-lg  xl:text-3xl  font-semibold  '>Expense Tracking</h1>
                <p className='text-center absolute  text-xs mt-10 lg:text-lg xl:text-lg 2xl:text-md md:px-3  md:text-xs lg:mt-14 md:mt-10 xl:px-7 lg:px-5'>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                        <img src='expense.png' className=' lg:w-8 lg:h-10 w-6 h-6 mt-[90%] flex lg:mt-56 2xl:mt-64 xl:mt-64 md:mt-[87%]  justify-center' />
                </div>
            </div>
            <div className="relative md:mt-0 mt-10">
                <img src="border.png" alt="Your Image" className="w-full max-w-[300px] max-h-[700px] h-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex lg:my-10 md:my-7  my-5 xl:my-14  justify-center ">
                <h1 className='text-center  absolute lg:text-2xl md:text-lg  xl:text-3xl  font-semibold  '>Expense Tracking</h1>
                <p className='text-center absolute  text-xs mt-10 lg:text-lg xl:text-lg 2xl:text-md md:px-3 md:text-xs lg:mt-14 md:mt-10 xl:px-7 lg:px-5'>Allowing users to input and
                        categorize expenses, creat
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                        <img src='expense.png' className=' lg:w-8 lg:h-10 w-6  mt-[90%] h-6 flex lg:mt-56 2xl:mt-64 xl:mt-64 md:mt-[87%]  justify-center' />
                
                </div>
            </div>
                
            </div> 

        </>
    )
}

export default Section2
