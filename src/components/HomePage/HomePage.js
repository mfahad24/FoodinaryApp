import React from "react";
import TopMenu from "./TopMenu/TopMenu";
import SearchBar from "./SearchBar/SearchBar";
import Categories from "./Categories/Categories";

function HomePage() {
  return (
    <>
      <TopMenu></TopMenu>
      <SearchBar></SearchBar>
      <Categories></Categories>
    </>
  );
}

export default HomePage;
