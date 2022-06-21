import { useState } from 'react';
import './style/ItemCount.css';

export default function ItemCount({currentStock, onAdd}) {
    const [quantity, setQuantity] = useState(1);

    const increase = () => quantity < currentStock && setQuantity(quantity + 1);
    const decrease = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease} style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}>-</button>
            <span className="itemCount__quantity" style={{opacity: currentStock <= 0 && '0.5'}}>{currentStock <= 0 ? 0 : quantity}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase} style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}>+</button>
            <button className="itemCount__addToCartBtn" onClick={() => onAdd(quantity)} style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}>Mi lista</button>
        </div>
    );
};
