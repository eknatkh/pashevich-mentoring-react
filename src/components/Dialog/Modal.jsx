import React from "react";

const Modal = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <button onClick={props.onClose}>Close window</button>
        </>
    )
}

export default Modal;
