import { Link } from "react-router-dom";
import './style/Item.css';




export default function Item({item}) {

    return (
        <div className="item">
            <img className="item__img" src={item.img} alt="" style={{filter: item.stock <= 0 && 'grayscale(100%)'}}/>
            <div className='item__filter'></div>
            <div className='item__info'>
                <p className='item__category'>{item.category}</p>
                <h3 className="item__title">{item.name}</h3>
                <p className='item__price'>{`Repoducciones: ${item.price}M`}</p>
                <Link to={`/itemDetail/${item.id}`} style={{pointerEvents: item.stock <= 0 && 'none'}}>
                    <button className="item__addBtn" >{item.stock <= 0 ? 'No disponible' : 'Ver detalle'}</button>
                </Link>
            </div>
        </div>
    );
}