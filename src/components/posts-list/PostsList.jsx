import { Fragment } from 'react'
import Post from '../post/Post'
import classes from './PostsList.module.css'
import { useLoaderData } from 'react-router-dom';

const PostsList = () => {
    const posts = useLoaderData();

    return (
        <Fragment>
            <ul className={classes.posts}>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        {...post}
                    />
                ))}
            </ul>
            {posts.length === 0 && <h1>There are no posts yet...</h1>}
        </Fragment>
    )
}

export default PostsList
