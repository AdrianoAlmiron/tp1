import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import './style/CartEmpty.css';

export default function CartList() {
    const {orderId} = UseCartContext();

    return (
        <div className="cartEmpty">
                {orderId ? <h1 className="cartEmpty__title">Lista enviada! Nro de pedido: {orderId}</h1> : <h1 className="cartEmpty__title">La lista está vacía</h1>}
                <Link to='/'>
                    <button className="cartEmpty__button">Volver al menú</button>
                </Link>
            </div>
    );
}