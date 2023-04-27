import Dialog from "./Dialog";

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
    show: true,
}