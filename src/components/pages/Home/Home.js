import React from 'react';
import { CgProfile } from 'react-icons/cg';


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
                            {/* <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> */}
                            {/* <div className='w-full'> */}
                            <CgProfile className='text-9xl px-2' />
                            {/* </div> */}
                            {/* <img className='h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZTgJiqRWL5wWednBz8zyRUhSuEDTzefieg&usqp=CAU" alt="" /> */}
                            <svg width="140" height="70" className='p-0  top-0'>
                                <path d="M125,85 a60,60 0 1,0 -115,0" fill="#000" />
                                {/* <path d="M10,85 a60,60 0 0,0 115,0" fill="#D78500" /> */}
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
            <div className='bg-white rounded-sm p-3'>
                <div className='grid grid-cols-12 items-center'>
                    <CgProfile className='text-5xl col-span-1' />
                    <input className='col-span-11 rounded-full bg-primary text-primary  p-3' type="text" placeholder="Create a new post" />
                </div>
            </div>
        </div>
    );
};

export default Home;