import { UseCartContext } from "../context/CartContext";

export default function Cart() {
    const {cartList, clearCart} = UseCartContext();
    
    return (
        <div className="cart">
            <h1>Su pedido:</h1>
            {cartList.map(el => <li>Item: {el.item.name} - Cantidad: {el.quantity}</li>)}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}