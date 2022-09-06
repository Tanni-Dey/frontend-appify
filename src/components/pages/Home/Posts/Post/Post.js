import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosShareAlt } from 'react-icons/io';
import { FiSave } from 'react-icons/fi';
import { BsEmojiLaughing, BsFillEmojiDizzyFill, BsFillFlagFill, BsLink45Deg } from 'react-icons/bs';
import { GrEdit, GrEmoji } from 'react-icons/gr';
import { MdDeleteSweep } from 'react-icons/md';
import { BiComment, BiLike } from 'react-icons/bi';
import { AiFillLike, AiOutlineFileGif } from 'react-icons/ai';
import { FcLikePlaceholder } from 'react-icons/fc';
import { HiEmojiSad } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';


const Post = ({ post }) => {
    const { id, userName, profilePic, caption, img1, img2, img3, img4, img5, feelings, time, like, wow, love, haha, angry, commentNumber, commentUser } = post;

    const [open, setOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [commentOpen, setCommentOpen] = useState(false);


    return (
        <div className='bg-white rounded-sm mb-2 p-5 text-left'>
            <div className='flex justify-between relative'>

                <div className='flex items-center'>
                    <img className='rounded-full w-12 mr-2' src={profilePic} alt="" />
                    <Link className='text-md text-left ml-2 font-semibold' to=''>{userName} <span className='text-xs font-light'>{
                        feelings ? feelings : null
                    }</span>
                        <p className='text-sm font-light'>{time} ago</p>
                    </Link>
                </div>

                <button className='z-0' onClick={() => setOpen(!open)}><IoIosArrowDown /></button>

                {
                    open &&
                    <ul className='bg-primary z-40 p-3 text-left absolute top-10 right-0'>
                        <li className='mb-2'><Link to=''><FiSave className='inline text-xl mr-2' /> Saved Posts</Link></li>
                        <li className='mb-2'><Link to=''><BsFillFlagFill className='inline text-xl mr-2' />Report Post</Link></li>
                        <li className='mb-2'><Link to=''><GrEdit className='inline text-xl mr-2' /> Edit Post</Link></li>
                        <li className='mb-2'><Link to=''><MdDeleteSweep className='inline text-xl mr-2' /> Delete Post</Link></li>
                        <hr />
                        <li className='mb-2'><Link to=''><BsLink45Deg className='inline text-xl mr-2' /> Open Post in new tab</Link></li>
                    </ul>
                }

            </div>

            {
                caption ? <p className='my-5'>{caption}</p> : null
            }

            <div className='grid grid-cols-2 gap-2'>
                {
                    img1 && !img2 ? <img className='w-full col-span-2' src={img1} alt="" /> : <img className='w-full ' src={img1} alt="" />
                }
                {
                    img2 ? <img className='w-full' src={img2} alt="" /> : null
                }
            </div>

            <div className='grid grid-cols-3 gap-2'>
                {
                    img3 ? <img className='my-2' src={img3} alt="" /> : null
                }
                {
                    img4 ? <img className='my-2' src={img4} alt="" /> : null
                }
                {
                    img5 ? <img className='my-2' src={img5} alt="" /> : null
                }
            </div>

            <div className='grid grid-cols-2 justify-between items-center'>
                <div className='my-3'>
                    {
                        like ? <AiFillLike className='text-white text-xl inline rounded-full bg-blue-600 p-1' /> : null
                    }
                    {
                        love ? <FcLikePlaceholder className='text-white text-xl inline rounded-full bg-red-600 p-1' /> : null
                    }
                    {
                        wow ? <BsFillEmojiDizzyFill className='text-white text-xl inline rounded-full bg-yellow-500 p-1' /> : null
                    }
                    {
                        haha ? <BsEmojiLaughing className='text-white text-xl inline rounded-full bg-yellow-500 p-1' /> : null
                    }
                    {
                        angry ? <HiEmojiSad className='text-white text-xl inline rounded-full bg-red-800 p-1' /> : null
                    }
                    <span className='ml-3'>{Number(like) + Number(love ? love : 0) + Number(wow ? wow : 0) + Number(haha ? haha : 0) + Number(angry ? angry : 0)}</span>
                </div>

                {
                    commentNumber ? <p className='text-right'>{commentNumber} comment</p> : null
                }
            </div>

            <div className='grid grid-cols-3 p-2 bg-primary mt-3'>
                <button onClick={() => setLiked(!liked)}>{
                    liked ? <span className=' text-blue-600'><BiLike className='inline text-xl mr-2' /> Like</span> : <span><BiLike className='inline text-xl mr-2' /> Like</span>
                }</button>

                <button onClick={() => setCommentOpen(!commentOpen)}><BiComment className='inline text-xl mr-2' /> Comment</button>

                <button><IoIosShareAlt className='inline text-xl mr-2' /> Share</button>
            </div>

            {
                commentOpen && <form className='mt-5 grid grid-cols-12 justify-between'>
                    <img className='inline rounded-full w-8 mr-2' src={profilePic} alt="" />

                    <div className='flex'>
                        <button><GrEmoji className='inline text-xl' /> </button>
                        <button><BsLink45Deg className='inline text-xl' /> </button>
                        <button><AiOutlineFileGif className='inline text-xl' /> </button>
                    </div>

                    <div class="relative col-span-10">
                        <input type="text" id="search-dropdown" class="p-2.5  z-20 text-sm text-gray-900 bg-gray-50 rounded-full w-full border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Write Your comment" required="" />
                        <button type="submit" class="absolute top-[-1] right-0 p-2.5 text-xl font-medium text-gray-400"><RiSendPlaneFill /></button>
                    </div>

                </form>
            }
        </div>
    );
};

export default Post;