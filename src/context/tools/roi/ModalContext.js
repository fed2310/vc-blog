import React, {useState, createContext} from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const contexts = {
        show,
        setShow,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName, 
        setLastName,
    }

    return (
        <ModalContext.Provider value={contexts}>
            {props.children}
        </ModalContext.Provider>
    )
}

