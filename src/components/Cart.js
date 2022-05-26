import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './style/Cart.css';

export default function Cart() {
    const {cartList, clearCart, totalPrice, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>Lista Vacia</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Tu Lista de repodruccion:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Reproducciones $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar Lista</button>
        </div>
    );
}