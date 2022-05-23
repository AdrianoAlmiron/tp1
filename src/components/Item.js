import { Link } from "react-router-dom";
import './style/Item.css';




export default function Item({el}) {

    return (
        <div className="item">
            <img className="item__img" src={el.img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <Link to={`/itemDetail/${el.id}`}>
                <button className="Item_addBtn"><img className="item__play" src={el.play} alt="" /></button>
                </Link>
                <h3 className="item__title">{el.name}</h3>
                <p className='item__price'>{`${el.price} Vistas`}</p>
            </div>
        </div>
        
    );
}