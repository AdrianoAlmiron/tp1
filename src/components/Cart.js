import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartList from "./CartList.js";
import './style/Cart.css';

export default function Cart() {
    const {totalItems, totalPrice, cartList, clearCart} = UseCartContext();
    
    function createOrder() {
        let order = {};
        
        order.buyer = {name: 'Rafa', email: 'rafafloresok@gmail.com', phone: '2964603008' };
        order.total = totalPrice;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price*item.quantity;
            return {id, name, price}
        });

        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => clearCart())
    }

    if (!totalItems) {
        return (
            <div className="cart">
                <h1>Lista Vacia</h1>
                <Link to='/'>
                    <button>Volver a Inicio</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList createOrder={createOrder}/>
        </div>
    );
}