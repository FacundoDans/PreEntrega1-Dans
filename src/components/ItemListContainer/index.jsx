import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';



const consolas = [
    {id: 1, image: "https://as01.epimg.net/meristation/imagenes/2020/11/18/noticias/1605740083_818108_1605740214_noticia_normal.jpg", title:"Ps5"},
    {id: 2, image: "https://images.start.com.ar/RRT-00002GPUL1M-2.jpg", title:"Xbox Serie X"},
    {id: 3, image: "https://pandashop.com.ar/wp-content/uploads/2022/08/nintendo-switch-oled-64gb-standard-modelo-nuevo-.jpg", title:"Switch oled"},
    
];

export const ItemListContainer = ({texto}) =>{
const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve) => {
          setTimeout(() => {
                resolve(consolas);
        }, 2000);
        });

    getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return (
        <>
        <Title greeting= {texto} NombreDefault />
        <ItemCount initial={1} stock={99} onAdd={onAdd}/>
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;