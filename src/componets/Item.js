import ItemCount from "./ItemCount";
import './Item.css';

export default function Item({categoria, name, price, img, id,}) {

    return (
        <div className="item">
            <img className="item__img" id={id} src={img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <h3 className="item__title">{name}</h3>
                <p className='item__price'>{`Reproducciones ${price}M`}</p>
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} Agregado a la Lista `)}/>
            </div>
        </div>
    );
}