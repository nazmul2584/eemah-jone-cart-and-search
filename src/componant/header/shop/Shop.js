import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../products/Products';
import './shop.css'

const Shop = () => {
    const [products,setproducts] =useState([]);
    const [card,setcard] = useState([])
    useEffect(()=>{

        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setproducts(data))
        
    },[])
    const handletocart = (product) =>{
        console.log(product)

    const newcard = [...card,setcard];
    setcard(newcard)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
           {
            products.map(product =>
                 <Products 
                 key= {product.id}
                product = {product}
                handletocart = {handletocart}
                 ></Products> )
           }
            </div>
            <div className="card-container">
            <Cart card = {card} ></Cart>
            </div>
        </div>
    );
};

export default Shop;