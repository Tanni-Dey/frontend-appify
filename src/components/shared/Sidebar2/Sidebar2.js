import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar2 = () => {
    const follows = [
        { id: 1, profilePic: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png', userName: 'Sadfa', tittle: 'sfdasd' }
    ]

    const friends = [
        { id: 1, profilePic: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png', userName: 'admin', },
        { id: 2, profilePic: 'https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg', userName: 'Kazi Mosarof Sishir', }
    ]
    return (
        <div className='col-span-1 text-sm'>
            <div className='bg-white rounded-sm py-5 px-3 mb-2'>
                <h2 className='text-left text-xl font-semibold mb-3'>You Might Like</h2>
                <hr />
                {
                    follows.map(user => <div key={user.id} className=' text-sm'>
                        <div className='flex items-center my-5'>
                            <img className='rounded-full w-12 mr-2' src={user.profilePic} alt="" />
                            <Link className='text-md text-left ml-2' to=''>{user.userName}
                                <p className='text-sm'>{user.tittle}</p>
                            </Link>
                        </div>
                        <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                            <button className='p-1 border border-primary text-gray-400 rounded-sm'>Ignore</button>
                            <button className='p-1 border border-red-600 text-white bg-red-600 rounded-sm'>Follow</button>
                        </div>
                    </div>)
                }
            </div>
            <div className='bg-white rounded-sm py-5 px-3 mb-2'>
                <h2 className='text-left text-xl font-semibold mb-3'>Your Friends</h2>
                <input className='w-full rounded-full p-2 bg-primary' type="text" placeholder="Search" />
                {
                    friends.map(friend => <div className='flex items-center mt-5' key={friend.id}>
                        <img className='rounded-full w-8 mr-2' src={friend.profilePic} alt="" />
                        <Link to=''>{friend.userName}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sidebar2;