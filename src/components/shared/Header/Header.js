import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { BiHome } from 'react-icons/bi';
// import { BsSearch } from 'react-icons/bs';
import { TiGroupOutline } from 'react-icons/ti';
import { IoIosNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        textDecorationColor: 'red'
    };
    return (
        <div className='bg-secondary grid grid-cols-2 items-center py-3 text-primary px-10 lg:px-20'>
            <div className='flex justify-between'>
                <img className='w-8' src={logo} alt="" />
                <input size='50' className='rounded-full text-primary px-3' type="text" placeholder="Search" />
            </div>
            <div className='text-right'>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } className='text-2xl mx-3' to='/'><BiHome className='inline' /></NavLink>
                <Link className='text-2xl mx-3' to='/friends'><TiGroupOutline className='inline' /></Link>
                <Link className='text-2xl mx-3' to='/notification'><IoIosNotificationsOutline className='inline' /></Link>
                <Link className='text-2xl mx-3' to='/message'><AiOutlineMessage className='inline' /></Link>
                <span><CgProfile className='inline text-3xl ml-10 mr-2' /> Adnan Chowdury <IoIosArrowDown className='inline' /></span>
            </div>
        </div>
    );
};

export default Header;