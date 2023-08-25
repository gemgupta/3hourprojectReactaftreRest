import Header from "./Layout/Header";
import Meds from "./Components/Meds/MedsItem";
import Input from "./Components/Input/Input";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [showCart, setshowCart] = useState(false);
  const closeCart = () => {
    setshowCart(false);
  };
  const openCart = () => {
    setshowCart(true);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCart} />}
      <Header onOpen={openCart} />
      <Input />
      <Meds />
    </CartProvider>
  );
}

export default App;
