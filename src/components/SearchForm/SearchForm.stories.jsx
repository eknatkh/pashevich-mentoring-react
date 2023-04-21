import SearchForm from "./SearchForm";
import "./style.css";

export default {
    title : "SearchForm",
    component: SearchForm,
    argTypes: {
        searchQuery : {
            type: "string",
            description: "Text that will be placed in search placeholder",
        }
    },
    parameters: {
        controls: { expanded: true },
    },
};

const Template = (args) => <SearchForm {...args}/>

export const Default = Template.bind({});
Default.args = {
    searchQuery: "search film here",
}

export const Other = Template.bind({});
Other.args = {
    searchQuery: "What do you want to watch?"
}
