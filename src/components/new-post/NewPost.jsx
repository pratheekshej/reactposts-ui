import { useToggleModal } from '../../contexts/ModalProvider';
import classes from './NewPost.module.css';

const NewPost = ({ }) => {
    const { addNewPost, setCloseModal } = useToggleModal();

    const handleSubmitPosts = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addNewPost(Object.fromEntries(formData));
        e.target.reset();
        setCloseModal(false);
    }

    return (
        <form className={classes.form} onSubmit={handleSubmitPosts}>
            <p>
                <label htmlFor="body">Text:</label>
                <textarea id="body" name='body' required rows={3} />
            </p>
            <p>
                <label htmlFor="author">Your name:</label>
                <input type="text" id="author" name='author' required />
            </p>
            <div className={classes.actions}>
                <button>Create New Post</button>
            </div>
        </form>
    );
}

export default NewPost;