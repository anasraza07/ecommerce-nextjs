import { createContext, useEffect, useState } from "react";

const CartContext = createContext < {
  cart: number,
  setCart:} | null > (null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext };