import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        setCartList([
            ...cartList,
            item]);
    }
    function clearCart() {
        setCartList([]);
    }
  

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    );
}