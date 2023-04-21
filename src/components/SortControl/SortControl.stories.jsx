import SortControl from "./SortControl";

export default {
    title: "SortControl",
    component: SortControl
}

const selectSortOrder = () => {
    console.log("clicked");
}

export const Default = () => <SortControl sortOrder="title" onSelect={selectSortOrder} />