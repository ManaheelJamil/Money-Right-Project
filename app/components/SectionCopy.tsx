'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const SectionCopy = () => {
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
            <h1 className='text-5xl text-center font-bold mt-20'>Amazing<br />
                Features</h1>
            <img src="shade.svg" className='md:block hidden sectionShade lg:left-[40%] md:left-[250px] md:top-[900px]' />
            <img src='midshade.svg' className='midShade lg:hidden block'/>
            <div> <motion.img
                    // ref={ref}
                    // initial="hidden"
                    // animate={inView ? "visible" : "hidden"}
                    // variants={variantss}
                    // transition={{ duration: 1 }}
                    src='laptop.svg' className=' md:hidden block ml-4 w-[90%] relative ' />
                    <h1 className='text-xl md:hidden block mt-[-20%] font-bold text-center'>STREAMLINE<br />
                        YOUR<br />
                        WEALTH</h1></div>
            <div className='md:flex lg:mx-44 md:mx-10'>
                <div >
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variants}
                        // transition={{ duration: 1 }}
                        className='lg:rounded-3xl md:rounded-2xl absolute mt-10 mx-14 md:mx-0 rounded-2xl  w-52 h-28 lg:w-44 lg:h-[10%] md:w-36 md:h-[20%] bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-12 w-10 h-9 lg:h-8 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variants}
                        // transition={{ duration: 1 }}
                        className='lg:rounded-3xl md:rounded-2xl  lg:w-44 lg:h-[10%] md:mx-0  rounded-2xl  w-52 h-28 mx-12 absolute mt-52 md:w-36 md:h-[20%]  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-12 w-10 h-9 lg:h-8 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                </div>
                <div> <motion.img
                    // ref={ref}
                    // initial="hidden"
                    // animate={inView ? "visible" : "hidden"}
                    // variants={variantss}
                    // transition={{ duration: 1 }}
                    src='laptop.svg' className='lg:block md:block hidden lg:w-[100%] md:w-[130%] relative ' />
                    <h1 className='text-2xl  md:block hidden  mt-[-20%] font-bold text-center'>STREAMLINE<br />
                        YOUR<br />
                        WEALTH</h1></div>
                <div >
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variant}
                        // transition={{ duration: 1 }}
                        className='md:rounded-3xl lg:w-44 lg:h-[10%] absolute mx-12 mt-96  md:mx-0  md:w-36 md:h-[20%]  rounded-2xl  w-52 h-28  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-12 w-10 h-9 lg:h-8 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variant}
                        // transition={{ duration: 1 }}
                        className='md:rounded-3xl lg:w-44 lg:h-[10%] md:w-36 absolute md:mx-0  mt-[170%] mx-12 md:h-[20%] md:mt-32  rounded-2xl  w-52 h-28  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-12 w-10 h-9 lg:h-8 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default SectionCopy
