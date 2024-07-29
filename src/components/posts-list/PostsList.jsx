import React from 'react'
import Post from '../post/Post'
import classes from './PostsList.module.css'
import NewPost from '../new-post/NewPost';

const posts = [
    { author: 'Tester 1', body: 'Test Content 1' },
    { author: 'Tester 2', body: 'Test Content 2' },
];

const PostsList = () => {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                {posts.map(post => (
                    <Post
                        key={post.author}
                        author={post.author}
                        body={post.body}
                    />
                ))}
            </ul>
        </>
    )
}

export default PostsList
