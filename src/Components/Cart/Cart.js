import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../../UI/Modal";
import axios from "axios";
import CartItem from "./CartItem";
import "./Cart.css";
function Cart(props) {
  const CartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const amount = CartCtx.totalAmount;
  const hasItem = CartCtx.item.length > 0;
  const RemoveHandler = async (id, _id) => {
    CartCtx.removeItem(id);
    const existingItem = cartItems.find((item) => item._id === id);

    if (existingItem) {
      // Remove from local cart
      const updatedCart = cartItems.filter((item) => item._id !== id);

      CartCtx.setTotalAmount((totalAmount) => totalAmount - existingItem.price);
      setCartItems(updatedCart);

      // Remove from remote data
      try {
        await axios.delete(
          `https://crudcrud.com/api/1c7b12e2bfde4ff2af994deac138c7cf/Med/${_id}`
        );
      } catch (error) {
        console.error(
          "Error deleting item from remote data:",
          error.response.data
        );
      }
    }
  };
  useEffect(() => {
    async function fetchCartItem() {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/086320c71d22411c8d12f4204a1b2b33/Med`
        );
        const cart = response.data;
        // const totalAmount = cart.reduce(
        //   (total, item) => total + item.price,
        //   0
        // );
        // CartCtx.setTotalAmount(totalAmount);

        setCartItems(cart);
        // CartCtx.getlength(cartItems.length);
      } catch (error) {
        console.error("Error fetching cart items:", error.response.data);
      }
    }
    fetchCartItem();
  }, []);

  const AddHandler = (item) => {
    CartCtx.addItem({ ...item, quantity: 1 });
  };
  const CartItems = (
    <ul className="cart-items">
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            onRemove={RemoveHandler.bind(null, item.id, item._id)}
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
