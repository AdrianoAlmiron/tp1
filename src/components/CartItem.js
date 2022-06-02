import { UseCartContext } from "../context/CartContext";
import './style/CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <div>
            <img src={item.img} alt=""/>
        <li> {item.name} - Reproducciones: {item.price} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}></span></li>
        </div>
    );
}