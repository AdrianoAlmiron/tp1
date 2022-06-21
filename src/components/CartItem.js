import { UseCartContext } from "../context/CartContext";
import './style/CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    
    return (
        <li className="cartItem">
            <span className="cartItem__name">{item.name}</span>
            <hr/>
            <span className="cartItem__quantity">Cantidad: {item.quantity}</span>
            <span className="cartItem__subtotal"> Reproducciones: {item.price*item.quantity}</span>
            <span className="cartItem__remove-icon" onClick={() => clearItem(item)}></span>
            <hr />
        </li>
    );
}