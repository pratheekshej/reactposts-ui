import { Fragment, useEffect, useState } from 'react'
import PostsList from '../components/posts-list/PostsList';
import { API } from '../js/api';
import { Outlet } from 'react-router-dom';
import { useToggleModal } from '../contexts/ModalProvider';

function Posts() {
    const [postsList, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { newPost } = useToggleModal();

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const res = await fetch(`${API}/posts`);
            const { posts } = await res.json();
            setPosts(posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, [newPost]);

    return (
        <Fragment>
            <Outlet />
            <main>
                {isLoading && 'Loading Posts...'}
                {!isLoading && postsList.length === 0 && 'There are no posts available. Please add new to view them.'}
                {(postsList.length > 0) && <PostsList posts={postsList} />}
            </main>
        </Fragment>
    )
}

export default Posts
