import { useEffect, useState } from "react";
import "../componets/ItemListContainer.css";

import img from "../componets/imagenes/dani.jpg"
import img1 from "../componets/imagenes/cazzu.jpg"
import img2 from "../componets/imagenes/Trueno.jpg"
import img3 from "../componets/imagenes/ptzate.jpg"
import img4 from "../componets/imagenes/residente.jpg"
import img5 from "../componets/imagenes/aleman.jpg"
import ItemList from "./ItemList.js";

const products = [
    {id: "01", categoria: "Bzrap", name: "DANI || BZRP Music Sessions #24", price: 60, img:img},
    {id: "02", categoria: "Bzrap", name: "CAZZU || BZRP Music Sessions #32", price: 90, img:img1},
    {id: "03", categoria: "Bzrap", name: "TRUENO || BZRP Music Sessions #16", price: 120, img:img2},
    {id: "04", categoria: "Bzrap", name: "Ptazeta || BZRP Music Sessions #45", price: 50, img:img3},
    {id: "05", categoria: "Bzrap", name: "RESIDENTE || BZRP Music Sessions #49", price: 80, img:img4},
    {id: "06", categoria: "Bzrap", name: "ALEMÁN || BZRP Music Sessions #15", price: 45, img:img5}
];

const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
})

export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    useEffect(() => {
        getFetch
        .then(res => setItems(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" style={{color: "white"}}>{greeting}</h1>
            {loader? <h2>Cargando...</h2>: <ItemList items={items} />}
        </div>
    );
}