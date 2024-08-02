import Post from '../post/Post'
import classes from './PostsList.module.css'

const PostsList = ({ posts }) => {
    return (
        <>
            <ul className={classes.posts}>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        author={post.author}
                        body={post.body}
                    />
                ))}
            </ul>
            {posts.length === 0 && <h1>There are no posts yet...</h1>}
        </>
    )
}

export default PostsList
