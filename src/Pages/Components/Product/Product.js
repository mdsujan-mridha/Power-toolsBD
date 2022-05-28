import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product}) => {
    const { name, _id, img, content, price, quantity } = product;
  const navigate = useNavigate();
    // console.log(product);

    const [readMore, setReadMore] = useState(true);
    const toggleReadMore = () => { setReadMore(!readMore) };


    const purchaseProduct = id => {
        navigate(`/product/${id}`);
        
    }


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
                <img className='w-64 h-52' src={img} />
            </figure>
            <div class="card-body">
                <h2 class="card-title my-3 text-2xl font-semibold"> Product: {name} </h2>
                <p className='text-justify'> 
                {readMore ? content.slice(0, 80) : content}
                 {content.length > 90 &&
            <span className='text-cyan-500 font-semibold' onClick={toggleReadMore}>
               {readMore ? '...read more' : ' ...show less'};
           </span>
              }
                </p>
                <h1 className='text-left text-xl font-semibold'>
                    Available Quantity: {quantity}</h1>
                <p className='text-left text-xl font-semibold'> Price: {price}</p>
                <div class="card-actions items-center">
                    <button onClick={() => purchaseProduct(_id) } class="btn btn-primary items-center w-full text-white"> Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Product;