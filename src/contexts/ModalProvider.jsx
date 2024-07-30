import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
    isModalVisible: false,
    newPost: null,
    setOpenModal: () => { },
    setCloseModal: () => { },
    addNewPost: () => { }
});

export const useToggleModal = () => {
    const { isModalVisible, setOpenModal, setCloseModal, addNewPost, newPost } = useContext(ModalContext);
    return { isModalVisible, setOpenModal, setCloseModal, addNewPost, newPost };
};

export const ModalProvider = ({ children }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPost, setNewPost] = useState(null);

    return (
        <ModalContext.Provider value={{
            isModalVisible,
            newPost,
            setOpenModal: () => setIsModalVisible(true),
            setCloseModal: () => setIsModalVisible(false),
            addNewPost: (post) => setNewPost(post),
        }}>
            {children}
        </ModalContext.Provider>
    );
};