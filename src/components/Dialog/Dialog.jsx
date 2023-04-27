import React, { useState } from "react";
import Modal from "./Modal";
import MovieForm from "../MovieForm/MovieForm";
import { createPortal } from "react-dom";
import { Portal } from "react-portal";


const Dialog = (props) => {

    return(
        <div>
            <button onClick={props.showModal}>{props.title}</button> 
            {/* {props.show && createPortal(props.children, document.body)} */}
            {props.show && <Portal>{props.children}</Portal>}
        </div>
    );
}

export default Dialog;
