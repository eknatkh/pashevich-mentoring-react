import React from "react";
import "./style.css";

const ContextMenu = ({x, y, closeContextMenu, editMovie, deleteMovie}) => {

    return (
        <div style={{position: "absolute", "z-index": 20, top: `${y}px`, left: `${x}px`}}>
            <ul>
                <li className="menu-li" onClick={editMovie}>EDIT MOVIE</li>
                <li className="menu-li" onClick={deleteMovie}>DELETE MOVIE</li> 
                <li className="menu-li menu-close" onClick={closeContextMenu}>CLOSE MENU</li>
            </ul>
        </div>
    )
}

export default ContextMenu;
