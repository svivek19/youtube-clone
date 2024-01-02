import React, { useState } from 'react'
import { SidebarItem } from '../static/data'
import '../App.css'

export default function Sidebar() {
    const [active, setActive] = useState("Home");
    return (
        <div className='yt-scrollbar w-60 bg-black h-screen top-0 left-0 text-white p-3 overflow-scroll'>
            <div className='mt-14'>
                {
                    SidebarItem.Top.map((item, index) => {
                        return (
                            <div className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-900  my-1 ${item.name === active ? "bg-gray-900" : "bg-black"}`}
                                key={index}
                                onClick={() => setActive(item.name)}
                            >
                                <span className='mr-5'>{item.icon}</span>
                                <p className='p-2 text-sm font-medium'>{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-3 text-state-950' />
            <div>
                {
                    SidebarItem.Middle.map((item, index) => {
                        return (
                            <div className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-900  my-1 ${item.name === active ? "bg-gray-900" : "bg-black"}`}
                                key={index}
                                onClick={() => setActive(item.name)}
                            >
                                <span className='mr-5'>{item.icon}</span>
                                <p className='p-2 text-sm font-medium'>{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-3 text-slate-950' />
            <h2 className='px-3 pb-1'>Explore</h2>
            <div>
                {
                    SidebarItem.Explore.map((item, index) => {
                        return (
                            <div className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-900  my-1 ${item.name === active ? "bg-gray-900" : "bg-black"}`}
                                key={index}
                                onClick={() => setActive(item.name)}
                            >
                                <span className='mr-5'>{item.icon}</span>
                                <p className='p-2 text-sm font-medium'>{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-3' />
        </div>
    )
}
