import React from 'react'
import 'animate.css';

function Welcome() {
  return (
    <div className='flex-col mt-[48px] justify-center mx-[24px]'>
        <div className='w-full '>
            <div className='flex flex-col items-center justify-center'>
               <h1 className="text-6xl md:text-6xl  text-center lg:text-[128px] animate__animated animate__rubberBand"> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#006837]'>
                  Turning ideas <br /> into{' '}
                  <span className="">
                    fruition
                </span>
                </span>
                </h1>
                {/* <div className='w-[288px] justify-center max-[400px]:mx-[24px] max-[380px]:w-[462px] '>
                <p className='text-center max-[400px]:text-[16px] min-[400px]:text-[20px] text-wrap'>Touchdown on the pinnacle of success from a spark of idea with a fail-safe catalyst that produces results.</p>
            </div> */}
              <div className='w-[288px] lg:w-[462px] mt-[24px] lg:mt-[48px]'>
                <p className='text-center text-[16px] lg:text-[20px] ' >Touchdown on the pinnacle of success from a spark of idea with a fail-safe catalyst that produces results.</p>
            </div> 

            </div>
        </div>


        <div className='mt-[32px] lg:mt-[84px]'>
          <h1 className='text-sm text-center lg:text-[18px
          ]'>CONTACT US</h1>
        </div>
    </div>
  )
}

export default Welcome