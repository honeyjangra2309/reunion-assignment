import React,{useState} from 'react'
import { logo,DownArrow,menu,close } from '../assets'

function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <section className='w-full flex flex-row justify-between flex-row p-6'>
        <div className='text-[24px] font-poppins flex flex-row items-center'>
            <img src={logo} alt="logo" className='w-[32px] h-[32px]' />
           <span className='mx-2 text-[20px]'>Estatery</span>
        </div>
        <div className='md:flex flex-row justify-between font-poppins items-center hidden'>
           <p className='mx-3 cursor-pointer text-[18px]'>Rent</p>
           <p className='mx-3 cursor-pointer text-[18px]'>Buy</p>
           <p className='mx-3 cursor-pointer text-[18px]'>Sell</p>
           <div className='flex flex-row items-center mx-3'>
           <p className='mx-1 cursor-pointer text-[18px]'>Manage Property</p>
           <img src={DownArrow} alt="" />
           </div>
           <div className='flex flex-row items-center mx-3'>
           <p className='mx-1 cursor-pointer text-[18px]'>Resources</p>
           <img src={DownArrow} alt="" />
           </div>
        </div>
        <div className=' flex justify-end items-center'>
        <img src={toggle ? close: menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => settoggle(prev => !prev)} />
      </div>
        <div className='md:flex flex-row hidden'>
            <button className='rounded-[8px] text-[16px] font-poppins border-2 border-solid border-#E0DEF7 px-3 py-1  mx-3'>Login</button>
            <button className='rounded-[8px] text-[16px] font-poppins bg-[#7065F0] text-white px-3'>Sign up</button>
        </div>
    </section>
  )
}

export default Navbar