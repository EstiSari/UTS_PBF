import React, { useContext } from "react";
import { Context } from "../Context/Context";
import LaptopCartItem from "./LaptopCartItem";
import LaptopCartCheckOut from "./LaptopCartCheckOut";

const LaptopCart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <h1 className="display-4 text-center my-5">
        Your cart is Empty. Add Some.
      </h1>
    );
  } else {
    return (
      <div className="text-center">
        <h1 className="display-4"></h1>
        <div className="container d-flex flex-column">
          {carts.map(cart => (
            <LaptopCartItem key={cart._id} cart={cart} />
          ))}
        </div>
        <LaptopCartCheckOut />
      </div>
    );
  }
};

export default LaptopCart;
