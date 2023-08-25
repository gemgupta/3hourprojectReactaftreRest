import Header from "./Layout/Header";

import Meals from "./Components/Meals/Meals";
import Input from "./Components/Input/Input";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [showCart, setshowCart] = useState(false);
  // const [medData, setmedData] = useState([])
  const closeCart = () => {
    setshowCart(false);
  };
  const openCart = () => {
    setshowCart(true);
  };
//   const dataHandler =(data)=>{
//     setmedData((prevMedData)=> [...prevMedData, data])
// console.log(data)
//   }
  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCart} />}
      <Header onOpen={openCart} />
      <Input />
     
      <Meals />
    </CartProvider>
  );  
}

export default App;