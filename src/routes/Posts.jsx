import { useEffect, useState } from 'react'
import PostsList from '../components/posts-list/PostsList';
import { API } from '../js/api';

function Posts() {
    const [postsList, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const res = await fetch(`${API}/posts`);
            const { posts } = await res.json();
            setPosts(posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <>
            {(postsList.length > 0) && <PostsList posts={postsList} />}
            {isLoading && 'Loading Posts...'}
            {!isLoading && postsList.length === 0 && 'There are no posts available. Please add new to view them.'}
        </>
    )
}

export default Posts
