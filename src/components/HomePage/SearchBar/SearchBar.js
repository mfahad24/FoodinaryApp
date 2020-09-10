import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <form className="search-bar-form">
        <input
          className="search-bar-input"
          type="text"
          name="name"
          placeholder="Search"
        />
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}

export default SearchBar;
