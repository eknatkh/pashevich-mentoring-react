import Dialog from "./Dialog";
import "../Dialog/style.css";
import { useState } from "react";

export default {
    title: "Delete Movie",
    component: Dialog,
}

const Template = (args) => {
    const [isActive, setIsActive] = useState(false);

    const handleButton = () => {
        setIsActive((previousState) => !previousState);
    }

    return (
        <div>
            <button className="dialog-button" onClick={handleButton}>{args.title}</button>
            {isActive && (
                <Dialog title="DELETE MOVIE" onClose={() => setIsActive(false)} >
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={() => setIsActive(false)}>CONFIRM</button>
                </Dialog>
            )}
        </div>
    )
}

export const Default = Template.bind({});
Default.args = {
    title: "DELETE MOVIE",
}