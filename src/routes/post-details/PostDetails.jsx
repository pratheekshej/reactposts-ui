import { useLoaderData, Link } from 'react-router-dom';
import classes from './PostDetails.module.css';
import Modal from '../../components/modal/Modal';
import { API, getAPI } from '../../js/api';

const PostDetails = () => {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export const loader = async ({ params }) => {
    const response = await fetch(`${API}/posts/${params.id}`, getAPI);
    const { post } = await response.json();
    return post;
}