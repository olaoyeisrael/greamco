import React from 'react'
import girl from '../assets/girlimage.svg'

function Aim() {
  return (
    <div className='flex-col mx-[24px] mt-[50px]  lg:mt-[133px] '>
        <div className='bg-[#1A3A28] px-[20px] lg:px-[81px] lg:py-[99px] py-[30px] rounded-[20px] gap-[110px] lg:flex justify-between lg:items-center'>
            <div className='lg:w-[434px]'>
                <h1 className='text-white text-3xl lg:text-[43px]'>A helping hand to African entrepreneurs</h1>
            </div>
            <div className='mt-[32px] lg:mt-[0] lg:w-[548px]'>
                <p className='text-white text-[18px] font-[400]'>Our insight encompasses providing strategic guidance and hands-on support, which in turn stretches a helping hand to African entrepreneurs turning unique ideas into successful, global-level enterprises.</p>
            </div>

        </div>
        

        <div className='px-[20px] py-[36px] bg-[#EBFF6E] mt-[16px] rounded-[20px]'>
            <div className='grid lg:grid-cols-2 lg:gap-[144px] items-center'>
                <div className='lg:ml-[81px]'>
                    <p className='text-[18px] font-[400] lg:text-2xl'>We aim to be the foremost advisory firm that speaks and invokes empowerment to African entrepreneurs, enabling them to drive innovation, achieve business excellence, and foster economic development on a global scale.</p>
                </div>
                <div className='flex  mt-[32px] lg:mt-0  lg:justify-end lg:h-[378px]'>
                <img src={girl} className='w-full' />
                </div>
            </div>

        </div>

       
    </div>
  )
}

export default Aim