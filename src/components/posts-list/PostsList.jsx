import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import classes from './PostsList.module.css'
import NewPost from '../new-post/NewPost';
import Modal from '../modal/Modal';
import { useToggleModal } from '../../contexts/ModalProvider';

const PostsList = () => {
    const { isModalVisible, setCloseModal, newPost } = useToggleModal();
    const [appPosts, setAppPosts] = useState([]);

    useEffect(() => {
        if (newPost) {
            setAppPosts((prevPosts) => ([...prevPosts, { ...newPost, id: prevPosts.length + 1 }]));
        }
    }, [newPost]);

    return (
        <>
            {
                isModalVisible &&
                <Modal onClose={setCloseModal}>
                    <NewPost />
                </Modal>
            }
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
