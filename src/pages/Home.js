import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { CategoryItems } from '../static/data'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import Video from '../components/Video'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'
import { auth } from '../firebase'

const Home = () => {

  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
      else {
        dispatch(setUser(null));
      }
    })
  })


  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full md:w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-black pb-3'>
        <div className='flex flex-row overflow-x-scroll relative scrollbar-hide ml-3'>
          {
            CategoryItems.map((item, i) => {
              return (
                <h2 key={i} className='text-white text-sm px-4 py-2 break-keep whitespace-nowrap mr-3 font-normal cursor-pointer dim-gray hover:bg-[#1d1d1d] rounded-lg'>{item}</h2>
              )
            })
          }
        </div>

        <div className='pt-12 px-0 md:px-5 md:grid md:grid-cols-4 md:gap-x-3 md:gap-y-8'>
          {
            videos.length === 0 ? (
              <div className='h-[86vh]'></div>
            ) : (
              videos.map((video, index) => {
                // console.log("Video details:", video);
                return (
                  <Link to={`/video/${video.id}`} key={video.id}>
                    <Video {...video} />
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
