import Dialog from "./Dialog";
import "../Dialog/style.css"

export default {
    tittle: "Delete Movie",
    component: Dialog,
}

const Template = (args) => 
    <Dialog {...args}>
        <>
            <p>Are you sure you want to delete this movie?</p>
            <button>CONFIRM</button>
        </>
    </Dialog>

export const Default = Template.bind({});
Default.args = {
    title: "DELETE MOVIE",
    active: true,
}