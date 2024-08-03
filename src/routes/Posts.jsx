import { Fragment } from 'react'
import PostsList from '../components/posts-list/PostsList';
import { API } from '../js/api';
import { Outlet } from 'react-router-dom';

function Posts() {
    return (
        <Fragment>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </Fragment>
    )
}

export default Posts;

export const loader = async () => {
    try {
        const res = await fetch(`${API}/posts`);
        const { posts } = await res.json();
        return posts;
    } catch (error) {
        console.log(error);
    }
}
