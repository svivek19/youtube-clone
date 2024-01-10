import React from 'react'
import { MdVerified } from 'react-icons/md'

const Video = ({ thumbnail, duration, logo, name, channel, views, uploadTime }) => {
  // console.log(thumbnail, duration, name, channel, views, uploadTime);
  // console.log(name)
  return (
    <div className='flex flex-col w-full md:max-w-[260px] cursor-pointer'>
      <div className='relative w-full'>
        <img src={thumbnail} alt='thumbnail' className='rounded-none md:rounded-2xl overflow-hidden w-full'/>
        <p className='absolute left-[85%]  top-[85%] px-1 text-xs rounded bg-black text-white'>
          {duration}
        </p>
      </div>
      <div className='flex mt-3 mb-5 md:mb-0'>
        <img src={logo} alt="channel-logo" className='h-9 w-9 rounded-full' />
        <div className='ml-2'>
          <h2 className='font-medium text-white text-sm mt-0 mb-0 items-center'>
          {name.length <= 50 ? name : `${name.substr(0,50)}...`}
          </h2>
          <h3 className='text-gray-500 mt-1 flex text-xs items-center'>
            {channel}
            <span className='p-1'>
              <MdVerified />
            </span>
          </h3>
          <p className='text-gray-500 m-0 items-center text-xs'>
            {views} - {uploadTime}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Video
