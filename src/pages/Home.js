import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { CategoryItems } from '../static/data'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import Video from '../components/Video'

const Home = () => {

  const [videos, setVideos] = useState([])
  useEffect(() => {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  // console.log(videos);

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
                <h2 key={i} className='text-white text-sm px-4 py-2 break-keep whitespace-nowrap mr-3 font-normal cursor-pointer dim-gray hover:bg-[#1d1d1d] rounded-lg'>{item}</h2>
              )
            })
          }
        </div>

        <div className='pt-12 px-5 grid grid-cols-4 gap-x-3 gap-y-8'>
          {
            videos.length === 0 ? (
              <div className='h-[86vh]'></div>
            ) : (
              videos.map((video, index) => {
                // console.log("Video details:", video);
                return(
                <Link to={`/video/${video.id}`} key={video.id}>
                  <Video {...video}/>
                </Link>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
