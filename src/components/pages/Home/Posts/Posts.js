import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;