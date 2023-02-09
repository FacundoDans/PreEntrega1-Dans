import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
   const { cart, totalPrice} = useCartContext();
   
   if (cart.length === 0) {
    return (
        <>
        <p>No hay productos en tu carrito</p>
        <Link to='/'>Empezar a comprar </Link>
        </>
    );
   }


    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }

        <p>
            Total: $ {totalPrice()}
        </p>
        </>
    )
}

export default Cart