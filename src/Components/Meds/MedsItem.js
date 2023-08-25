import React from "react";
import "./MedsItem.css";
import { useContext } from "react";
import MealsForm from "./MedsForm";
import CartContext from "../Store/CartContext";

function Meds() {
  const Cartctx = useContext(CartContext);
  return (
    <section className="meds medlist">
      <ul>
        {Cartctx.med.map((item) => (
          <div key={item.id} className="meds-1">
            <MealsForm item={item} />
            <h3>{item.name}</h3>
            <div className="discription">{item.description}</div>
            <div className="price">INR {item.price}</div>
            <div>
              Quantity Left {item.quant > 0 ? item.quant : ": Out Of Stock"}
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Meds;
