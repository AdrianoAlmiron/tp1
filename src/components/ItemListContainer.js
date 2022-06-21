import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import ItemList from "./ItemList";
import Loader from "./loading";
import "./style/ItemListContainer.css"

export default function ItemListContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        const queryCollectionFilter = id? query(queryCollection, where('category','==',id)) : queryCollection;
        
        getDocs(queryCollectionFilter)
        .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
        .then(data => data.sort((a, b) => {
            if (a.category > b.category) {return 1};
            if (a.category < b.category) {return -1};
            return 0;
        }))
        .then(sorted => setItems(sorted))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);
    
    return (
        <div className="itemListContainer">
            {loader? 
            <Loader/>:
            <ItemList items={items}  />}
        </div>
    );
}