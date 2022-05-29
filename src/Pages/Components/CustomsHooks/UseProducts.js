import React, { useEffect, useState } from 'react';

const UseProducts = () => {
   const[products,setProducts] = useState([]);

   useEffect( ()=>{

       fetch('https://guarded-bayou-50166.herokuapp.com/products')

        .then(res=> res.json())
         .then(data => setProducts(data));
   } ,[])
   return[products,setProducts];
};

export default UseProducts;