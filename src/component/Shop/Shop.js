import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts] = useState([]);
    //Click korle Shoping CArt e Add Hobe.
    const [cart,setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[]);

    const handleAddToCard = (product) =>{
        // console.log("Click");
        console.log(product)//data gulo
        // cart.push(product)
        const newCart = [...cart,product]//ager data rekhe nutun data pase diye add kora
        setCart(newCart) 

       }
    return (
        <div className='shop-container'>
            <div className="producs-container">
               { 
               products.map(product=> <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCard = {handleAddToCard} 
                ></Product>)
               } 
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;