import React from 'react'
import { MdMic } from 'react-icons/md'
import { HiOutlineBars3, HiMagnifyingGlass } from 'react-icons/hi2'
import { BiVideoPlus } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import logo from '../assets/yt-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10'>
      <div className='flex items-center justify-between'>
        <div className='text-white p-2 w-10 text-2xl text-center hover:bg-slate-900 rounded-full cursor-pointer'>
          <HiOutlineBars3 />
        </div>

        <div className='py-5 w-24 mx-3 '>
          <Link to="/">
            <img src={logo} alt='yt-logo' className='object-contain' />
          </Link>
        </div>
      </div>

      <div className='h-10 flex flex-row items-center'>
        <div className='w-[594px] bg-black lg:flex border border-slate-800 items-center rounded-3xl h-10'>
          <input type='text' placeholder='Search' className='w-full bg-black h-6 ml-6 text-white text-start focus:outline-none pl-4' />
          <button className='w-16 h-10 bg-slate-800 px-1 py-0.5 rounded-r-3xl border-l-2 border-slate-800'>
            <HiMagnifyingGlass size={22} className='text-white mx-auto text-center' />
          </button>
        </div>
        <div className='text-white bg-slate-800 w-10 h-10 items-center flex justify-center rounded-full ml-4 hover:bg-slate-900 cursor-pointer'>
          <MdMic size={23} />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-row items-center'>
          <div className='mr-2 p-2 w-10 hover:bg-slate-900 rounded-full cursor-pointer'>
            <BiVideoPlus className='text-white text-center' size={25}/>
          </div>
          <div className='mx-3 p-2 w-10 hover:bg-slate-900 rounded-full cursor-pointer'>
            <FaRegBell size={20} className='text-white text-center'/>
          </div>
          <div className='mx-3 items-center cursor-pointer'>
          <button className='bg-red-600 py-1 px-4 text-white rounded-md'>
            Sign In
          </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
