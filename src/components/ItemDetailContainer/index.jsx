import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const consola = {id: 1, image: "https://as01.epimg.net/meristation/imagenes/2020/11/18/noticias/1605740083_818108_1605740214_noticia_normal.jpg", title:"Ps5"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        const getData = new Promise((resolve) => {
          setTimeout(() => {
                resolve(consolas);
        }, 2000);
        });

    getData.then(res => setData(res));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;