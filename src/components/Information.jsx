import React from 'react'
import logo2 from '../assets/Vector.svg'

function Information() {
  return (
    <div className='flex-col mx-[24px] items-center mt-[80px]'>

        <div className='flex justify-center'> 
            <img src={logo2} />
        </div>
<div className='flex justify-center'>
        <h1 className='text-[16px] text-center mt-[20px] lg:mt-[31px] w-[327px] lg:w-[764px]  lg:text-2xl '>At GreamCo Catalyst, we are committed to empowering African entrepreneurs by providing personalized guidance and strategic insights. We exist to help your business navigate the complexities of growth and achieve sustainable success.</h1>
        </div>
        </div>
  )
}

export default Information