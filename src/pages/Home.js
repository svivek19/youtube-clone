import React from 'react'
import Sidebar from '../components/Sidebar'
import { CategoryItems } from '../static/data'

const Home = () => {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-black pb-3'>
        <div className='flex flex-row overflow-x-scroll relative scrollbar-hide ml-3'>
          {
            CategoryItems.map((item, i) => {
              return (
                <h2 key={i} className='text-white text-sm px-4 py-2 break-keep whitespace-nowrap mr-3 font-normal cursor-pointer dim-gray hover:bg-[#1d1d1d] rounded-2xl'>{item}</h2>
              ) 
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
