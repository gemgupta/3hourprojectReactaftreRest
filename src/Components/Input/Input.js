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
    if (enteredid > 0 && eneteredPrice > 0 && enteredQuant > 0) {
      const data = {
        id: enteredid,
        name: enteredName,
        price: eneteredPrice,
        description: eneteredDes,
        quant: enteredQuant,
      };
      Cartctx.addMed(data);
    } else {
      alert("You have entered a negative number");
    }

    setEnteredId("");
    setenteredName("");
    setEneteredDes("");
    setEneteredPrice("");
    setEnteredQuant("");
  };
  return (
    <div className="inputform">
      <form onSubmit={SubmitHandler}>
        <label htmlFor="productId">Product Id:</label>
        <input
          type="number"
          id="productId"
          value={enteredid}
          onChange={idHandler}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameHandler}
          required
          autoComplete="off"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={eneteredDes}
          onChange={descriptionHandler}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={eneteredPrice}
          onChange={priceHandler}
          required
        />
        <label htmlFor="quant">Quantity Available:</label>
        <input
          type="number"
          id="quant"
          value={enteredQuant}
          onChange={quantHandler}
          required
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Input;
