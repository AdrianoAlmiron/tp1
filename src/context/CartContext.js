import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore, where, query, documentId, writeBatch, getDocs } from "firebase/firestore";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [qtyInCart, setQtyInCart] = useState(0);

    function isInCart(item) {
        return cartList.some(el => el.id === item.id);
    }
    function addToCart(item) {
        if (isInCart(item)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }
    function clearCart(sent) {
        if(sent !== 'sent') setOrderId('');
        updateCart([]);
    }
    function clearItem(item) {
        setOrderId('');
        const newCartList = cartList.filter(el => el.id !== item.id);
        updateCart(newCartList);
    }
    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.quantity*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.quantity)
            .reduce((acc,curr) => acc+curr,0)
        );
    }
    function checkQtyInCart(item) {
        if (isInCart(item)) {
            let i = cartList.findIndex(el => el.id === item.id);
            setQtyInCart(cartList[i].quantity);
        } else {
            setQtyInCart(0);
        }
    }
    function createOrder(customerData) {
        let order = {};
        
        order.customerData = customerData;
        order.totalPrice = totalPrice;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const quantity = item.quantity;
            const newStock = item.stock-item.quantity;
            const price = item.price*item.quantity;
            return {id, name, quantity, newStock, price}
        });

        async function updateStocks() {
            const queryCollectionStocks = collection(db, 'items');
            const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
            const batch = writeBatch(db);
    
            await getDocs(queryUpdateStocks)
            .then(resp => resp.docs.forEach(
                res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
            ))
            .catch(err => console.log(err))
    
            batch.commit()
        }
    
        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderId(resp.id))
        .then(() => updateStocks())
        .catch(err => console.log(err))
        .finally(() => clearCart('sent'))
    };

    return (
        <cartContext.Provider value={{
            cartList,
            totalPrice,
            totalItems,
            orderId,
            qtyInCart,
            addToCart,
            clearCart,
            clearItem,
            createOrder,
            isInCart,
            checkQtyInCart
        }}>
            {children}
        </cartContext.Provider>
    );
}