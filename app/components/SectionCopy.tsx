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
            <h1 className='lg:text-5xl 2xl:text-6xl md:text-4xl text-4xl mt-10 text-center font-bold md:mt-24'>Amazing<br />
                Features</h1>
            <img src="shade.svg" className='md:block hidden sectionShade 2xl:ml-[10%] 2xl:mt-[30%] ' />
            <img src='midshade.svg' className='midShade   md:hidden block' />
            <div className='grid grid-cols-1'> <motion.img
                // ref={ref}
                // initial="hidden"
                // animate={inView ? "visible" : "hidden"}
                // variants={variantss}
                // transition={{ duration: 1 }}
                src='laptop.png' className=' md:hidden block   relative ' />
                <h1 className='text-xl md:hidden block  font-bold text-center'>STREAMLINE<br />
                    YOUR<br />
                    WEALTH</h1></div>
            <div className='  md:grid md:grid-cols-5   md:gap-20 md:mt-40 mt-28   place-items-center '>
                <div className='md:grid md:place-items-start grid place-items-center '>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variants}
                        // transition={{ duration: 1 }}
                        className='lg:rounded-3xl md:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl absolute  md:mt-[-22%] mx-14 md:mx-0 rounded-xl 2xl:w-80 2xl:h-[18%] xl:w-52 xl:h-[18%] w-52 h-28 lg:w-48 lg:h-[17%] md:w-40 md:h-[17%] bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-14 w-10 h-9 2xl:w-24 xl:w-16 xl:h-12 2xl:h-16 lg:h-10 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center 2xl:text-[14px] lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variants}
                        // transition={{ duration: 1 }}
                        className='lg:rounded-3xl md:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl lg:w-48 lg:h-[17%] md:mx-0 mt-[100%] md:mt-[-2%]  rounded-xl 2xl:w-80 2xl:h-[18%]  xl:w-52 xl:h-[18%]  w-52 h-28 mx-12 absolute md:w-40 md:h-[17%]  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-14 w-10 h-9 2xl:w-24 2xl:h-16 xl:w-16 xl:h-12 lg:h-10 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center  2xl:text-[14px]  lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                </div>
                <div className='md:grid md:col-span-3'>
                    <motion.img
                    // ref={ref}
                    // initial="hidden"
                    // animate={inView ? "visible" : "hidden"}
                    // variants={variantss}
                    // transition={{ duration: 1 }}
                    src='laptop.png' className='lg:block  md:block hidden w-[200%] laptop relative ' />
                    <h1 className='text-2xl  md:block hidden   2xl:text-[30px] font-bold text-center'>STREAMLINE<br />
                        YOUR<br />
                        WEALTH</h1>
                </div>
                <div className='md:grid md:place-items-center md:ml-[-130%] grid place-items-center'>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variant}
                        // transition={{ duration: 1 }}
                        className='md:rounded-2xl lg:w-48 lg:h-[17%] xl:rounded-2xl 2xl:rounded-3xl absolute mt-[200%] md:mt-[-10%] md:mx-0   md:w-40 md:h-[17%] 2xl:w-80 2xl:h-[18%]  xl:w-52 xl:h-[18%]  rounded-2xl  w-52 h-28  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-14 w-10 h-9 2xl:w-24 2xl:h-16 xl:w-16 xl:h-12 lg:h-10 md:w-10 md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center  2xl:text-[14px] lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                    <motion.div
                        // ref={ref}
                        // initial="hidden"
                        // animate={inView ? "visible" : "hidden"}
                        // variants={variant}
                        // transition={{ duration: 1 }}
                        className='md:rounded-2xl lg:w-48 lg:h-[17%] 2xl:rounded-3xl xl:rounded-2xl md:w-40 absolute md:mx-0 mt-[300%]  md:h-[17%] md:mt-[40%] 2xl:w-80 2xl:h-[18%]  xl:w-52 xl:h-[18%] rounded-2xl  w-52 h-28  bg-[#121212]'>
                        <img src='smallicon1.png' className='lg:w-14 w-10 h-9 lg:h-10 md:w-10 xl:w-16 xl:h-12 2xl:w-24 2xl:h-16  md:h-6 m-auto' alt='logo' />
                        <p className='md:text-[8px] text-[12px] text-center  2xl:text-[14px] lg:mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default SectionCopy
