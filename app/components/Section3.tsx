import React from 'react'

const Section3 = () => {
    return (
        <>
            <h1 className='text-center lg:text-xl lg:mt-40'>Available On All Of your</h1>
            <h1 className='text-center lg:text-4xl font-bold '>Devices</h1>
            <div className='flex justify-evenly lg:mt-28'>
                <div className='box1 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (4).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Windows</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box2 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (1).png' className='w-32 m-auto lg:mt-[-4%]' />
                    <p className='text-xs lg:mt-[-30%]'> Mac os</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-6  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box3 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (2).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Linux</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box4 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (3).png' className='w-12 m-auto lg:pt-5' />
                    <p className='text-xs'> Android</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-7  bg-[#0000004D]'> Download</button>
                </div>
                <div className='box5 w-40 h-40  text-center rounded-3xl'>
                    <img src='apple (1).png' className='w-32 m-auto lg:mt-[-4%]' />
                    <p className='text-xs lg:mt-[-30%]'> IOS</p>
                    <button className='w-32 h-10 text-xs rounded-full lg:mt-6  bg-[#0000004D]'> Download</button>
                </div>
            </div>
        </>

    )
}

export default Section3