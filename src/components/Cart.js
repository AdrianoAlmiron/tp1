import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import CartList from "./CartList.js";
import './style/Cart.css';

export default function Cart() {
    const {totalItems, orderId, createOrder} = UseCartContext();
    const [orderSent, setOrderSent] = useState(false)

    function sendOrderManage(customerData) {
         setOrderSent(true);
         createOrder(customerData);
     }

     if (!totalItems) {
        return (
            <div className="cart">
                {orderSent ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList sendOrderManage={sendOrderManage}/>
        </div>
    );
}