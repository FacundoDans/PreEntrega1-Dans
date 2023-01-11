import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(consola => <Item key={consola.id} info={consola} />)
    );
}

export default ItemList;