import React, {useState, useEffect} from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', '5otn1pZtq8UMPdN8v7na');
        getDoc(querydb)
        .then(res => setData({id: res.id,...res.data()}))
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;