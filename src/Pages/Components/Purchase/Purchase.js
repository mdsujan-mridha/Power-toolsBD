import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    console.log(product);

    useEffect(() => {
        const url = `http://localhost:3000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <div>


        </div>
    );
};

export default Purchase;