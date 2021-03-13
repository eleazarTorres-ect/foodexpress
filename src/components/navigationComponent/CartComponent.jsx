import Cart from "../../assets/img/carts.svg";
import React, { Component } from "react";

class CartComponent extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="flex flex-wrap content-center">
        <span className="relative inline-block shake-slow">
          <img className="w-6 h-6" src={Cart} alt="Cart" />

          <span
            id="totalItems"
            className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
          >
            0
          </span>
        </span>
      </div>
    );
  }
}

export default CartComponent;
