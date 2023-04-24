import React from 'react'

const Section = () => {
    return (
        <>
            <h1 className='text-center lg:text-4xl font-bold lg:mt-20'>Amazing<br />Features</h1>
            <div className='flex mx-10'>
                <div>
                    <div className=' rounded-lg lg:w-52 lg:h-28 bg-gray-950 '>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </div>
                    <div className=' rounded-lg lg:w-52 lg:h-28 bg-gray-950 lg:mt-40'>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src="shade.svg" className='lg:mt-[-20%] ' />
                        <img src='laptop.svg' className='absolute inset-0 lg:ml-5 lg:mt-28 w-[100%]' /></div>
                    <p className='text-2xl text-center font-bold lg:mt-[-10%]'>STREAMLINE<br/>
                        YOUR<br/>
                        WEALTH</p>
                </div>
                <div>
                    <div className=' rounded-lg lg:w-52 lg:h-28 bg-gray-950 '>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </div>
                    <div className=' rounded-lg lg:w-52 lg:h-28 bg-gray-950 lg:mt-40'>
                        <img src='smallicon1.png' className='w-20 h-14 m-auto' alt='logo' />
                        <p className='text-[8px] text-center mx-10 mt-2'>Effortlessly manage and<br />
                            track your investments<br />
                            in real-time.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
