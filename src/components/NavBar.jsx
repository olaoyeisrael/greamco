import React from 'react'
import logo from '../assets/Greamco_Catalyst_logo_colored.svg'

export default function NavBar() {
  return (
    <div className='flex justify-between lg:mx-[80px] px-[24px] py-[20px] items-center'>
        <div className=' '>
            <img src={logo}></img>
        </div>
        <div className=''> 
            <h3 className=' text-sm lg:text-[16px]'>CONTACT US</h3>
        </div>
    </div>
  )
}
