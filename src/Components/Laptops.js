import React, { useContext, Fragment } from "react";
import { Context } from "../Context/Context";
import Laptop from "./Laptop";

const Laptops = () => {
  const { books, clearSearch, searchedBooks, searchString } = useContext(
    Context
  );

  return (
    <div className="container">
      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className="display-4 text-center mb-3"
      >
        {searchString === null ? (
          ""
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} class="btn btn-danger ml-2">
              X
            </span>
          </Fragment>
        )}
      </h1>

      <div className="row">
        {searchedBooks.length === 0
          ? books.map(book => {
              const { _id } = book;
              return <Laptop key={_id} bookDetails={book} />;
            })
          : searchedBooks.map(book => {
              const { _id } = book;
              return <Laptop key={_id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Laptops;
