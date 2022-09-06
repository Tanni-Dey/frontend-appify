import React from 'react';
import { Link } from 'react-router-dom';
import { FiSave } from 'react-icons/fi';
import { BsPeople, BsCalendar4Event } from 'react-icons/bs';
import { GrUserManager } from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';


const Sidebar1 = () => {
    const suggestedPeople = [
        { id: 1, profilePic: 'https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium', name: 'Sadek Hossain' }
    ]
    return (
        <div className='col-span-1 text-left hidden lg:block'>
            <div className='bg-white rounded-sm  p-5 mb-2'>
                <h2 className='text-xl font-semibold mb-3'>Explore</h2>
                <ul>
                    <li className='mb-2'><Link to=''><FiSave className='inline text-xl mr-2' /> Saved Posts</Link></li>
                    <li className='mb-2'><Link to=''><GrUserManager className='inline text-xl mr-2' /> People</Link></li>
                    <li className='mb-2'><Link to=''><BsPeople className='inline text-xl mr-2' /> Groups</Link></li>
                    <li className='mb-2'><Link to=''><HiOutlineNewspaper className='inline text-xl mr-2' /> Pages</Link></li>
                    <li className='mb-2'><Link to=''><BsCalendar4Event className='inline text-xl mr-2' /> Events</Link></li>
                </ul>
            </div>
            <div className='bg-white rounded-sm p-3 mb-2'>
                <h2 className='text-xl font-semibold mb-3'>Dowload App</h2>
            </div>
            <div className='bg-white rounded-sm p-3 mb-2'>
                <h2 className='text-xl font-semibold mb-3'>Suggested People</h2>
                {
                    suggestedPeople.map(people => <div key={people.id} className='flex items-center justify-between text-sm'>
                        <img className='rounded-full w-8 mr-[-24px]' src={people.profilePic} alt="" />
                        <Link to=''>{people.name}</Link>
                        <button className='p-1 border border-primary text-gray-400 rounded-md'>Add +</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sidebar1;