'use client'
import React from 'react'
import { motion} from 'framer-motion'
import { useInView  } from 'react-intersection-observer';
const Section = () => {
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
            <h1 className='text-center lg:text-4xl text-5xl mt-10 xl:text-5xl 2xl:mt-40 font-bold lg:mt-20'>Amazing<br />Features</h1>
            <div className='lg:flex lg:mx-10 xl:mx-32 2xl:mx-52  relative '>
            <div >
                    <div>           
                        <img
                        src='laptop.svg' className='' />
                         <p className='lg:hidden block text-xl mt-[-18%]   text-center font-bold '>STREAMLINE<br />
                        YOUR<br />
                        WEALTH</p></div>
                   
                </div>
                <div >
                    <motion.div 
                    //    className="w-full h-screen flex items-center justify-center"
                       ref={ref}
                       initial="hidden"
                       animate={inView ? "visible" : "hidden"}
                       variants={variants}
                       transition={{ duration: 1 }}
                    className=' rounded-3xl lg:w-52 w-52 mt-12  m-auto h-28 lg:h-28 'style={{background: '#121212'}}>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                    <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 1 }}
                    className=' rounded-3xl lg:w-52 m-auto mt-12 lg:h-28 w-52 h-28  lg:mt-40' style={{background: '#121212'}}>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2 '>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div>
                </div>
                <div className=''>
                    <div className=''>
                        <img src='midshade.svg' className='midShade lg:hidden block'/>
                        <img src="shade.svg" className='lg:block hidden lg:mt-[-20%] absolute inset-0 ' />
                        <motion.img
                          ref={ref}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={variantss}
                          transition={{ duration: 1 }}
                        src='laptop.svg' className='lg:block hidden lg:mt-[-2%] xl:ml-48 2xl:ml-40 xl:mt-[-5%] absolute inset-0 lg:ml-44  w-[65%]' /></div>
                    <p className='lg:block hidden text-2xl 2xl:mt-[110%] lg:mt-96 xl:mt-[100%] xl:text-3xl xl:ml-56 lg:ml-48 text-center font-bold '>STREAMLINE<br />
                        YOUR<br />
                        WEALTH</p>
                </div>
                <div className='lg:ml-48 xl:ml-52 2xl:ml-60 '>
                    <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variant}
                    transition={{ duration: 1 }}
                    className=' rounded-3xl lg:w-52 m-auto w-52 mt-12 h-28  lg:mt-32 lg:h-28' style={{background: '#121212'}}>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div >
                    <motion.div 
                     ref={ref}
                     initial="hidden"
                     animate={inView ? "visible" : "hidden"}
                     variants={variant}
                     transition={{ duration: 1 }}
                    className=' rounded-3xl lg:w-52 m-auto mt-12 w-52 h-28  lg:h-28 lg:mt-40' style={{background: '#121212'}}>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </motion.div >
                </div>
            </div>
        </>
    )
}

export default Section
