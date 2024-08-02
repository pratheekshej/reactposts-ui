import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { useToggleModal } from '../../contexts/ModalProvider';
import { Link, useNavigate } from 'react-router-dom';

const MainHeader = () => {
    const { setOpenModal } = useToggleModal();
    const navigate = useNavigate();

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <Link className={classes.button} to={'/create-post'}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;