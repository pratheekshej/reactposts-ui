import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import { useToggleModal } from '../../contexts/ModalProvider';
import classes from './NewPost.module.css';

const NewPost = ({ }) => {
    const { addNewPost, setCloseModal } = useToggleModal();
    const navigate = useNavigate();

    const handleSubmitPosts = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addNewPost(Object.fromEntries(formData));
        e.target.reset();
        setCloseModal(false);
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