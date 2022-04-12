import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => { 
    const {handleAddToCard,product} =props;//shop theke asteche
    const {name,img,seller,price,ratings} = product;
    // console.log(name);
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
                    <p>Seller : {seller}</p>
                    <p>Rating: {ratings} Star's</p> 
            </div>
            {/* <button onClick={handleAddToCard}  className='cart-button'>Add to Cart t<i className="fa-solid fa-cart-arrow-down"></i></button> */}
            <button onClick={() => handleAddToCard(product)}  className='cart-button'>
               <p> Add to Cart </p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            

        </div>
        
    );
};

export default Product;