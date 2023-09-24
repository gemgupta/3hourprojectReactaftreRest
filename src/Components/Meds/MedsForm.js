import React from "react";
import { useContext } from "react";
import "./MedsForm.css";
import CartContext from "../Store/CartContext";
import axios from "axios";
function MedsForm(props) {
  const Cartctx = useContext(CartContext);

  const AddItemHandler = async (event) => {
    event.preventDefault();
    // console.log(props.item.quant);
    const itemToAdd= {
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      quantity: 1
    }
    
    Cartctx.addItem(itemToAdd);
    try {
      const response = await axios.post(
        `https://crudcrud.com/api/086320c71d22411c8d12f4204a1b2b33/Med`,
        itemToAdd
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  let available = false;
  if (props.item.quant === 0) {
    available = true;
  }

  return (
    <div className="med-form">
      <form>
        <button
          onClick={AddItemHandler}
          className="formbutton"
          disabled={available}
          type="submit"
        >
          +Add
        </button>
      </form>
    </div>
  );
}

export default MedsForm;
