import React from 'react'
import { MdMic } from 'react-icons/md'
import { HiOutlineBars3, HiMagnifyingGlass } from 'react-icons/hi2'
import { BiVideoPlus } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import logo from '../assets/yt-logo.png'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, getUser, logout } from '../slices/userSlice'

const Navbar = () => {

  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const handleLogin = async () => {
    const response = await signInWithPopup(auth, provider);
    dispatch(setUser(response.user));
    // console.log(response); 

  }

  // console.log(user);

  const handleLogout = async () =>{
    dispatch(logout())
    await signOut(auth);
  }



  return (
    <div className='bg-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10'>
      <div className='flex items-center justify-between'>
        <div className='text-white p-2 w-10 text-2xl text-center dim-hover rounded-full cursor-pointer'>
          <HiOutlineBars3 />
        </div>

        <div className='py-5 w-20 md:w-24 mx-3 '>
          <Link to="/">
            <img src={logo} alt='yt-logo' className='object-contain' />
          </Link>
        </div>
      </div>

      <div className='h-10 flex flex-row items-center'>
        <div className='w-full md:w-[594px] bg-black lg:flex md:border md:border-slate-900 items-center rounded-3xl h-10'>
          <input type='text' placeholder='Search' className='w-full hidden md:block bg-black h-6 ml-6 text-white text-start focus:outline-none pl-4' />
          <button className='md:w-16 h-10 md:dim-gray px-1 py-0.5 rounded-r-3xl md:border-l-2 md:border-slate-900'>
            <HiMagnifyingGlass size={22} className='text-white md:mx-auto text-center' />
          </button>
        </div>
        <div className='text-white md:dim-gray w-10 h-10 items-center flex justify-center rounded-full ml-4 dim-hover md:block cursor-pointer'>
          <MdMic size={23} className='hidden md:block'/>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-row items-center'>
          <div className='mr-2 p-2 w-10 dim-hover rounded-full hidden md:block cursor-pointer'>
            <BiVideoPlus className='text-white text-center' size={25} />
          </div>
          <div className='mx-3 p-2 w-10 dim-hover rounded-full hidden md:block cursor-pointer'>
            <FaRegBell size={20} className='text-white text-center hidden md:block' />
          </div>
          <div className='mx-3 items-center cursor-pointer'>
            {
              !user ? (
                <button className='bg-red-600 py-1 px-4 text-white rounded-md'
                  onClick={handleLogin}>
                  Sign In
                </button>
              ) : (
                <img 
                src={user.photoURL} 
                alt={user.displayName} 
                className='objject-contain rounded-full cursor-pointer w-10 h-10' 
                onClick={handleLogout}
                />
              )
            }

          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
