import React, {createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider(props) {
    const [open, setOpen ] = useState(false);
    const [choice, setChoice] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    return(
        <ModalContext.Provider
            value={{open, setOpen, choice, setChoice, name, setName, email, setEmail, company, setCompany, message, setMessage}}
        >
        {props.children}
        </ModalContext.Provider>
    );
}