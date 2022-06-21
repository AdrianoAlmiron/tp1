import { UseCartContext } from "../context/CartContext";

import CartList from "./CartList";
import CartEmpty from "./CartEmpty.js";

import './style/Cart.css';

export default function Cart() {
    const {totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <CartEmpty />
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList/>
        </div>
    );
}