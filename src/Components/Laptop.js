import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import './Style/Laptop.css'

const Laptop = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const {
    _id,
    title,
    src,
    description,
    content,
    price
  } = bookDetails;

  const handleAddCart = () => {
    addCart(_id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2">
      <div className="card">
           <h4>
              <Link style={{ color: "black" }} to={"/laptop/details/" + _id}>
                {title}
              </Link>
            </h4>
      <Link className="img" to={"/laptop/details/" + _id}>
      <img src={src} alt="" />
        </Link>
        
          <div className="content">
           
            <h5>Price: Rp {price}</h5>
          </div>
      </div>

      <div className="bottom">
        {/* <Link className="btn btn-outline-primary" to={"/laptop/details/" + _id}>
          Details
        </Link> */}
        <button onClick={handleAddCart} className="btn btn-outline-primary">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Laptop;
