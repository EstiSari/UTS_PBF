import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const LaptopCartItem = ({ cart }) => {
  const { books, updateCart, removeCart } = useContext(Context);
  const { _id, quantity } = cart;

  const [newQuantity, setNewQuantity] = useState(quantity);

  const book = books.filter(book => book._id === _id);
  const { title, src, description, content, price } = book[0];

  const handleCartRemove = () => {
    removeCart(_id);
  };

  return (
    <div className="book-item mt-4">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 inline-block">
          <div className="product-cover w-50 m-auto">
            <img className="img-fluid" src={src} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <h4>
            <Link to={"/book/details/" + _id}>{title}</Link>
          </h4>
          <h5>Price: Rp. {price}</h5>
          <h5>Total Price: Rp. {(price * newQuantity).toFixed(2)}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-2">
          <input
            onChange={e => {
              if (e.target.value > 0) {
                setNewQuantity(e.target.value);
                updateCart(_id, e.target.value);
              } else {
                alert("Please enter a value greater than or equal to 1");
                setNewQuantity(1);
                updateCart(_id, 1);
              }
            }}
            className="input-group w-25 text-center m-auto border border-info rounded-lg"
            type="text"
            value={newQuantity}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <button onClick={handleCartRemove} className="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaptopCartItem;
