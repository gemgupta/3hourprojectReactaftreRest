import React from "react";
import { useState, useContext } from "react";
import "./Input.css";
import CartContext from "../Store/CartContext";
function Input(props) {
  const [enteredid, setEnteredId] = useState("");
  const [enteredName, setenteredName] = useState("");
  const [eneteredDes, setEneteredDes] = useState("");
  const [eneteredPrice, setEneteredPrice] = useState("");
  const [enteredQuant, setEnteredQuant] = useState("");
  const Cartctx = useContext(CartContext);
  const idHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const nameHandler = (event) => {
    setenteredName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setEneteredDes(event.target.value);
  };
  const priceHandler = (event) => {
    setEneteredPrice(event.target.value);
  };
  const quantHandler = (event) => {
    setEnteredQuant(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: enteredid,
      name: enteredName,
      price: eneteredPrice,
      description: eneteredDes,
      quant: enteredQuant,
    };
    Cartctx.addMed(data)
    // props.getdata(data);
    // console.log(data)
    setEnteredId("");
    setenteredName("");
    setEneteredDes("");
    setEneteredPrice("");
    setEnteredQuant("");
  };
  return (
    <div className="inputform">
      <form onSubmit={SubmitHandler}>
        <label htmlFor="prodcutId">Product Id:</label>
        <input
          type="number"
          id="productId"
          value={enteredid}
          onChange={idHandler}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameHandler}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={eneteredDes}
          onChange={descriptionHandler}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={eneteredPrice}
          onChange={priceHandler}
        />
        <label htmlFor="quant">Quantity Available:</label>
        <input
          type="number"
          id="quant"
          value={enteredQuant}
          onChange={quantHandler}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Input;
