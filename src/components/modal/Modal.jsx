import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }) => {
    const navigate = useNavigate();
    const onClose = () => navigate(-1);

    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal
