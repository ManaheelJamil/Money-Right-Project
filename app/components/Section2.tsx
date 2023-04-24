import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className='flex  justify-center lg:mt-40'>
                <img src='nut.png' className='w-60' />
                <div className='mt-20  lg:ml-[-12%]'>
                    <h1 className='text-6xl font-bold'>Empower Your Wealth</h1>
                    <p className='text-center text-2xl'>Services we are providing</p>
                </div>
            </div>
            <div className='flex  relative'>
                <div><img src='shade2.svg'  /></div>
                <div><img src='shade3.svg' /></div>
            </div>
            <div className='flex mt-[-40%]  justify-evenly'>
                <div className='border  border-white rounded-3xl h-48 w-40'>
                    <h1 className='text-center text-xs font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-10 m-auto mt-[23%]' />
                </div>
                <div className='border  border-white rounded-3xl h-48 w-40'>
                    <h1 className='text-center text-xs font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-10 m-auto mt-[23%]' />
                </div>
                <div className='border  border-white rounded-3xl h-48 w-40'>
                    <h1 className='text-center text-xs font-bold mt-10'>Expense Tracking</h1>
                    <p className='text-center text-[50%] px-5 mt-5'>Allowing users to input and
                        categorize expenses, create
                        spending reports, and gain
                        insights into their spending
                        patterns.</p>
                    <img src='curve.png' alt='curve' className='w-10 m-auto mt-[23%]' />
                </div>
            </div>
            <h1 className='text-center lg:text-xl lg:mt-40'>Available On All Of your</h1>
            <h1 className='text-center lg:text-4xl font-bold '>Devices</h1>
        </>
    )
}

export default Section2
