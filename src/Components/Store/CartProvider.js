import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";
function CartProvider(props) {
  const [items, setitem] = useState([]);
  const [med, setMed] = useState([]);
  const [quantity, setquantity] = useState(0);
  //   adding items by finding their index and checking if they are already present or not
  const addItemHandler = (item1) => {
    const itemIndex = items.findIndex((item) => item.id === item1.id);
    const existingCartItem = items[itemIndex];
    if (existingCartItem) {
      if (med[itemIndex].quant >= 1) {
        existingCartItem.quantity =
          Number(existingCartItem.quantity) + Number(item1.quantity);
        setquantity(existingCartItem.quantity);

        med[itemIndex].quant = med[itemIndex].quant - 1;
      }
    } else {
      setitem([...items, item1]);
    }
  };
  let totalAmount = 0;
  items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.quantity;
  });
  const removeItenHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const existingCartItem = items[itemIndex];
    if (
      existingCartItem &&
      existingCartItem.quantity >= 1 &&
      med[itemIndex].quant >= 0
    ) {
      existingCartItem.quantity = Number(existingCartItem.quantity) - 1;

      med[itemIndex].quant = Number(med[itemIndex].quant) + 1;
      setquantity(existingCartItem.quantity);
    }
    if (existingCartItem.quantity === 0) {
      const updatedItem = items.filter((item) => item.id !== id);
      setitem([...updatedItem]);
    }
  };
  const addMedHandler = (data) => {
    setMed((prevdata) => {
      return [...prevdata, data];
    });
  };
  const reduceQuantHandler = (id) => {
    // const itemIndex = med.findIndex((item) => item.id === id);
    // const existingCartItem = med[itemIndex];
    // if (existingCartItem && existingCartItem.quant >= 1 && med[itemIndex].quant>=1) {
    //   existingCartItem.quant = Number(existingCartItem.quant) - 1;
    //   setquantity(existingCartItem.quantity);
    // }
    // if (existingCartItem.quantity === 0) {
    //   const updatedItem = items.filter((item) => item.id !== id);
    //   setitem([...updatedItem]);
    // }
  };
  const CartContext1 = {
    item: items,
    quantity: quantity,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItenHandler,
    addMed: addMedHandler,
    med: med,
    reduceQuant: reduceQuantHandler,
  };
  return (
    <CartContext.Provider value={CartContext1}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
