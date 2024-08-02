import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import classes from './PostsList.module.css'
import NewPost from '../../routes/new-post/NewPost';
import Modal from '../modal/Modal';
import { useToggleModal } from '../../contexts/ModalProvider';
import { API } from '../../js/api';

const PostsList = ({ posts }) => {
    const { newPost } = useToggleModal();
    const [appPosts, setAppPosts] = useState(posts);

    useEffect(() => {
        if (newPost) {
            const addNewPost = async () => {
                const response = await window.fetch(`${API}/posts`, {
                    method: 'POST',
                    body: JSON.stringify(newPost),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const { post } = await response.json();
                setAppPosts((prevPosts) => ([post, ...prevPosts]));
            }
            addNewPost();
        }
    }, [newPost]);

    return (
        <>
            <ul className={classes.posts}>
                {appPosts.map(post => (
                    <Post
                        key={post.id}
                        author={post.author}
                        body={post.body}
                    />
                ))}
            </ul>
            {appPosts.length === 0 && <h1>There are no posts yet...</h1>}
        </>
    )
}

export default PostsList
