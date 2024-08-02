import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import classes from './NewPost.module.css';
import { API } from '../../js/api';

const NewPost = ({ }) => {
    const navigate = useNavigate();

    const handleSubmitPosts = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPost = Object.fromEntries(formData);
        try {
            await window.fetch(`${API}/posts`, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
        } finally {
            e.target.reset();
            closeHandler();
        }
    }

    const closeHandler = () => {
        navigate(-1)
    }

    return (
        <Modal onClose={closeHandler}>
            <form className={classes.form} onSubmit={handleSubmitPosts}>
                <p>
                    <label htmlFor="body">Text:</label>
                    <textarea id="body" name='body' required rows={3} />
                </p>
                <p>
                    <label htmlFor="author">Your name:</label>
                    <input type="text" id="author" name='author' required />
                </p>
                <p className={classes.actions}>
                    <Link type='button' to={'..'}>Cancel</Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;