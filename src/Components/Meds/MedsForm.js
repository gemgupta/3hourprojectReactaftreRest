import React from "react";
import { useContext } from "react";
import "./MedsForm.css";
import CartContext from "../Store/CartContext";
function MedsForm(props) {
  const Cartctx = useContext(CartContext);

  const AddItemHandler = (event) => {
    event.preventDefault();
    console.log(props.item.quant);
    Cartctx.addItem({ ...props.item, quantity: 1 });
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
