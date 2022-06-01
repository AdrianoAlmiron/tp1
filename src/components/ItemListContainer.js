import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import ItemList from "./ItemList";
import Loader from "./loading";
import "./style/ItemListContainer.css"

export default function ItemDetailContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams(3);

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        if (!id) {
            getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        } else {
            const queryCollectionFilter = query(queryCollection, where('category','==',id));
            getDocs(queryCollectionFilter)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }
    },[id]);

    return (
        <div className="itemListContainer">
            {loader? 
            <Loader/>:
            <ItemList items={items} />}
        </div>
    );
}