import React from 'react'
import block from '../assets/block.svg'
import contact from '../assets/contacts.svg'
import frame from '../assets/frame.svg'

function Footer() {
  return (
    <div className='bg-[#1E1E1E] flex-col '>
        <div className='grid lg:grid-cols-2 px-[24px] lg:px-[48px] lg:gap-[582px]  py-[24px]'>
            <div>
            <div className='mb-[10px]'>
                <h1 className='text-2xl lg:text-3xl text-white'>Fuel Your Business Growth</h1>
            </div>
            <div className='text-sm text-white'>
                With our tailored expertise and hands-on approach, we're committed to guiding African entrepreneurs through every phase of their journey, ensuring sustainable success and long-term growth.
            </div>
            </div>
            <div className='text-sm lg:text-xl mt-[32px] text-white flex lg:justify-end'>
                CONTACT US
            </div>

        </div>
        <div className='grid lg:grid-cols-2 px-[24px] lg:px-[48px] py-[24px] space-y-[24px]'> 
            <img src={block}/>
            <div className='flex-col space-y-[30px]'>
                <div className='flex justify-between'>
                    <div className='flex-col '>
                        <h1 className='text-[#EBFF6E] text-sm'>+1 894 919-12-31</h1>
                        <p className='text-[#A3A3A3] text-sm mt-[8px]'>hello@greamcocatalyst.com</p>
                    </div>
                    <div>
                        <img src={contact}/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm font-[500] text-[#A3A3A3]'>1901 Thornridge Cir. Shiloh, Hawaii 81063 </p>
                    <img src={frame} />
                </div>
            </div>

        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between  lg:space-x-[24px] bg-[#121212] px-[24px] py-[16px] space-y-[24px] lg:space-y-0'>
            <div className='lg:w-[648px]'>
                <p className='text-sm text-white'>© 2024 — ALL RIGHTS RESERVED</p>
            </div>
            <div className='flex justify-between lg:flex-row lg:w-[648px]'>
                <p className='text-sm text-white'>TERMS & CONDITIONS</p>
                <p className='text-sm text-white'>PRIVACY POLICY</p>
            </div>

        </div>

    </div>
  )
}

export default Footer