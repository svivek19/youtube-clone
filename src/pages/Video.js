import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addDoc, collection, doc, onSnapshot, query } from 'firebase/firestore';
import { auth, db, timestamp } from '../firebase'
import { AiFillLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import { HiDotsHorizontal, HiDownload } from 'react-icons/hi'
import { MdOutlineSort } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../slices/userSlice'
import { onAuthStateChanged } from 'firebase/auth';
import Comment from '../components/Comment';



const Video = () => {

  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState(null);

  const [comment, setComment] = useState("");

  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch()
  const user = useSelector(getUser);


  useEffect(() => {
    if (id) {
      const q = query(doc(db, "videos", id));
      onSnapshot(q, (snapShot) => {
        setData(snapShot.data());
      });
      const commentsQuery = query(collection(db, "videos", id, "comments"));
      onSnapshot(commentsQuery, (snapShot) => {
        setComments(
          snapShot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, [id]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

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

  const addComment = async (e) => {
    e.preventDefault();
    let commentData = {
      image: user.photoURL,
      name: user.displayName,
      comment,
      uploaded: timestamp,
    };
    if (id) {
      await addDoc(collection(db, "videos", id, "comments"), commentData);
      setComment("");
    }
  };

  return (
    <div className='py-20 px-9 items-start'>
      <div className='w-full'>
        <iframe
          src={`https://www.youtube.com/embed/${data?.link}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='w-full h-[700px]'
        ></iframe>
      </div>
      <div className='ml-5 flex flex-col items-start'>
        <h2 className='text-white font-semibold text-lg my-2'>{data?.name}</h2>
        <div className='flex items-center'>
          <img src={data?.logo} alt={data?.channel} className='rounded-full w-10 h-10 mr-3' />
          <div>
            <h3 className='font-medium text-white text-base'>
              {data?.channel && data?.channel.length <= 25
                ? data.channel
                : `${data?.channel && data.channel.substr(0, 20)}...`}
            </h3>
            <p className='text-sm text-gray-500'>{data?.subscribers} subscribers</p>
          </div>
          <button className='bg-white px-3 py-2 rounded-lg text-sm font-medium ml-3'>
            Subscribe
          </button>
          <div className='flex pl-28'>
            <div className='flex dim-gray items-center rounded-2xl h-10 mx-1 hover:bg-[#1d1d1d]'>
              <div className='flex px-3 items-center border-r-2 cursor-pointer'>
                <AiFillLike className='text-2xl text-white' />
                <p className='text-white pl-2 pr-3 text-sm font-semibold'>300K</p>
              </div>
              <div className='pl-4 pr-5 cursor-pointer'>
                <BiDislike className='text-2xl text-white' />
              </div>
            </div>
            <div className='flex dim-gray items-center h-10 rounded-2xl mx-1 cursor-pointer hover:bg-[#1d1d1d]'>
              <div className='px-3 flex items-center cursor-pointer'>
                <RiShareForwardLine className='text-2xl text-white font-thin' />
                <p className='text-white pl-2 pr-3 text-sm font-semibold'>Share</p>
              </div>
            </div>
            <div className='flex dim-gray items-center h-10 rounded-2xl mx-1 cursor-pointer hover:bg-[#1d1d1d]'>
              <div className='px-3 flex items-center cursor-pointer'>
                <HiDownload className='text-2xl text-white font-thin' />
                <p className='text-white pl-2 pr-3 text-sm font-semibold'>Download</p>
              </div>
            </div>
          </div>
          <div className='flex dim-gray cursor-pointer items-center hover:bg-[#1d1d1d] rounded-full justify-center w-10 h-10 text-white'>
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
      <div className='max-w-4xl dim-gray mt-4 rounded-2xl p-3 text-white text-sm'>
        <div className='flex'>
          <p className='font-medium pr-3'>
            {data?.views}
          </p>
          <p className='font-medium pr-3'>{data?.uploadTime}</p>
        </div>
        <span className='text-center font-medium'>{data?.description}</span>
      </div>
      <div className='flex text-white mt-5'>
        <h1>{comments.length} Comments</h1>
        <div className='flex items-center mx-10'>
          <MdOutlineSort size={30} className='mx-3' />
          <h5>Sort by</h5>
        </div>
      </div>
      {
        user && (
          <form className='flex w-[800px] pt-4 items-start' onSubmit={addComment}>
            <img src={user?.photoURL} alt='profile' className='rounded-full h-12 w-12 mr-3' />
            <input type='text' placeholder='Add a comment...' className='text-white bg-[transparent] border-b border-b-[#1d1d1d] outline-none text-sm p-1 w-full' value={comment} onChange={(e) => setComment(e.target.value)} />
          </form>
        )
      }
      <div className='mt-4'>
        {comments.map((item,i)=>(
          <Comment key={i} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Video
