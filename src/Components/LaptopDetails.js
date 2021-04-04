import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { useParams, Link } from "react-router-dom";

const LaptopDetails = () => {
  const { _id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter(book => book._id === _id);
  const {
    title,
    src,
    description,
    content,
    price
  } = book[0];

  const handleAddCart = () => {
    addCart(_id);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Details</h1>
      <div className="book-details w-75 my-4 mx-auto">
        <div className="row">
          <div className="book-img col-lg-5 col-12">
            <img className="w-100 h-60" src={src} alt="" />
          </div>
          <div className="contents col-lg-7 col-12">

            <h1 className="text-muted ml-0">{title}</h1>
            <p className="text-capitalize">Spesifikasi: {content}</p>
            <h5>
              {description}
            </h5>

            <h4>Rp {price}</h4>
            <br></br>
            <button
              style={{ fontSize: "1.3rem" }}
              className="btn btn-outline-primary px-5 py-2 m-auto"
              onClick={handleAddCart}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
