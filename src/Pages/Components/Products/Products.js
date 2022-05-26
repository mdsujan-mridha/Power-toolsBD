import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const[products,setProducts] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
         .then(data => setProducts(data))
        //  console.log(products);
    }  ,[])
    return (
        <div className='px-12 mx-12'>
            <h1 className='text-center text-6xl font-bold pb-10'>  Our Tools </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 mb-10 mt-5'>
            {
                products.map(product=><Product
                   key={product._id}
                   product={product}
                ></Product> )
            }
        </div>
        </div>
    );
};

export default Products;