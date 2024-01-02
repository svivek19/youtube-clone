import React from 'react'
import Sidebar from '../components/Sidebar'
import { CategoryItems } from '../static/data'

const Home = () => {
  return (
    <div>
      <Sidebar />

      <div className='w-[calc(100%-240px)] h-[calc(100%-53px)] bg-black ml-60'>
        <div className='flex flex-row overflow-x-scroll relative scrollbar-hide'>
          {
            CategoryItems.map((item, i) => {
              return (
                <h2 key={i} className='text-white bg-black'>{item}</h2>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
