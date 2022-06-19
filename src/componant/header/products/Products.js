import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './products.css'

const Products = (props) => {
    const {name,price,img,seller} = props.product;
    const {handletocart} = props;
    return (
        <div className='products'>
            <img src= {img} alt="" />
           <div className='product-info'>
           <p> {name} </p>
            <p>price : {price} </p>
            <p><small> seller : {seller} </small></p>
           </div>
           <button onClick={ ()=> handletocart(props.product) } className='btn'>
            <p className='btn-txt'>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Products;