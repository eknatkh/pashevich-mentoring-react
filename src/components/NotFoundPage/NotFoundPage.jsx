import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div style={{"text-align": "center"}}>
            <h1>404</h1>
            <p>Not found</p>
            <h2><Link to="/">Go to home page</Link></h2>
        </div>
    )
}

export default NotFoundPage;
