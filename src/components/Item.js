import ItemCount from "./ItemCount";
import './style/Item.css';




export default function Item({el}) {

    return (
        <div className="item">
            <img className="item__img" src={el.img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <img className="item__play" src={el.play} alt="" />
                <h3 className="item__title">{el.name}</h3>
                <p className='item__price'>{`${el.price} Vistas`}</p>
                <ItemCount id={el.id} initial={0} stock={1} onAdd={(quantity)=>console.log(`${quantity} Se agrego a tu Mix`)}/>
            </div>
        </div>
        
    );
}