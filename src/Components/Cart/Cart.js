import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";
function Cart(props) {
  const CartCtx = useContext(CartContext);
  const amount = CartCtx.totalAmount;
  const hasItem = CartCtx.item.length > 0;
  const RemoveHandler = (id) => {
    CartCtx.removeItem(id)
    CartCtx.reduceQuant(id)
  };

  const AddHandler = (item) => {
    CartCtx.addItem({...item,quantity:1})
  };
  const CartItems = (
    <ul className="cart-items">
      {CartCtx.item.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            onRemove={RemoveHandler.bind(null, item.id)}
            onAdd={AddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className="total">
        <span>Amount</span>
        <span>{amount}</span>
      </div>
      <div className="actions">
        <button onClick={props.onClose} className="button--alt">
          Close
        </button>
        {hasItem && <button className="button"> Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
