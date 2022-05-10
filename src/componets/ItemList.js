import Item from "./Item.js";
import './ItemList.css';

export default function ItemList({items}) {

    return (
        <div className="itemList">
            {items.map(el => <Item key={el.id} categoria={el.categoria} name={el.name} price={el.price} img={el.img}/>)}
        </div>
    );
}