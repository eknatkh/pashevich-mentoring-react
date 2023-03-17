import React from 'react';
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import "./css/Main.css"

function App() {

  return (
    <div className="App">
        <Counter />
        <SearchForm searchQuery="search here" onSearch={(queryText) => console.log("search was triggered: " + queryText)} />
    </div>
  );
}

export default App;
