import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './style/CartList.css';

export default function CartList({sendOrderManage}) {
    const [customerData, setCustomerData] = useState({});
    const [customerDataOk, setCustomerDataOk] = useState(false);
    const [customerMailOk, setCustomerMailOk] = useState(false);
    const [dataError, setDataError] = useState(false);
    const {cartList, clearCart, totalPrice} = UseCartContext();

    function changeHandler(e) {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    function customerDataVerify() {
        if (customerData.name && customerData.phone && customerData.email && customerData.email2) {
            setCustomerDataOk(true);
            if (customerData.email === customerData.email2) {
                setCustomerMailOk(true);
            }
        }
        return (customerDataOk && customerMailOk)
    }

    function dataManage() {
        customerDataVerify() ? sendOrderManage(customerData) : setDataError(true) ;
    }

    return (
        <div className="cartList">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <p>Ingrese sus datos para enviar el pedido:</p>
            <form action="">
                <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
                <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
                <input name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Repita correo electrónico" />
                <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
            </form>
            {dataError ? <p>Alguno de los datos ingresados es incorrecto</p> : <p></p>}
            <button onClick={clearCart}>Vaciar pedido</button>
            <button onClick={dataManage}>Enviar pedido</button>
        </div>
    );
}