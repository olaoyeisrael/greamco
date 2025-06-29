import React from 'react'
import image1 from '../assets/noun-strategic-4068014 1.svg'
import executive from '../assets/Executive.svg'
import advanced from '../assets/advanced.svg'
import Holistic from '../assets/holistic.svg'

function Serve() {
  return (
    <div className='flex-col bg-[#F5F5F5]  py-[48px] px-[24px] lg:px-[80px] lg:py-[100px] mt-[48px]'>
        <div className='flex justify-end'>
            <h1 className='text-3xl lg:text-[80px]'>How We Serve You</h1>
        </div>
        <div className='mt-[28px] lg:w-[569px]'>
            <p className='text-[16px] lg:text-[24px] '>We at GreamCo Catalyst, have a range of services designed to meet the needs of African entrepreneurs.</p>
        </div>
        <div className='flex-col lg:flex-row mt-[40px] lg:mt-[110px] space-y-[48px]'>
            <div className='grid lg:grid-cols-2'>
                <div className='flex-col'>
                <div>
                    <img src={image1} className='lg:w-[120px]'/>
                </div>
                <div className='mt-[12px] lg:[mt-20px]'>
                    <h1 className='text-2xl lg:text-5xl'>Strategic Guidance</h1>
                </div>
                </div>
                <div className='mt-[32px] lg:mt-0 flex-col space-y-[12px]'>
                    <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Business Planning</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm lg:text-xl font-[400]'>Detailed and clear roadmaps, tailored to your business to aid an efficient operational runtime.</p>
                        </div>
                    </div>
                     <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Market Entry Strategies</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Market navigation, Identifying opportunities and mitigating risks to ensure a smooth market entry with solid foundational strategies</p>
                        </div>
                    </div>
                    <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Operational Improvements</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Streamline business operations, reduce costs, and increase productivity with strategic advice and solutions.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

            <hr className="border-t border-[#D9D9D9]" />
            <div className='grid lg:grid-cols-2'>

            <div className='flex-col'>
                <div>
                    <img src={executive} className='lg:w-[120px]'/>
                </div>
                <div className='mt-[12px] lg:mt-[20px]'>
                    <h1 className='text-2xl lg:text-5xl'>Executive Coaching</h1>
                </div>
                </div>
                <div className='mt-[32px] lg:mt-0 flex-col space-y-[12px]'>
                    <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl '>Hands-On Support</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Reliable support and practical assistance that guarantees optimal execution and quality results.</p>
                        </div>
                    </div>
                     <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Ongoing Mentorship</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Guidance and training to efficiently navigate obstacles for a steady business journey.</p>
                        </div>
                    </div>
                </div>
                

            </div>
           
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <hr className="border-t border-[#D9D9D9]" />
            <div className='grid lg:grid-cols-2'>
            <div className='flex-col'>
                <div>
                    <img src={advanced} className='lg:w-[120px]'/>
                </div>
                <div className='mt-[12px] lg:[mt-20px]'>
                    <h1 className='text-2xl lg:text-5xl'>Advanced Strategic Advice</h1>
                </div>
                </div>
                <div className='mt-[32px]  lg:mt-0 flex-col space-y-[12px]'>
                    <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Scaling Techniques</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>High-end techniques for scalability, prioritizing operational optimization and expansion of market presence.</p>
                        </div>
                    </div>
                     <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Market Expansion</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Identify and capitalize on market opportunities with strategic insights and support for market expansion.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <hr className="border-t border-[#D9D9D9]" />
            <div className='grid lg:grid-cols-2'>
            <div className='flex-col'>
                <div>
                    <img src={Holistic} className='lg:w-[120px]'/>
                </div>
                <div className='mt-[12px] lg:[mt-20px]'>
                    <h1 className='text-2xl lg:text-5xl'>Holistic Approach</h1>
                </div>
            </div>
                <div className='mt-[32px] lg:mt-0 flex-col space-y-[12px]'>
                    <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Access to Networks</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Exclusive and extensive network access to growth aiding resources and connections.</p>
                        </div>
                    </div>
                     <div className='px-[20px] py-[24px] bg-[#E9E9E9] rounded-xl'>
                        <div>
                            <h1 className='text-[20px] lg:text-3xl'>Partnerships</h1>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[#1E1E1E] text-sm font-[400] lg:text-xl'>Collaborative support with creation of strategic business partnerships aiding growth, expansion and success.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

     </div>
            
    </div>
  )
}

export default Serve