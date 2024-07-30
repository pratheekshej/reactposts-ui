import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { useToggleModal } from '../../contexts/ModalProvider';

const MainHeader = () => {
    const { setOpenModal } = useToggleModal();

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <button className={classes.button} onClick={setOpenModal}>
                    <MdPostAdd size={18} />
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;