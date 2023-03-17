import React, { useState } from "react";

function SearchForm(props) {
    const [query, setQuery] = useState(props.searchQuery);

    return (
        <div>
            <h1>FIND YOUR MOVIE</h1>
            <input 
                type="search" 
                placeholder="What do you want to watch?" 
                size="30" 
                value={query}  
                onChange={e => setQuery(e.target.value)}
                onFocus={props.onSearch(query)}></input>
            <button onClick={props.onSearch(query)}>Search</button>
        </div>
    )
}

export default SearchForm;