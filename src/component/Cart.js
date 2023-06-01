import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Number of items in Cart:</h2>
      <button className="green">Add Item to Cart</button>
      <button className="red">Remove Item from Cart</button>
    </div>
  );
};

export default Cart;