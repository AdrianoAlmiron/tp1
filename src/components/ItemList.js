import Item from "./Item.js";
import './style/ItemList.css';

export default function ItemList({items}) {
    return (
        <div className="itemList">
            {items.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    );
}