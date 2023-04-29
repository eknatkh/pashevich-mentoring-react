import Dialog from "./Dialog";
import "./style.css";

export default {
    title: "Dialog",
    component: Dialog,
}

const Template = (args) => <Dialog {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Dialog name",
}
