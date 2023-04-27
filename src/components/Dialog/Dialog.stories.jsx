import Dialog from "./Dialog";

export default {
    title: "Dialog",
    component: Dialog,
}

const Template = (args) => <Dialog {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Dialog",
    show: true,
}
