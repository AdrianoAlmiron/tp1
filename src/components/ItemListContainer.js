import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./style/ItemListContainer.css"

export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch("/data/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemListContainer">
            {/* <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1> */}
            {loader? <h2>Cargando...</h2>: <ItemList items={items} id={id} />}
        </div>
    );
}