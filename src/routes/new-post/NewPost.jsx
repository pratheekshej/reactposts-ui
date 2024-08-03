import { Form, Link, redirect } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import classes from './NewPost.module.css';
import { API, postAPI } from '../../js/api';

const NewPost = ({ }) => {
    return (
        <Modal>
            <Form method='POST' className={classes.form}>
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
            </Form>
        </Modal>
    );
}

export default NewPost;

export const action = async ({ request }) => {
    const formData = await request.formData();
    const newPost = Object.fromEntries(formData);

    try {
        await window.fetch(`${API}/posts`, postAPI(newPost));
    } catch (error) {
        console.error(error);
    }

    return redirect("/");
}