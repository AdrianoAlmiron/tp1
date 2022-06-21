import Item from "./Item.js";
import './style/ItemList.css';

export default function ItemList({items}) {
    return (
        <div className="itemList">
            {items.map((item) => <Item key={item.id} item={item}/>)}
        </div>
    );
}