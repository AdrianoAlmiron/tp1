import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './style/CartList.css';

export default function CartList(createOrder) {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Mi Mix:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Reproduciones ${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar Lista</button>
            <button onClick={createOrder}>Ok</button>
        </div>
    );
}