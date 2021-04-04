import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="container search-header px-3 py-3 mx-auto text-center mt-sm-5">
      <h1 className="display-4">Search Laptops</h1>
      <p className="lead">Search For the Laptop using laptop title</p>
      <Search />
    </div>
  );
};

export default Header;
