import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import Loader from "./loading";
import './style/ItemDetailContainer.css';
import Video from "./videos/video";


export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);

    return (
        <div className="itemDetailContainer">
            {loader?
            <Loader/>:
            <ItemDetail item={item} /> }
            <div>
        <video className="itemDetail__video" src={item.video} width="320" height="240" autoplay="true" controls
            onEnded={Video}
            poster={item.img}></video>
            </div>
        </div>
        
        
    );
}