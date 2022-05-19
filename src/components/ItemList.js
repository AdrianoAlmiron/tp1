import Item from "./Item.js";
import './style/ItemList.css';

export default function ItemList({items, id}) {

    return (
        <div className="itemList">
            {id? 
                items.filter(el => el.categoria === id).map((el) => <Item key={el.id} el={el}/>)
                    :items.map((el) => <Item key={el.id} el={el}/>)
            }
        </div>
    );
}