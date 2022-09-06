import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsCircleHalf } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Posts from './Posts/Posts';



const Home = () => {
    const myday = [
        { id: 1, userName: 'Adnan Chowdury', dayPic: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', profilePic: 'https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium' },
        { id: 2, userName: 'Adnan Chowdury', dayPic: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', profilePic: 'https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium' },
        { id: 3, userName: 'Adnan Chowdury', dayPic: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', profilePic: 'https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium' },
        { id: 4, userName: 'Adnan Chowdury', dayPic: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', profilePic: 'https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium' },
    ]
    return (
        <div className=' rounded-sm'>
            <div className='grid gap-5 grid-cols-5 mb-2'>

                <div class="flex justify-center items-center w-full">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full  bg-gray-50 rounded-lg border-2 border-gray-300  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col justify-center items-center cursor-pointer pt-5 bg-gray-400 rounded-md relative">

                            <CgProfile className='text-9xl px-2' />

                            <svg width="140" height="70" className='p-0  top-0'>
                                <path d="M125,85 a60,60 0 1,0 -115,0" fill="#000" />
                            </svg>

                            <span class="text-xl rounded-full bg-blue-600 text-white px-3 py-1 dark:text-gray-400 absolute bottom-8 border-2 border-black">+</span>
                            <p class="mb-2 text-sm text-gray-500 absolute bottom-0 dark:text-gray-400">Your Story</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>

                {
                    myday.map(day => <div className='rounded-md bg-gray-400 px-2 py-5' key={day.id}>
                        <div className='flex justify-end'><img className='rounded-full w-8' src={day.profilePic} alt="" /></div>
                        <img className='w-full my-2 h-1/2 opacity-50 hover:ease-in-out hover:scale-110 delay-75 transition zoom-out overflow-hidden hover:opacity-70' src={day.dayPic} alt="" />
                        <p className='text-white'>{day.userName}</p>
                    </div>)
                }
            </div>
            <div className='bg-white rounded-sm p-3 mb-2'>
                <div className='grid grid-cols-12 items-center'>
                    <CgProfile className='text-5xl col-span-1' />
                    <input className='col-span-11 rounded-full bg-primary text-primary  p-3' type="text" placeholder="Create a new post" />
                </div>
                <div className='grid grid-cols-3 mt-3'>
                    <button><BsCircleHalf className='inline text-xl mr-2' /> Background</button>
                    <button><FaCameraRetro className='inline text-xl mr-2' /> Photos/Videos</button>
                    <button><GrEmoji className='inline text-xl mr-2' /> Feelings/Activity</button>
                </div>
            </div>
            <ul className='grid grid-cols-6 p-3 mb-2 bg-white font-semibold rounded-sm text-left'>
                <li className='text-red-600'><Link to=''> Public Post</Link></li>
                <li><Link to=''> Friend Post</Link></li>
            </ul>
            <div>
                <Posts />
            </div>
        </div>
    );
};

export default Home;