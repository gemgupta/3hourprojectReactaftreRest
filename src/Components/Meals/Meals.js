import React from "react";
import "./Meals.css";
import { useContext } from "react";
import MealsForm from "./MealsForm";
import CartContext from "../Store/CartContext";

function Meals() {
  const Cartctx= useContext(CartContext)
  return (
    <section className="meals meallist">
      <ul>
        {Cartctx.med.map((item) => (
          <div key={item.id} className="meals-1">
            <MealsForm item={item} />
            <h3>{item.name}</h3>
            <div className="discription">{item.description}</div>
            <div className="price">INR {item.price}</div>
            <div >Quantity Left {item.quant}</div>
            
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Meals;
