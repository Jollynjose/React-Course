import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./Context-Api/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCart = () => {
    setCartIsShow(true);
  };
  const hideCart = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCart} />}
      <Header onShow={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
