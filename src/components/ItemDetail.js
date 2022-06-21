import { useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";
import './style/ItemDetail.css';




export default function ItemDetail({item}) {
    const [inputType, setInputType] = useState('itemCount');
    const {qtyInCart, addToCart, checkQtyInCart} = UseCartContext();
    
    
    function onAdd(quantity) {
        addToCart({...item, quantity})
        setInputType('buyButtons');
    }

    useEffect(() => {
        checkQtyInCart(item);
    });

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ? <ItemCount item={item} currentStock={item.stock - qtyInCart} onAdd={onAdd}/> : <BuyButtons/>}
                
            </div>
        </div>
    );
}