import React from "react";
import { useContext } from "react";
import "./Header.css";
import Cartimg from "./shopping-cart.png";

import CartContext from "../Components/Store/CartContext";
function Header(props) {
  const Cartctx = useContext(CartContext);
  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity =   quantity + Number(item.quantity);
  });
  return (
    <>
      <header className="container-nav">
        <div className="box-nav">
          <h3>Medicine Shop</h3>
        </div>
        {/* <nav className="item">
          <span >Home</span>
          <span >About Us</span>
          <span >Contact Us</span>
        </nav> */}
        <button onClick={props.onOpen} className="cart-nav">
          <img src={Cartimg} alt="Cartimg" />
          <h3> Your Cart</h3>

          <div className="num">{quantity}</div>
        </button>
      </header>
     
    </>
  );
}

export default Header;
